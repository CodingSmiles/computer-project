// Global variables for the entire website
let usrName = '';




// this function will make the input parameters into a title case string.
// eg. "aadiraj anil" to "Aadiraj Anil"
function titleCase(str) {
    str = str.toLowerCase().split(' ');
    for (var i = 0; i < str.length; i++) {
        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    }
    return str.join(' ');
}


// takes the name and assigns it to a previously made global variable
function nextPage() {
    usrName = titleCase(document.getElementById('name').value.trim());
    
}

function addTask() {
    const taskText = document.getElementById("input").value.trim();
    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }
    const listItem = document.createElement("li");
    const taskList = document.getElementById("taskList");

    listItem.className = "item";
    listItem.innerHTML = `<span>${taskText}</span> <button class="delete-btn" onclick="deleteTask(this)">Delete</button> <button class="tick-btn" onclick="markAsDone(this)">Completed</button>`;

    taskList.appendChild(listItem);
    document.getElementById('input').value = '';
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
