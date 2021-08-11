import React, {useContext} from 'react';
import Modal from "../UI/Modal";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";

const CartModal = (props) => {
    const ctx = useContext(CartContext)
    const hasItemsInCart = ctx.items.length > 0;
    const totalValue = ctx.items.reduce((total, currentItem) => {
        return total + (currentItem.qty * currentItem.price)
    },0).toFixed(2)
    return (
        <Modal onClose={props.onClose} buttons={
            <div className="flex flex-row justify-between w-full">
                <button onClick={props.onClose} className="text-2xl">Close</button>
                {hasItemsInCart && <button className="bg-red-400 text-white-100 px-6 py-3 rounded-2xl text-2xl">Order</button>}
            </div>
            }>
            {hasItemsInCart && <ul className="w-full">{ctx.items.map((item) => <CartItem item={item} key={item.id} onQuantityChange={ctx.onChange} />)}</ul>}
            {hasItemsInCart &&  <div className="font-fabarie font-bold text-2xl">
                <div className="border-t-2 border-black-100">Total: € {totalValue}</div>
            </div>}
            {!hasItemsInCart && <h1>No items in the cart</h1>}
        </Modal>
    );
};

export default CartModal;