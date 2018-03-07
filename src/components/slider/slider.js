import './slider.css';
import { lory } from 'lory.js';


export default class Slider {

    constructor(sliderElement, options, slidesCount) {
        this.slider = sliderElement;
        this.slidesCount = slidesCount;
        this.step = options.slidesToScroll || 1;
        this.api = this._initSlider(options);

        this._setupSliderIndexCorrector();
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
            } else if (sliderIndex < firstWindowIndex) {
                this.api.slideTo(firstWindowIndex);
            }
        });
    }
}
