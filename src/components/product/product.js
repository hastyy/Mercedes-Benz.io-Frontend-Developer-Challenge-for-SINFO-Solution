import './product.css';
import actions from '../../store/actions/actions';
import store from '../../store/store';


export default class Product {

    constructor(index, price, incrementBtn, decrementBtn, quantityInput) {
        this.index = index;
        this.price = price;
        this.incrementBtn = incrementBtn;
        this.decrementBtn = decrementBtn;
        this.quantityInput = quantityInput;

        this._setIncrementClickHandler();
        this._setDecrementClickHandler();
        this._setQuantityChangeHandler();

        store.subscribe(this._storeSubscription.bind(this, store));
    }

    _setIncrementClickHandler() {
        this.incrementBtn.addEventListener('click', () => {
            store.dispatch(actions.incrementProductQuantity(this.index));
        });
    }

    _setDecrementClickHandler() {
        this.decrementBtn.addEventListener('click', () => {
            store.dispatch(actions.decrementProductQuantity(this.index));
        });
    }

    _setQuantityChangeHandler() {
        // Input validation
        this.quantityInput.addEventListener('input', (e) => {
            const inputIsValid = e.target.value.match(/^\d+$/);
            if (!inputIsValid)
                e.target.value = '';
        });

        this.quantityInput.addEventListener('change', (e) => {
            const quantity = e.target.value;

            if (!quantity) {
                e.target.value = store.getState().quantities[this.index];
                return;
            }

            store.dispatch(actions.changeProductQuantity(this.index, quantity));
        });
    }

    _storeSubscription(store) {
        const quantity = store.getState().quantities[this.index];
        if (quantity > 0 && this.decrementBtn.disabled) {
            this.decrementBtn.disabled = false;
        } else if (quantity === 0 && !this.decrementBtn.disabled) {
            this.decrementBtn.disabled = true;
        }

        if (quantity !== this.quantityInput.value)
            this.quantityInput.value = quantity;
    }

    getPrice() {
        return this.price;
    }

}
