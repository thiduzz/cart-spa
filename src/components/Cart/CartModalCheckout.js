import React, {useContext} from 'react';
import CartContext from "../../store/cart-context";

const CartModalCheckout = () => {
    const ctx = useContext(CartContext)
    const hasItemsInCart = ctx.items.length > 0;
    const totalValue = ctx.items.reduce((total, currentItem) => {
        return total + (currentItem.qty * currentItem.price)
    },0).toFixed(2)
    return (
        <React.Fragment>
            <div>CHECKOUT FORM</div>
            {hasItemsInCart &&  <div className="font-fabarie font-bold text-2xl">
                <div className="border-t-2 border-black-100">Total: € {totalValue}</div>
            </div>}
        </React.Fragment>
    );
};

export default CartModalCheckout;