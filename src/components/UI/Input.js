import React from 'react';
import './Input.scss'

const Input = (props) => {
    const inputType = props.type || 'text';
    const wrappingClasses = 'relative h-10 input-component ' + (props.className || '') + (props.value ? '' : ' empty ') + (props.hasError ? ' with-error ' : '')
    const name = props.name || props.id;

    return (
        <div className={(props.className || '') + ' mb-2'}>
            <div className={wrappingClasses}>
                <input
                    id={props.id}
                    type={inputType}
                    name={name}
                    className="h-full w-full border-gray-300 px-2 transition-all border-blue rounded-sm"
                    value={props.value}
                    onBlur={props.onBlur}
                    onChange={props.onChange}
                    readOnly={props.readOnly || false}
                />
                <label htmlFor={name} className="absolute left-2 transition-all bg-white-100 px-1">
                    {props.label}
                </label>
            </div>
            {props.hasError && <span className="text-red-400 text-xs py-1">{props.error || "invalid_input"}</span>}
        </div>
    );
};

export default Input;