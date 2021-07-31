// @flow
import * as React from 'react';
import {FiShoppingCart} from "react-icons/fi";

export function TopBar(props) {
    return (
        <div className="bg-white-400 shadow-md w-full">
            <div className="container mx-auto px-4 py-2 flex justify-between items-center">
                <h1 className="font-fabarie uppercase text-gray-400 text-5xl font-extralight">Fabarie</h1>
                <div><FiShoppingCart size={32} className="text-gray-400"/></div>
            </div>
        </div>
    );
};