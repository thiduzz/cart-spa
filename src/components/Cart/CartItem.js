import React from 'react';
import {FiMinus, FiPlus} from "react-icons/fi";

const CartItem = (props) => {
    const formattedPrice = props.item.price.toFixed(2);

    const onRemoveClickHandler = () => {

    }

    const onAddClickHandler = () => {

    }

    return (
        <li className="flex flex-row w-full">
            <div className="flex flex-col justify-start">
                <div className="text-xl">{props.item.name}</div>
                <div className="flex flex-row">
                    <span>{formattedPrice}</span>
                    <span>{props.item.qty}</span>
                </div>
            </div>
            <div>

            </div>
        </li>
    );
};

export default CartItem;