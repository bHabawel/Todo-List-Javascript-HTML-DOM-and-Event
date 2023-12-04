let todoInput = document.getElementById("todoInput");
let addTask = document.getElementById("addTask");
let taskList = document.getElementById("taskList");

addTask.addEventListener("click", () => {
  let listItem = document.createElement("li");
  let removeItem = document.createElement("button");
  let spanItem = document.createElement("span");

  removeItem.innerHTML = "X";
  spanItem.innerHTML = todoInput.value;

  listItem.appendChild(removeItem);
  listItem.appendChild(spanItem);

  taskList.appendChild(listItem);
});
