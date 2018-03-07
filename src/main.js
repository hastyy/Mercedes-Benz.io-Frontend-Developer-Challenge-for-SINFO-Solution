import 'normalize.css';
import './styles.css';
import Product from './components/product/product';
import PriceContainer from './components/price/price';
import Slider from './components/slider/slider';
import actions from './store/actions/actions';
import store from './store/store';


const controlButtons = document.querySelectorAll('.product__controls__action');
const controlInputs = document.querySelectorAll('.product__controls__quantity');
const priceViews = document.querySelectorAll('.product__price');
const totalPriceView = document.querySelector('.total__value');
const slider = document.querySelector('.js_slider');
const sliderControlPrev = document.querySelector('.prev');
const sliderControlNext = document.querySelector('.next');

const products = [];

const parsePriceValue = (displayedPrice) => {
    const priceString = displayedPrice.slice(0, -2).replace(',', '');
    return parseInt(priceString);
};

const getProductButtons = (buttons, index) => {
    const decrementBtn = buttons[2 * index];
    const incrementBtn = buttons[2 * index + 1];
    
    return [decrementBtn, incrementBtn];
};

// We have one these DOM elements for each product component, which means that
// the 'priceViews' length is the number of products we have to instantiate
priceViews.forEach((view, index) => {
    const price = parsePriceValue(view.innerHTML);
    const [decrementBtn, incrementBtn] = getProductButtons(controlButtons, index);
    const input = controlInputs[index];

    const product = new Product(index, price, incrementBtn, decrementBtn, input);
    products.push(product);
});

new PriceContainer(totalPriceView);

new Slider(slider, products.length, {
    prev: sliderControlPrev,
    next: sliderControlNext
});

// Populate the store with price values
store.dispatch(actions.initProductData(products.map(p => p.getPrice())));
