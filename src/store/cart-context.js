import React from 'react';

export const InitialCustomer = {
    name: '',
    lastName: '',
    address: '',
    zipcode: '',
    city: '',
    country: ''
}

export const CartContext = React.createContext({
    items: [],
    customer: InitialCustomer,
    isCustomerValid: false,
    onChange: () => {},
});



export default CartContext;