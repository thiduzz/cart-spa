import React, {useEffect, useState} from 'react';
import ProductListItem from "./ProductListItem";
import useHttp from "../../hooks/use-http";
import {ImSpinner8} from "react-icons/im";


const ProductList = () => {
    const [products, setProducts] = useState([])
    const {sendRequest: fetchProducts, isLoading, error } = useHttp()

    useEffect(() =>  {
        fetchProducts({url: 'products.json'}).then(function(response){
            if(response.data){
                setProducts(response.data)
            }
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    return (
        <React.Fragment>
            {!isLoading && products.length > 0 && <div className="grid grid-cols-3 gap-6 place-items-center">
                {products.map((product) => <ProductListItem product={product} key={product.id} />)}
            </div>}
            {!isLoading && products.length <= 0 && <p>No products available</p>}
            {!isLoading && error && <p>Woops! An error occured: {error}</p>}
            {isLoading && <div className="flex flex-row items-center justify-center"><ImSpinner8 className="icon-spin mr-10" size={32}/> Loading...</div>}
        </React.Fragment>
    );
};

export default ProductList;