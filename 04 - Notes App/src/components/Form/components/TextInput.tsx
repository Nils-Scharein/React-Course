import * as React from "react";

type TextInputFieldProps = {
    label: string,
    name: string,
    value: string,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
    required: boolean
}

const TextInput = ({label, name, value, onChange, required = false}: TextInputFieldProps) => {
    return (
        <div className="mb-4">
            <label htmlFor={label} className="block font-semibold">{label}</label>
            <input
                name={name}
                className="w-full p-2 border rounded-lg"
                value={value}
                onChange={onChange}
                required={required}
            />
        </div>)
}

export default TextInput