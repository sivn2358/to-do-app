// Use const for functions and let for mutable variables
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

// Function to view tasks
const viewTasks = () => {
    if (tasks.length === 0) {
        alert("No tasks yet. Add one!");
        return;
    }
    let taskList = "Your To-Do List:\n";
    for (let i = 0; i < tasks.length; i++) {
        const status = tasks[i].completed ? "[✔]" : "[ ]";
        taskList += `${i + 1}. ${status} ${tasks[i].text}\n`;
    }
    alert(taskList);
};

// Function to add a new task
const addTask = () => {
    const taskText = prompt("Enter your task:");
    if (taskText) {
        tasks.push({ text: taskText, completed: false });
        saveTasks();
        alert("Task added successfully!");
    }
};

// Function to mark a task as completed
const completeTask = () => {
    if (tasks.length === 0) {
        alert("No tasks to complete.");
        return;
    }
    viewTasks();
    const taskNumber = parseInt(prompt("Enter task number to mark as completed:"));
    if (taskNumber > 0 && taskNumber <= tasks.length) {
        tasks[taskNumber - 1].completed = !tasks[taskNumber - 1].completed;
        saveTasks();
        alert("Task updated!");
    } else {
        alert("Invalid task number.");
    }
};

// Function to delete a task
const deleteTask = () => {
    if (tasks.length === 0) {
        alert("No tasks to delete.");
        return;
    }
    viewTasks();
    const taskNumber = parseInt(prompt("Enter task number to delete:"));
    if (taskNumber > 0 && taskNumber <= tasks.length) {
        tasks.splice(taskNumber - 1, 1);
        saveTasks();
        alert("Task deleted!");
    } else {
        alert("Invalid task number.");
    }
};

// Function to save tasks to localStorage
const saveTasks = () => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
};

// Function to exit
const exitApp = () => {
    alert("Goodbye!");
};
