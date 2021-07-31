// @flow
import * as React from 'react';
import {FiShoppingCart} from "react-icons/fi";

export function CartButton() {
    return (
        <div className="bg-white-400 px-10 py-2 shadow-inner shadow-2xl rounded-full">
            <div className="relative">
                <span className="bg-red-400 rounded-full p-1 font-fabarie w-6 h-6 absolute text-white-400 text-center leading-normal flex items-center justify-center -top-3 -right-4">3</span>
                <FiShoppingCart size={32} className="text-gray-400"/>
            </div>
        </div>
    );
};