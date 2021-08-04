import React from 'react';

export const CartContext = React.createContext({
    items: [],
    onChange: () => {},
});



export default CartContext;