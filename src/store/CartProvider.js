import React, {useCallback, useReducer} from 'react';
import CartContext from "./cart-context";

const cartReducerCallback = (state, action) => {
    console.log('app.js action: ' + JSON.stringify(action))
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
            return {items:[action.product, ...state.items]}
        case 'ITEM_REMOVED':
            return {items: state.items.filter((item) => item.id !== action.product.id)}
        default:
            return state;
    }
}

const CartProvider = (props) => {

    const [cartState, cartDispatch] = useReducer(useCallback(cartReducerCallback,[]), {items: []});
    return (
        <CartContext.Provider value={ {items: cartState.items, onChange: cartDispatch } }>
            {props.children}
        </CartContext.Provider>
    );
};

export default CartProvider;