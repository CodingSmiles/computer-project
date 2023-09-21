// this function will make the input parameters into a title case string.
// eg. "aadiraj anil" to "Aadiraj Anil"
function titleCase(str) {
    str = str.toLowerCase().split(' ');
    for (var i = 0; i < str.length; i++) {
        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    }
    return str.join(' ');
}

// Checks if a name has already been recorded in the cookies
function checkName() {
    usrName = localStorage.getItem('name');
    if (usrName === null) {
        return;
    } else {
        window.location.href = 'to-do.html';
    }
    console.log(usrName);
}

// takes the name and assigns it to a cookie
function goToNextPage() {
    let usrName = titleCase(document.getElementById('name').value.trim());
    if (usrName === '') {
        localStorage.setItem("name", `${titleCase("an unnamed guy")}`);
        return;
    }
    localStorage.setItem("name", usrName);
}


// takes the name from cookies and changes the title accordingly
function setName() {
    let usrName = localStorage.getItem('name');
    document.getElementById('mTitle').textContent = `To-Do List for ${usrName}`;
}


// adds a task when the user press the add button
function addTask() {
    const taskText = document.getElementById("input").value.trim();
    if (taskText === "") {
        alert("Task cannot be empty");
        return;
    }
    const listItem = document.createElement("li");
    const taskList = document.getElementById("taskList");

    listItem.className = "item";
    listItem.innerHTML = `<span>${taskText}</span> <button class="delete-btn" onclick="deleteTask(this)">Delete</button> <button class="tick-btn" onclick="markAsDone(this)">Completed</button>`;

    taskList.appendChild(listItem);
    document.getElementById('input').value = '';
}

// deletes a task upon the user's command
function deleteTask(button) {
    const taskList = document.getElementById("taskList");
    const listItem = button.parentElement;
    taskList.removeChild(listItem);
}

// marks a task as completed
function markAsDone(button) {
    const listItem = button.parentElement;
    listItem.classList.toggle("task-done");
}
