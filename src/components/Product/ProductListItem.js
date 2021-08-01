import React, {useState} from 'react';
import "./ProductListItem.scss"
import {FiMinus, FiPlus} from "react-icons/fi";

const ProductListItem = (props) => {
    const formattedPrice = props.product.price.toFixed(2);
    const [qty, setQty] = useState(0)
    const onRemoveClickHandler = () => setQty((prvValue) => {
        if(prvValue > 0){
            return  --prvValue;
        }
        return prvValue;
    })
    const onAddClickHandler = () => setQty((prvValue) => ++prvValue)

    return (
        <div className="product-list-item h-80 bg-white-100 shadow-md rounded-lg w-full">
            <div className="product-list-item-image-wrapper">
                <div className="product-list-item-thumbnail w-full h-full" style={{backgroundImage: `url(${props.product.thumbnail_url})`}}/>
            </div>
            <div className="font-fabarie p-6 flex flex-row justify-between">
                <div>
                    <h3 className="text-2xl">{props.product.name}</h3>
                    <p className="text-xl">€ {formattedPrice}</p>
                </div>
                <div className="flex flex-row justify-center items-center">
                    <button className="product-list-item-qty-btn" onClick={onRemoveClickHandler}>
                        <FiMinus size={32} className="text-white-100"/>
                    </button>
                    <input type="number" min="0" step="1" value={qty} className="w-12 text-xl rounded-lg text-center" />
                    <button  className="product-list-item-qty-btn" onClick={onAddClickHandler}>
                        <FiPlus size={32} className="text-white-100"/>
                    </button>
                </div>
            </div>

        </div>
    );
};

export default ProductListItem;