// Function to add a new task
function addTask() {
  var taskInput = document.getElementById("taskInput");
  var taskList = document.getElementById("taskList");
  var taskText = taskInput.value.trim();

  if (taskText === "") {
    alert("Please enter a task.");
    return;
  }

  var li = document.createElement("li");
  li.textContent = taskText;
  taskList.appendChild(li);

  // Clear the input field
  taskInput.value = "";

  // Add a delete button to the task
  var deleteButton = document.createElement("span");
  deleteButton.textContent = " ❌";
  deleteButton.className = "delete";
  deleteButton.onclick = function() {
    taskList.removeChild(li);
  };
  li.appendChild(deleteButton);
}
