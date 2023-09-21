function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    const taskList = document.getElementById("taskList");

    const listItem = document.createElement("li");
    listItem.className = "todo-item";
    listItem.innerHTML = `
<span>${taskText}</span>
<button class="delete-btn" onclick="deleteTask(this)">Delete</button>
<button class="tick-btn" onclick="markAsDone(this)">Tick</button>
`;

    taskList.appendChild(listItem);

    taskInput.value = "";
}

function deleteTask(button) {
    const taskList = document.getElementById("taskList");
    const listItem = button.parentElement;
    taskList.removeChild(listItem);
}

function markAsDone(button) {
    const listItem = button.parentElement;
    listItem.classList.toggle("task-done");
}
