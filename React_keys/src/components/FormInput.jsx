import { useState } from "react";

export default function FormInput({ inputValue, handleChange, handleSubmit }) {
    return (
        <div>
            <form
                onSubmit={(e) => {
                    handleSubmit(e);
                }}
            >
                <input
                    type="text"
                    placeholder={"add todos here..."}
                    onChange={handleChange}
                    value={inputValue}
                />
                <button>Add</button>
            </form>
        </div>
    );
}
