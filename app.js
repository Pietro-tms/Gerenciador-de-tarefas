const taskTitle = document.getElementById("taskTitle");
const taskDescription = document.getElementById("taskDescription");
const taskList = document.getElementById("taskList");
const taskContainer = document.querySelector(".listContainer");
const tasks = [];


  function renderTasks() {
    if (tasks.length > 0) {
     taskContainer.style.display = "flex";
    }else {
      taskContainer.style.display = "none";
    }

    taskList.innerHTML = "";
    tasks.forEach((task, index) => {
      const taskItem = document.createElement("li");
      taskItem.innerHTML = `<strong>${task.title}:</strong> ${task.description}<br>`;
      taskList.appendChild(taskItem);

      const btnRem = document.createElement("button");
      btnRem.textContent = "Remover";
      btnRem.addEventListener("click", () => removeItem(index));
      taskItem.appendChild(btnRem);
    });
  }

function addTask() {
  const task = {
    title: taskTitle.value,
    description: taskDescription.value,
  };
  tasks.push(task);

  
  renderTasks();

  taskTitle.value = "";
  taskDescription.value = "";
}

const form = document.getElementById("taskForm");

form.addEventListener("submit",  (event) => {
  event.preventDefault();
  addTask();
});

function removeItem(index) {
  tasks.splice(index, 1);
  renderTasks();
}