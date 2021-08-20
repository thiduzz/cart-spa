import React, {useContext} from 'react';
import CartItem from "./CartItem";
import CartContext from "../../store/cart-context";

const CartModalListing = () => {
    const ctx = useContext(CartContext)
    const hasItemsInCart = ctx.items.length > 0;
    const totalValue = ctx.items.reduce((total, currentItem) => {
        return total + (currentItem.qty * currentItem.price)
    },0).toFixed(2)
    return (
        <React.Fragment>
            <h2 className="text-3xl text-center mb-5">Cart</h2>
            {hasItemsInCart && <ul className="w-full">{ctx.items.map((item) => <CartItem item={item} key={item.id} onQuantityChange={ctx.onChange} />)}</ul>}
            {hasItemsInCart &&  <div className="font-fabarie font-bold text-2xl">
                <div className="border-t-2 border-black-100">Total: € {totalValue}</div>
            </div>}
            {!hasItemsInCart && <h1>No items in the cart</h1>}
        </React.Fragment>
    );
};

export default CartModalListing;