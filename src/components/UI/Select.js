import React from 'react';
import './Select.scss'

const Select = (props) => {
    const wrappingClasses = 'relative h-10 select-component ' + (props.className || '') + (props.value ? '' : ' empty ') + (props.hasError ? ' with-error ' : '')
    const name = props.name || props.id;

    return (
        <div className={(props.className || '') + ' mb-2'}>
            <div className={wrappingClasses}>
                <select value={props.value} disabled={props.readOnly} onChange={props.onChange}>
                    <option value="" disabled>Select an option</option>
                    {props.options.map((option) => <option value={option.value} key={option.value}>{option.label}</option>)}
                </select>
                <label htmlFor={name} className="absolute left-2 transition-all bg-white-100 px-1">
                    {props.label}
                </label>
            </div>
            {props.hasError && <span className="text-red-400 text-xs py-1">{props.error || "invalid_input"}</span>}
        </div>
    );
};

export default Select;