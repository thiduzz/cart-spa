// @flow
import * as React from 'react';
import adImage from './ad.jpg'
import './Hero.scss'

export function Hero() {
    return (
        <div>
            <div style={{backgroundImage: `url(${adImage})`}} className="w-full h-96 bg-cover bg-bottom bg-no-repeat bg-fixed"/>
        </div>
    );
};