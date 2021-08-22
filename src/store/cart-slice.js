import {createSlice} from "@reduxjs/toolkit";

const initialCustomer = {
    name: '',
    lastName: '',
    city: '',
    country: '',
    zipcode: '',
    address: ''
}

const initialState = {
    items: [],
    customer : initialCustomer,
    isCustomerValid: false,
}

const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers:{
        itemChanged(state, action){
            if(state.items.filter((item) => item.id === action.product.id).length > 0){
                state.items = state.items.map((item) => {
                    if(item.id === action.product.id){
                        item.qty = action.product.qty;
                    }
                    return item;
                })
            }
        },
        removeProduct(state, action){
            state.items.filter((item) => item.id !== action.product.id)
        },
        resetCustomer(state){
            state.customer = initialCustomer
        },
        resetCart(state){
            state = initialState
        },
        checkoutValidity(state, action){
            state.isCustomerValid = action.valid;
        }
    }
})

export const cartActions = cartSlice.actions;

export default cartSlice;