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
            return {items:[action.product, ...state.items], customer: state.customer}
        case 'ITEM_REMOVED':
            return {items: state.items.filter((item) => item.id !== action.product.id), customer: state.customer}
        case 'RESET_CUSTOMER':
            return {items: state.items, customer: InitialCustomer}
        default:
            return state;
    }
}

const CartProvider = (props) => {

    const [cartState, cartDispatch] = useReducer(useCallback(cartReducerCallback,[]), {items: [], customer: InitialCustomer});
    return (
        <CartContext.Provider value={ {items: cartState.items, onChange: cartDispatch, customer: cartState.customer } }>
            {props.children}
        </CartContext.Provider>
    );
};

export default CartProvider;