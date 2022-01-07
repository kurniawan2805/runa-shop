// always takes initial state of reducer

// import React from 'react';
import { ActionTypes } from '../constants/actions-types';


const initialState = {
    products: [
        // {
        //     id: 1,
        //     title: 'Adi',
        //     category: 'programmer',
        // }
    ]
};

export const productsReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.SET_PRODUCT:
            return { ...state, products: payload };
        default:
            return state;
    }
}

export const selectedProductReducer = (state = {}, { type, payload }) => {
    switch (type) {
        case ActionTypes.SELECTED_PRODUCT:
            return { ...state, ...payload };
        case ActionTypes.REMOVE_SELECTED_PRODUCT:
            return {};
        default:
            return state;
    }
}

