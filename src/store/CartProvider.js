import React, {useCallback, useReducer} from 'react';
import {CartContext, InitialCustomer} from "./cart-context";

const cartReducerCallback = (state, action) => {
    switch (action.type) {
        case 'ITEM_CHANGED':
            if(state.items.filter((item) => item.id === action.product.id).length > 0){
                return {
                    items: state.items.map((item) => {
                        if(action.product.id === item.id){
                            item.qty = action.product.qty;
                        }
                        return item;
                    })
                };
            }
            return {items:[action.product, ...state.items], customer: state.customer, isCustomerValid: state.isCustomerValid}
        case 'ITEM_REMOVED':
            return {items: state.items.filter((item) => item.id !== action.product.id), customer: state.customer, isCustomerValid: state.isCustomerValid}
        case 'RESET_CUSTOMER':
            return {items: state.items, customer: InitialCustomer, isCustomerValid: false}
        case 'CHECKOUT_VALID':
            return {items: state.items, customer: state.customer, isCustomerValid: true}
        case 'CHECKOUT_INVALID':
            return {items: state.items, customer: state.customer, isCustomerValid: false}
        default:
            return state;
    }
}

const CartProvider = (props) => {

    const [cartState, cartDispatch] = useReducer(useCallback(cartReducerCallback,[]), {items: [], customer: InitialCustomer, isCustomerValid: false});
    return (
        <CartContext.Provider value={ {items: cartState.items, onChange: cartDispatch, customer: cartState.customer, isCustomerValid: cartState.isCustomerValid } }>
            {props.children}
        </CartContext.Provider>
    );
};

export default CartProvider;