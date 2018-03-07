import './price.css';
import store from '../../store/store';
import { formatPriceToDisplay } from '../utility';


export default class PriceContainer {
    constructor(priceView) {
        this.priceView = priceView;

        store.subscribe(this._storeSubscription.bind(this, store));
    }

    _storeSubscription(store) {
        const total = store.getState().totalPrice;
        const totalToDisplay = formatPriceToDisplay(total);

        this.priceView.innerHTML = totalToDisplay;
    }
}
