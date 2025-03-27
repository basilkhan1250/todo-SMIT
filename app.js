let ol = document.querySelectorAll("ol")[0]
let input = document.querySelector("input")
let error = document.querySelector("p")
let todo = []


function renderTodo() {
    ol.innerHTML = ""
    
    for (i = 0; i < todo.length; i++) {
        console.log(todo[i])
        ol.innerHTML += `
        <li>
        <span id="task-${i}">${todo[i]}</span>
        <input type="checkbox" onclick="toggleTask(${i})" id="checkbox-${i}">
        <br>
        <button onclick="deleteTodo(${i})">Delete</button>
        </li>`
    }
}

function addTodo() {

    if (input.value === "") {
        error.innerHTML = "Write something in there!"
        error.style.color = "red"

        setTimeout(() => {
            error.innerHTML = ""
        }, 3000)
        return;
    }

    todo.push(input.value)
    input.value = ""
    renderTodo()
    console.log(todo)
}


function deleteTodo(deleted) {
    todo.splice(deleted, 1)
    renderTodo()
}

function DeleteAll() {
    todo = []
    renderTodo()
}

function toggleTask(index) {
    let taskText = document.getElementById(`task-${index}`);
    let checkbox = document.getElementById(`checkbox-${index}`);

    if (checkbox.checked) {
        taskText.style.textDecoration = "line-through";
    } else {
        taskText.style.textDecoration = "none";
    }
}