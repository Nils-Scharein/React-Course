import {useRef, useState} from "react";

function UseRefExample() {
    const [input, setInput] = useState<string>("");

    // useRef used to directly access DOM elements
    const inputRef = useRef<HTMLInputElement>(null);
    const buttonRef = useRef<HTMLButtonElement>(null);

    const handleSubmit = () => {
        if (inputRef.current && buttonRef.current) {
            // Manipulate the input element directly
            inputRef.current.blur();
            inputRef.current.style.backgroundColor = "red";
            inputRef.current.style.color = "white";
            inputRef.current.setAttribute("placeholder", "Updated...");

            // Set focus on the button
            buttonRef.current.focus();
        }
    };

    return (
        <div className="max-w-md mx-auto mt-10 p-6 bg-gray-100 rounded-lg shadow-lg text-center">
            <h2 className="text-2xl font-bold mb-4">useRef Example</h2>

            <input
                type="text"
                ref={inputRef}
                value={input}
                placeholder="Type something..."
                className="w-full p-2 border rounded-lg"
                onChange={(e) => setInput(e.target.value)}
            />

            <button
                ref={buttonRef}
                onClick={handleSubmit}
                className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
                Submit
            </button>
        </div>
    );
}

export default UseRefExample;
