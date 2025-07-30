import * as React from "react";

type SelectFieldProps = {
    label: string,
    name: string,
    value: string,
    options: { value: string, label: string }[],
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void,
}

const TextareaField = ({label, name, value, options, onChange}: SelectFieldProps) => {
    return (
        <div className="mb-4">
            <label htmlFor={label} className="block font-semibold">{label}</label>
            <select
                name={name}
                className="w-full p-2 border rounded-lg"
                value={value}
                onChange={onChange}>
                {options.map((singleValue) => {
                    return (<option key={singleValue.value} value={singleValue.value}>{singleValue.label}</option>)
                })}
            </select>
        </div>)
}

export default TextareaField