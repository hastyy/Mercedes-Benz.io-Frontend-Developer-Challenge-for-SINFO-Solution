import './slider.css';
import { lory } from 'lory.js';


const STEP_BY_WIDTH = new Map();
STEP_BY_WIDTH.set(232, 1);
STEP_BY_WIDTH.set(496, 2);
STEP_BY_WIDTH.set(760, 3);


export default class Slider {

    constructor(slider, slidesCount, controls, options = {}) {
        this.slider = slider;
        this.length = slidesCount;
        this.controls = controls;
        this.options = options;

        this.index = this.index = options.initialIndex || 0;
        this.width = this.slider.offsetWidth;
        this.step = STEP_BY_WIDTH.get(this.width);
        this.api = this._setup(options);

        this.hideControl('prev');
        this._bindSliderIndexCorrector();
        this._bindSliderResizeBehaviour();
    }

    _setup(options = {}) {
        const opts = {
            ...options,
            slidesToScroll: this.step,
            infinite: this.step,
            initialIndex: this.index
        };

        if (this.api)
            this.api.destroy();

        return lory(this.slider, opts);
    }

    _bindSliderIndexCorrector() {
        this.slider.addEventListener('after.lory.slide', () => {
            const sliderIndex = this.api.returnIndex();

            if (this._isLastSlideBackward(sliderIndex)) {
                const firstWindowIndex = this.getFirstWindowIndex();
                if (sliderIndex === firstWindowIndex) {
                    this.hideControl('prev');
                    this.showControl('next');
                } else {    // is lower, needs correction
                    this.api.slideTo(firstWindowIndex);
                    this.index = firstWindowIndex;
                }
            } else if (this._isLastSlideForward(sliderIndex)) {
                const lastWindowIndex = this.getLastWindowIndex();
                if (sliderIndex === lastWindowIndex) {
                    this.hideControl('next');
                    this.showControl('prev');
                } else {    // is higher, needs correction
                    this.api.slideTo(lastWindowIndex);
                    this.index = lastWindowIndex;
                }
            } else {
                this.showControl('prev');
                this.showControl('next');

                this.index = sliderIndex;
            }
        });
    }

    _bindSliderResizeBehaviour() {
        this.slider.addEventListener('on.lory.resize', () => {
            this._preventResizeDefaultBehaviour();
            
            const measuredWidth = this.slider.offsetWidth;

            if (measuredWidth !== this.width) {
                const prevWidth = this.width;

                this.width = measuredWidth;
                this.step = STEP_BY_WIDTH.get(this.width);

                this.api = this._setup(this.options);

                this._adjustControlsOnResize();
                this._adjustIndexOnResize(prevWidth);
            }
        });
    }

    _preventResizeDefaultBehaviour() {
        this.api.slideTo(this.index);
    }

    _adjustControlsOnResize() {
        if (!this._isLastSlideForward(this.index)) {
            this.showControl('next');
        } else {
            this.hideControl('next');
        }
    }

    _adjustIndexOnResize(prevWidth) {
        const sliderGrew = prevWidth < this.width;
        const slidesOverflow = this.index > this.getLastWindowIndex();

        if (sliderGrew && slidesOverflow) {
            this.index = this.index - 1;
            this.api.slideTo(this.index);
        }
    }

    getFirstWindowIndex() {
        return 0;
    }

    getLastWindowIndex() {
        return this.length - this.step;
    }

    _isLastSlideForward(index) {
        return index >= this.getLastWindowIndex();
    }

    _isLastSlideBackward(index) {
        return index <= this.getFirstWindowIndex();
    }

    hideControl(control) {
        const ctrl = this.controls[control];

        if (ctrl.style.display === 'none')
            return;

        ctrl.style.display = 'none';
    }

    showControl(control) {
        const ctrl = this.controls[control];

        if (ctrl.style.display === 'block')
            return;

        ctrl.style.display = 'block';
    }

}
