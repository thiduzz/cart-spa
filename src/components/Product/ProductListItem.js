import React, { useContext, useEffect, useState} from 'react';
import "./ProductListItem.scss"
import CartContext from "../../store/cart-context";
import ProductQuantityButton from "./ProductQuantityButton";

const ProductListItem = ({product}) => {
    const [qty, setQty] = useState(0)
    const {onChange} = useContext(CartContext);
    useEffect(() => {
        if (qty >= 1){
            onChange({type: 'ITEM_ADDED', product: {...product, qty}})
        }else{
            onChange({type: 'ITEM_REMOVED', product: product})
        }
        return () => {}
    },[qty, product, onChange])

    const onRemoveClickHandler = () => {
        setQty((prvValue) => {
            if(prvValue > 0){
                return prvValue - 1;
            }
            return prvValue;
        });
    }

    const onAddClickHandler = () => {
        setQty((prvValue) => prvValue + 1)
    }

    const onChangeInputHandler = (e) => {
        setQty((prvValue) => {
            if(e.target.value > 0){
                return parseInt(e.target.value);
            }
            if(e.target.value === ''){
                return 0;
            }
            return prvValue;
        })
    };


    const formattedPrice = product.price.toFixed(2);
    return (
        <div className="product-list-item h-72 bg-white-100 shadow-md rounded-lg w-full">
            <div className="product-list-item-image-wrapper">
                <div className="product-list-item-thumbnail w-full h-full" style={{backgroundImage: `url(${product.thumbnail_url})`}}/>
            </div>
            <div className="font-fabarie p-4 flex flex-row justify-between">
                <div>
                    <h3 className="text-2xl">{product.name}</h3>
                    <p className="text-xl">€ {formattedPrice}</p>
                </div>
                <div className="flex flex-row justify-center items-center">
                    <ProductQuantityButton type="remove" onClick={onRemoveClickHandler}/>
                    <input type="number" onChange={onChangeInputHandler} min="0" step="1" value={qty} className="w-12 text-xl rounded-lg text-center mx-2 shadow-inner shadow-2xl " />
                    <ProductQuantityButton type="add" onClick={onAddClickHandler}/>
                </div>
            </div>

        </div>
    );
};

export default ProductListItem;