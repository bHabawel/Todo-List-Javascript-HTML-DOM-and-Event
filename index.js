let todoInput = document.getElementById("todoInput");
let addTask = document.getElementById("addTask");
let taskList = document.getElementById("taskList");

addTask.addEventListener("click", () => {
  let listItem = document.createElement("li");
  let removeItem = document.createElement("button");
  let spanItem = document.createElement("span");

  removeItem.innerHTML = "X";
  spanItem.innerHTML = todoInput.value;

  if (spanItem.innerHTML === "") {
    return alert("Add a list");
  }

  listItem.appendChild(removeItem);
  listItem.appendChild(spanItem);

  taskList.appendChild(listItem);
  todoInput.value = "";
  todoInput.focus();

  removeItem.addEventListener("click", () =>
    handleRemoveList(taskList, listItem)
  );

  spanItem.addEventListener("click", () => handleToggleList(spanItem));
});

function handleRemoveList(taskList, listItem) {
  taskList.removeChild(listItem);
}

function handleToggleList(spanItem) {
  spanItem.classList.contains("done")
    ? spanItem.classList.remove("done")
    : spanItem.classList.add("done");
}
