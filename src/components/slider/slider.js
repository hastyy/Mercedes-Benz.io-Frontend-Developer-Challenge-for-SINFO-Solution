import './slider.css';
import { lory } from 'lory.js';


export default class Slider {

    constructor(sliderElement, options, slidesCount, controls) {
        this.slider = sliderElement;
        this.controls = controls;
        this.slidesCount = slidesCount;
        this.step = options.slidesToScroll || 1;
        this.api = this._initSlider(options);

        this._setupSliderIndexCorrector();
        this.hideControl('prev');
    }

    _initSlider(options) {
        return lory(this.slider, options);
    }

    _setupSliderIndexCorrector() {
        this.slider.addEventListener('after.lory.slide', () => {
            const firstWindowIndex = 0;
            const lastWindowIndex = this.slidesCount - this.step;
            const sliderIndex = this.api.returnIndex();

            if (sliderIndex > lastWindowIndex) {
                this.api.slideTo(lastWindowIndex);
                return;
            }
            
            if (sliderIndex < firstWindowIndex) {
                this.api.slideTo(firstWindowIndex);
                return;
            }

            if (sliderIndex === firstWindowIndex) {
                this.hideControl('prev');
                return;
            }

            if (sliderIndex === lastWindowIndex) {
                this.hideControl('next');
                return;
            }

            this.showControl('prev');
            this.showControl('next');
        });
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
