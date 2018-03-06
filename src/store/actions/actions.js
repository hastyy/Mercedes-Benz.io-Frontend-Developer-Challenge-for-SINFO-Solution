import {
    INCREMENT_PRODUCT_QUANTITY,
    DECREMENT_PRODUCT_QUANTITY,
    CHANGE_PRODUCT_QUANTITY,
    INIT_PRODUCT_DATA
} from './actionTypes';


const incrementProductQuantity = (productIndex) => ({
    type: INCREMENT_PRODUCT_QUANTITY,
    index: productIndex
});

const decrementProductQuantity = (productIndex) => ({
    type: DECREMENT_PRODUCT_QUANTITY,
    index: productIndex
});

const changeProductQuantity = (productIndex, quantity) => ({
    type: CHANGE_PRODUCT_QUANTITY,
    index: productIndex,
    newQuantity: quantity
});

const initProductData = (prices) => ({
    type: INIT_PRODUCT_DATA,
    quantities: new Array(prices.length).fill(0),
    prices
});


export default {
    incrementProductQuantity,
    decrementProductQuantity,
    changeProductQuantity,
    initProductData
};
