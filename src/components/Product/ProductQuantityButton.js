import React from 'react';
import {FiMinus, FiPlus} from "react-icons/fi";
import './ProductQuantityButton.scss'

const ProductQuantityButton = (props) => {
    const size = props.size || 32;
    return (
        <button  className="product-list-item-qty-btn" onClick={props.onClick}>
            {props.type === 'add' && <FiPlus size={size} className="text-white-100"/> }
            {props.type === 'remove' && <FiMinus size={size} className="text-white-100"/> }
        </button>
    );
};

export default ProductQuantityButton;