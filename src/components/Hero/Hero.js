// @flow
import * as React from 'react';
import adImage from './ad.jpg'
import './Hero.scss'

export function Hero(props) {
    const classes = 'hero-wrapper ' + props.className;
    return (
        <div className={classes}>
            <div style={{backgroundImage: `url(${adImage})`}} className="hero w-full bg-cover bg-center bg-no-repeat"/>
            {props.children}
        </div>
    );
};