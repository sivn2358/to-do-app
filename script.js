// Load tasks from localStorage
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

// Function to view tasks
function viewTasks() {
    if (tasks.length === 0) {
        alert("No tasks yet. Add one!");
        return;
    }

    let taskList = "Your To-Do List:\n";
    tasks.forEach((task, index) => {
        let status = task.completed ? "[✔]" : "[ ]";
        taskList += `${index + 1}. ${status} ${task.text}\n`;
    });

    alert(taskList);
}

// Function to add a new task
function addTask() {
    let taskText = prompt("Enter your task:");
    if (taskText) {
        tasks.push({ text: taskText, completed: false });
        saveTasks();
        alert("Task added successfully!");
    }
}

// Function to mark a task as completed
function completeTask() {
    if (tasks.length === 0) {
        alert("No tasks to complete.");
        return;
    }

    viewTasks();
    let taskNumber = parseInt(prompt("Enter task number to mark as completed:"));
    if (taskNumber > 0 && taskNumber <= tasks.length) {
        tasks[taskNumber - 1].completed = !tasks[taskNumber - 1].completed;
        saveTasks();
        alert("Task updated!");
    } else {
        alert("Invalid task number.");
    }
}

// Function to delete a task
function deleteTask() {
    if (tasks.length === 0) {
        alert("No tasks to delete.");
        return;
    }

    viewTasks();
    let taskNumber = parseInt(prompt("Enter task number to delete:"));
    if (taskNumber > 0 && taskNumber <= tasks.length) {
        tasks.splice(taskNumber - 1, 1);
        saveTasks();
        alert("Task deleted!");
    } else {
        alert("Invalid task number.");
    }
}

// Function to save tasks to localStorage
function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Function to exit
function exitApp() {
    alert("Goodbye!");
}
