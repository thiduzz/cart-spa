import React from 'react';

export const InitialCustomer = {
    name: '',
    address: '',
    zipcode: '',
    city: '',
    country: ''
}

export const CartContext = React.createContext({
    items: [],
    customer: InitialCustomer,
    onChange: () => {},
});



export default CartContext;