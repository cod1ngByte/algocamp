import { useCallback, useState } from "react";
import "./App.css";
import FormInput from "./components/FormInput";
import ListItems from "./components/ListItems";

function App() {
    let [todos, setodos] = useState([{ id: 1, value: "Todo 1" }]);

    const handleSubmit = function (inputValue) {
        console.log("submitted value : ", inputValue);
        setodos([...todos, { id: todos.length + 1, value: inputValue }]);
        console.log(todos);
    };

    const deleteItem = function (id) {
        const newTodos = todos.filter((todo) => todo.id !== id);
        console.log(newTodos);
        setodos(newTodos);
    };

    const memoDeleteItem = useCallback(deleteItem, [todos]);
    return (
        <>
            <h1>Todos</h1>
            <FormInput handleSubmit={handleSubmit} />
            <ul>
                <ListItems listOfTodos={todos} deleteItem={memoDeleteItem} />
            </ul>
        </>
    );
}

export default App;
