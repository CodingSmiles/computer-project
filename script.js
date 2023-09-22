// Global variables for this page
var completedTask = [];



// this function will make the input parameters into a title case string.
// eg. "aadiraj anil" to "Aadiraj Anil"
function titleCase(str) {
    str = str.toLowerCase().split(' ');
    for (var i = 0; i < str.length; i++) {
        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    }
    return str.join(' ');
}

// this function tests if the provided string starts with a number
// "1abc" = true
// "abc" = false
function startsWithNumber(str) {
    return /^\d/.test(str);
  }


// Checks if a name has already been recorded in the cookies.
// The code allows for a person to enter their name only once
// The code allows for a person to leave the input blank
// The code allows for a person to re-enter their name if they previously left it blank

function checkName() {
    usrName = localStorage.getItem('name');
    localStorage.removeItem('placeholder');
    if (usrName != null) {
        window.location.href = 'to-do.html';
    }
}

// takes the name and assigns it to a cookie
function goToNextPage() {
    let usrName = titleCase(document.getElementById('name').value.trim());
    if (usrName === '') {
        return;
    } else {
        localStorage.setItem("name", usrName);
    }
}


// takes the name from cookies and changes the title accordingly
function setName() {
    localStorage.setItem("placeholder", `${titleCase("an unnamed guy")}`);
    let usrName = localStorage.getItem('name');
    let placeholder = localStorage.getItem('placeholder');
    if (usrName !== null) {
        document.getElementById('mTitle').textContent = `To-Do List for ${usrName}`;
    } else {
        document.getElementById('mTitle').textContent = `To-Do List for ${placeholder}`
    }

}

// adds a task when the user press the add button
function addTask() {
    const taskList = document.getElementById("taskList");
    const listItem = document.createElement("li");
    const taskText = document.getElementById("input").value.trim();
    if (taskText === "") {
        alert("Task cannot be empty");
        return;
    }
    if (startsWithNumber(taskText)) {
        alert("Tasks cannot begin with numbers");
        return;
    }
    listItem.className = "item";
    listItem.id = taskText;
    listItem.innerHTML = `<span>${taskText}</span> <button class="delete-btn" onclick="deleteTask(this)">Delete</button> <button class="tick-btn" onclick="markAsDone(this)">Completed</button>`;
    if (taskList.querySelector(`#${taskText}`) != null) {
        document.getElementById('input').value = '';
        alert('Duplicate tasks are not allowed');
        return;
    }
    taskList.appendChild(listItem);
    document.getElementById('input').value = '';
}

// deletes a task upon the user's command
function deleteTask(button) {
    const taskList = document.getElementById("taskList");
    const listItem = button.parentElement;
    const buttonIndex = completedTask.findIndex((element) => element == listItem);
    if (buttonIndex != -1) {
        completedTask.splice(buttonIndex, 1);
        document.getElementById('completedTaskCounter').textContent = `Completed Tasks: ${completedTask.length}`
        taskList.removeChild(listItem);
        return;
    }
    taskList.removeChild(listItem);
}

// marks a task as completed
function markAsDone(button) {
    const listItem = button.parentElement;
    listItem.classList.toggle("task-done");
    button.disabled = true;
    button.classList.toggle("btn-disable");
    document.getElementById('completedTaskCounter').textContent = `Completed Tasks: ${completedTask.push(listItem)}`
}

function clearCompletedTasks() {
    var taskList = document.getElementById("taskList");
    function clearList(element) {
        taskList.removeChild(element);
    }
    completedTask.forEach(clearList);
    completedTask = [];
    document.getElementById('completedTaskCounter').textContent = `Completed Tasks: ${completedTask.length}`

}
