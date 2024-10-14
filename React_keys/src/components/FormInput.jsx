import { memo, useState } from "react";
import Sample from "./Sample";
function FormInput({ handleSubmit }) {
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
                {/* Sample component will remount every time we enter any value in input, becoz of key prop changing in each re-render */}
                <Sample key={Math.floor(Math.random() * 99)} />
            </form>
        </div>
    );
}

export default memo(FormInput);
