import { useCallback } from "react";
import TodoListItem from "./TodoListItem";

export default function ListItems({ listOfTodos, deleteItem }) {
    function deleteTodo(id) {
        console.log("delete todo with id: ", id);
        deleteItem?.(id);
    }

    const memoonDelete = useCallback(deleteTodo, [deleteItem]);

    return (
        <>
            {listOfTodos?.map((todo) => {
                return (
                    <TodoListItem
                        key={todo.id}
                        todo={todo}
                        onDelete={memoonDelete}
                    />
                );
            })}
        </>
    );
}
