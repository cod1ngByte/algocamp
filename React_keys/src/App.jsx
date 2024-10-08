import { useState } from "react";
import "./App.css";
import FormInput from "./components/FormInput";
import ListItems from "./components/ListItems";

function App() {
    const [inputValue, setinputValue] = useState("");
    let [listItems, setlistItems] = useState([]);

    const handleSubmit = function (e) {
        e.preventDefault();
        console.log("submitted value : ", inputValue);
        setinputValue("");
        setlistItems([...listItems, inputValue]);
        console.log(listItems);
    };

    const handleChange = function (e) {
        setinputValue(e.target.value);
    };

    const deleteItem = function (e) {
        console.log(e.target.value);
        let newlistItems = [];
        newlistItems = listItems.filter(
            (item, idx) => `${item}-${idx + 1}` !== e.target.value
        );
        setlistItems(newlistItems);
    };

    return (
        <>
            <h1>Todos</h1>
            <FormInput
                inputValue={inputValue}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
            />
            <ul>
                <ListItems items={listItems} handleClick={deleteItem} />
            </ul>
        </>
    );
}

export default App;
