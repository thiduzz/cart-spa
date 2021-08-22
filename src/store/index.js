import {configureStore} from '@reduxjs/toolkit'
import cartSlice from "./cart-slice";

configureStore({
    cart: cartSlice
})