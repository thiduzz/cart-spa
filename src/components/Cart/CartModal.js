import React, {useContext} from 'react';
import Modal from "../UI/Modal";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";

const CartModal = (props) => {
    const ctx = useContext(CartContext)
    const hasItemsInCart = ctx.items.length > 0;
    return (
        <Modal onClose={props.onClose}>
            {hasItemsInCart && <ul className="w-full">{ctx.items.map((item) => <CartItem item={item} key={item.id}/>)}</ul>}
            {hasItemsInCart &&  <div>
                <div>Total amount: X</div>
                <div>
                    <button>Close</button>
                    <button>Order</button>
                </div>
            </div>}
            {!hasItemsInCart && <h1>No items in the cart</h1>}
        </Modal>
    );
};

export default CartModal;