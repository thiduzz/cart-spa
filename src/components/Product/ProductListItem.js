import React, { useEffect, useState} from 'react';
import "./ProductListItem.scss"
import ProductQuantityButton from "./ProductQuantityButton";
import {useDispatch, useSelector} from "react-redux";
import {cartActions} from "../../store/cart-slice";

const ProductListItem = ({product}) => {
    const {items} = useSelector((state) => state.cart);
    const dispatch = useDispatch();
    const [qty, setQty] = useState(0)
    useEffect(() => {
        if (qty >= 1){
            dispatch(cartActions.itemChanged({...product, qty}))
        }else{
            dispatch(cartActions.productRemoved(product))
        }
        return () => {}
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[qty])

    useEffect(() => {
        const cartItem = items.find((item)=> item.id === product.id)
        if(cartItem && cartItem.qty !== qty){
            setQty(cartItem.qty)
        }
        if(qty >= 1 && !cartItem){
            setQty(0)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[items, product])

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