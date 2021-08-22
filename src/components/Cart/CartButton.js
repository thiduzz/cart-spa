import * as React from 'react';
import './CartButton.scss'
import {FiShoppingCart} from "react-icons/fi";
import {useState} from "react";
import {createPortal} from "react-dom";
import CartModal from "./CartModal";
import {useSelector} from "react-redux";

export function CartButton() {
    const items = useSelector((state) => {
        return state.cart.items
    })
    const [isCartModalOpen, setCartModalOpen] = useState(false)
    const onCartModalCloseHandler = () => {
      setCartModalOpen(false)
    }

    const onCartModalOpenHandler = () => setCartModalOpen((prevState) => !prevState)

    return (
        <React.Fragment>
            {isCartModalOpen && createPortal(<CartModal onClose={onCartModalCloseHandler}/>,document.getElementById('modal-frame'),'cart-modal')}
            <div className="cart-btn" onClick={onCartModalOpenHandler}>
                <div className="relative">
                    <span className="cart-btn-bubble">{items.length}</span>
                    <FiShoppingCart size={32} className="text-gray-400"/>
                </div>
            </div>
        </React.Fragment>
    )
};