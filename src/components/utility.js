export const updateObject = (oldObject, updatedProperties) => {
    return {
        ...oldObject,
        ...updatedProperties
    };
};

export const replaceArrayElement = (array, index, newElement) => {
    return [
        ...array.slice(0, index),
        newElement,
        ...array.slice(index+1)
    ];
};

export const formatPriceToDisplay = (price) => {
    let output = (price/100).toFixed(2);
    output += ' €';

    return output;
};
