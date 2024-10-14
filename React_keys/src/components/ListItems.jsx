import TodoListItem from "./TodoListItem";

export default function ListItems({ listOfTodos, deleteItem }) {
    function onDelete(id) {
        console.log("delete todo with id: ", id);
        deleteItem?.(id);
    }

    return (
        <>
            {listOfTodos?.map((todo) => {
                return (
                    <TodoListItem
                        key={todo.id}
                        todo={todo}
                        onDelete={onDelete}
                    />
                );
            })}
        </>
    );
}
