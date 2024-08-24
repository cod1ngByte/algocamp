/*
console.log("start");

document.addEventListener("DOMContentLoaded", () => {
    //DOMContentLoaded event is fired when dom tree is created
    console.log("dom content loaded successfully");
});

console.log("end");
*/

function loadTodos() {
    // const todo = localStorage.getItem("todos");
    // console.log(todo);
    const todos = JSON.parse(localStorage.getItem("todos")) || { todoList: [] };
    console.log(todos);
    return todos;
}
function addTodoToLocalStorage(text) {
    //
    const todos = loadTodos();
    todos.todoList.push(text);
    localStorage.setItem("todos", JSON.stringify(todos));
    console.log("added");
}

document.addEventListener("DOMContentLoaded", () => {
    // console.dir(document.getElementById("todoInput"));
    /*
    //get input value
    console.log(document.getElementById("todoInput").value);
    //set input value
    document.getElementById("todoInput").value = "sorting";
    //set to empty string
    document.getElementById("todoInput").value = "";
    */
    // const todoInput = document.getElementById("todoInput");
    // todoInput.addEventListener("change", () => {
    //     //when input value is changed and became outoffocus , read in mdn change event
    //     console.log("changed event fired");
    // });
    // todoInput.addEventListener("input", () => {
    //     //when input value is changed
    //     console.log("input event fired");
    // });
    const todoInput = document.getElementById("todoInput");
    const submitButton = document.getElementById("addTodo");
    submitButton.addEventListener("click", (e) => {
        const todoText = todoInput.value;
        if (todoText === "") {
            alert("add task");
        } else {
            addTodoToLocalStorage(todoText);
        }
    });
    todoInput.addEventListener("change", (e) => {
        const todoText = e.target.value;
        e.target.value = todoText.trim();
    });
    loadTodos();
});
