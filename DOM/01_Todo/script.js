/*
console.log("start");

document.addEventListener("DOMContentLoaded", () => {
    //DOMContentLoaded event is fired when dom tree is created
    console.log("dom content loaded successfully");
});

console.log("end");
*/

function loadTodos() {
    //function will load the todos from browser

    // const todo = localStorage.getItem("todos");
    // console.log(todo);
    const todos = JSON.parse(localStorage.getItem("todos")) || { todoList: [] };
    // console.log(todos);
    return todos;
}
function addTodoToLocalStorage(todo) {
    //
    const todos = loadTodos();
    todos.todoList.push(todo);
    localStorage.setItem("todos", JSON.stringify(todos));
    // console.log("added");
}

function appendTodoInHtml(todo) {
    //
    //ul
    //-->li
    //----> textDiv --> todoText
    //----> wrapper --> 3 button

    const todoList = document.getElementById("taskList");

    const listItem = document.createElement("li");

    const textDiv = document.createElement("div");
    textDiv.textContent = todo.text;

    // listItem.textContent = todoText;
    listItem.classList.add("todoItem");

    const wrapper = document.createElement("div");
    wrapper.classList.add("todoButtons");

    const editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    editBtn.classList.add("editBtn");

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add("deleteBtn");

    const completedBtn = document.createElement("button");
    completedBtn.textContent = "Completed";
    completedBtn.classList.add("completedBtn");

    wrapper.appendChild(editBtn);
    wrapper.appendChild(deleteBtn);
    wrapper.appendChild(completedBtn);

    listItem.appendChild(textDiv);
    listItem.appendChild(wrapper);

    todoList.appendChild(listItem);
}

function executeFilterAction(e) {
    console.log(e.target);
    const value = e.target.getAttribute("data-filter");
    console.log(value);
    const todoList = document.getElementById("taskList");
    todoList.innerHTML = "";
    const todos = loadTodos();
    if (value === "all") {
        //
        todos.todoList.forEach((todo) => {
            appendTodoInHtml(todo);
        });
    } else if (value !== "completed") {
        //
        todos.todoList.forEach((todo) => {
            if (todo.isCompleted === false) {
                appendTodoInHtml(todo);
            }
        });
    } else {
        //
        todos.todoList.forEach((todo) => {
            if (todo.isCompleted === true) {
                appendTodoInHtml(todo);
            }
        });
    }
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

    const filterBtns = document.getElementsByClassName("filterBtn");
    console.log(filterBtns);
    for (const btn of filterBtns) {
        btn.addEventListener("click", executeFilterAction);
    }

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
            addTodoToLocalStorage({
                text: todoText,
                isCompleted: false,
            });
            appendTodoInHtml({
                text: todoText,
                isCompleted: false,
            });
        }
        todoInput.value = "";
    });

    const todos = loadTodos();
    todos.todoList.forEach((todo) => {
        appendTodoInHtml(todo);
    });
});
