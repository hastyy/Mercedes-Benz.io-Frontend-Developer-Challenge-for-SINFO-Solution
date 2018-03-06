import { updateObject, replaceArrayElement } from '../../components/utility';
import {
    INCREMENT_PRODUCT_QUANTITY,
    DECREMENT_PRODUCT_QUANTITY,
    CHANGE_PRODUCT_QUANTITY,
    INIT_PRODUCT_DATA
} from '../actions/actionTypes';


const INITIAL_STATE = {
    quantities: [],
    prices: [],
    totalPrice: 0
};

const initProductData = (state, action) => {
    const { quantities, prices } = action;
    return updateObject(state, { quantities, prices });
};

const incrementProductQuantity = (state, action) => {
    const incrementedQuantity = state.quantities[action.index] + 1;
    const newQuantities = replaceArrayElement(
        state.quantities,
        action.index,
        incrementedQuantity
    );
    const currentPrice = state.prices[action.index];
    const newTotal = state.totalPrice + currentPrice;
    const updatedProperties = {
        quantities: newQuantities,
        totalPrice: newTotal
    };

    return updateObject(state, updatedProperties);
};

const decrementProductQuantity = (state, action) => {
    const decrementedQuantity = state.quantities[action.index] - 1;
    const newQuantities = replaceArrayElement(
        state.quantities,
        action.index,
        decrementedQuantity
    );
    const currentPrice = state.prices[action.index];
    const newTotal = state.totalPrice - currentPrice;
    const updatedProperties = {
        quantities: newQuantities,
        totalPrice: newTotal
    };

    return updateObject(state, updatedProperties);
};

const changeProductQuantity = (state, action) => {
    const newQuantities = replaceArrayElement(
        state.quantities,
        action.index,
        action.newQuantity
    );
    const currentQuantity = state.quantities[action.index];
    const quantityDifference = action.newQuantity - currentQuantity;
    const currentPrice = state.prices[action.index];
    const newTotal = state.totalPrice + quantityDifference * currentPrice;
    const updatedProperties = {
        quantities: newQuantities,
        totalPrice: newTotal
    };

    return updateObject(state, updatedProperties);
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case INIT_PRODUCT_DATA:
            return initProductData(state, action);
        case INCREMENT_PRODUCT_QUANTITY:
            return incrementProductQuantity(state, action);
        case DECREMENT_PRODUCT_QUANTITY:
            return decrementProductQuantity(state, action);
        case CHANGE_PRODUCT_QUANTITY:
            return changeProductQuantity(state, action);
        default:
            return state;
    }
};
