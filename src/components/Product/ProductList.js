import React from 'react';
import ProductListItem from "./ProductListItem";

const ProductList = (props) => {
    const Products = [
        {id: 1, name: "Product 1", price: 20.3, thumbnail_url: "https://picsum.photos/seed/product1/500/500"},
        {id: 2, name: "Product 2", price: 300, thumbnail_url: "https://picsum.photos/seed/product2/500/500"},
        {id: 3, name: "Product 3", price: 223, thumbnail_url: "https://picsum.photos/seed/product3/500/500"},
        {id: 4, name: "Product 4", price: 999, thumbnail_url: "https://picsum.photos/seed/product4/500/500"},
        {id: 5, name: "Product 5", price: 2200, thumbnail_url: "https://picsum.photos/seed/product5/500/500"},
        {id: 6, name: "Product 6", price: 9.99, thumbnail_url: "https://picsum.photos/seed/product6/500/500"},
        {id: 7, name: "Product 7", price: 7.90, thumbnail_url: "https://picsum.photos/seed/product7/500/500"},
        {id: 8, name: "Product 8", price: 3.50, thumbnail_url: "https://picsum.photos/seed/product8/500/500"},
        {id: 9, name: "Product 9", price: 20.6, thumbnail_url: "https://picsum.photos/seed/product9/500/500"},
        {id: 10, name: "Product 10", price: 99.9, thumbnail_url: "https://picsum.photos/seed/product10/500/500"},
    ]
    return (
        <div className="grid grid-cols-3 gap-6 place-items-center">
            {Products.map((product) => <ProductListItem product={product}/>)}
        </div>
    );
};

export default ProductList;