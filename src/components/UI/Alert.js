import React from 'react';
import './Alert.scss'

const Alert = (props) => {
    return (
        <div className={"alert " + props.type || 'info'}>
            <div className="wrapper"
                 role="alert">
                <span className="badge">{props.badge}</span>
                <span
                    className="font-semibold mr-2 text-left flex-auto">{props.message}</span>
            </div>
        </div>
    );
};

export default Alert;