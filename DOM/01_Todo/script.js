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
    // console.log(todos);
    return todos;
}
function addTodoToLocalStorage(todoText) {
    //
    const todos = loadTodos();
    todos.todoList.push(todoText);
    localStorage.setItem("todos", JSON.stringify(todos));
    // console.log("added");
}
function appendTodoInHtml(todoText) {
    //
    const todoList = document.getElementById("taskList");
    const li = document.createElement("li");
    li.textContent = todoText;
    todoList.appendChild(li);
}
document.addEventListener("DOMContentLoaded", () => {
    //
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
    const todoList = document.getElementById("taskList");

    todoInput.addEventListener("change", (e) => {
        //
        const todoText = e.target.value;
        e.target.value = todoText.trim();
    });
    submitButton.addEventListener("click", (e) => {
        //
        const todoText = todoInput.value;
        if (todoText === "") {
            alert("add task");
        } else {
            addTodoToLocalStorage(todoText);
            appendTodoInHtml(todoText);
        }
        todoInput.value = "";
    });

    const todos = loadTodos();
    todos.todoList.forEach((todoItem) => {
        const li = document.createElement("li");
        li.textContent = todoItem;

        todoList.appendChild(li);
    });
});
