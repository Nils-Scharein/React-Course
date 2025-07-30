import * as React from "react";

type TextareaFieldProps = {
    label: string,
    name: string,
    value: string,
    onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void,
    required: boolean
}

const TextareaField = ({label, name, value, onChange, required = false}: TextareaFieldProps) => {
    return (
        <div className="mb-4">
            <label htmlFor={label} className="block font-semibold">{label}</label>
            <textarea
                name={name}
                className="w-full p-2 border rounded-lg"
                value={value}
                onChange={onChange}
                required={required}>
                </textarea>
        </div>)
}

export default TextareaField