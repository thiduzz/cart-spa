// @flow
import * as React from 'react';
import './CartButton.scss'
import {FiShoppingCart} from "react-icons/fi";
import CartContext from "../../store/cart-context";
import {useContext} from "react";

export function CartButton() {
    const ctx = useContext(CartContext)
    return (
        <div className="cart-btn">
            <div className="relative">
                <span className="cart-btn-bubble">{ctx.items.length}</span>
                <FiShoppingCart size={32} className="text-gray-400"/>
            </div>
        </div>
    )
};