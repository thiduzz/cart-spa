// @flow
import * as React from 'react';

export function TopBar(props) {
    return (
        <div className="bg-gray-400 shadow-md w-full">
            <div className="container mx-auto px-4 py-2 flex justify-between items-center">
                <h1 className="font-fabarie uppercase text-white-400 text-5xl font-extralight">Fabarie</h1>
                <div>Cart</div>
            </div>
        </div>
    );
};