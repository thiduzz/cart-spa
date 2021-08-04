import React from 'react';
import ProductQuantityButton from "../Product/ProductQuantityButton";

const CartItem = (props) => {
    const formattedPrice = props.item.price.toFixed(2);

    const onRemoveClickHandler = () => {

    }

    const onAddClickHandler = () => {

    }

    return (
        <li className="flex flex-row w-full justify-between font-fabarie items-center">
            <div className="flex flex-col justify-start">
                <div className="text-xl font-bold">{props.item.name}</div>
                <div className="flex flex-row">
                    <span className="mr-2">€ {formattedPrice}</span>
                    <span>x {props.item.qty}</span>
                </div>
            </div>
            <div className="flex flex-row">
                <ProductQuantityButton className="mr-2" type="remove" onClick={onRemoveClickHandler}/>
                <ProductQuantityButton type="add" onClick={onAddClickHandler}/>
            </div>
        </li>
    );
};

export default CartItem;