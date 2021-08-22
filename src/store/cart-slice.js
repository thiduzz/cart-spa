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
            if(state.items.filter((item) => item.id === action.payload.id).length > 0){
                state.items = state.items.map((item) => {
                    if(item.id === action.payload.id){
                        item.qty = action.payload.qty;
                    }
                    return item;
                })
            }else{
                state.items = [action.payload, ...state.items]
            }
        },
        productRemoved(state, action){
            state.items.filter((item) => item.id !== action.payload.id)
        },
        setCustomer(state,action){
            state.customer = action.payload ? action.payload : initialCustomer
        },
        resetCart(state){
            state.customer = initialCustomer
            state.items = []
            state.isCustomerValid = false;
        },
        checkoutValidity(state, action){
            state.isCustomerValid = action.payload;
        }
    }
})

export const cartActions = cartSlice.actions;

export default cartSlice;