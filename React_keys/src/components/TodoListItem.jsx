import { memo } from "react";

function TodoListItem({ todo, onDelete }) {
    return (
        <li>
            {todo.value}{" "}
            <button
                onClick={() => {
                    onDelete(todo.id);
                }}
            >
                Delete
            </button>
        </li>
    );
}

export default memo(TodoListItem);
