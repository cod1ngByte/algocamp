import { useState } from "react";

export default function FormInput({ handleSubmit }) {
    const [inputValue, setinputValue] = useState("");

    function onFormSubmit(e) {
        e.preventDefault();
        handleSubmit?.(inputValue);
        setinputValue("");
    }

    return (
        <div>
            <form onSubmit={onFormSubmit}>
                <input
                    type="text"
                    placeholder={"add todos here..."}
                    onChange={(e) => setinputValue(e.target.value)}
                    value={inputValue}
                />
                <button>Add Todo</button>
            </form>
        </div>
    );
}
