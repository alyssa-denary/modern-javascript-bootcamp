// Get saved todos
const getSavedTodos = function () {
  const todosJSON = localStorage.getItem("todos");
  if (todosJSON !== null) {
    return JSON.parse(todosJSON);
  } else {
    return [];
  }
};

// Save todos in local storage
const saveTodos = function (todos) {
  localStorage.setItem("todos", JSON.stringify(todos));
};

// Filter to-do items based on Text AND if hide completed is checked
function filterTodo(arrOfObj, textFilter, hideVal) {
  return arrOfObj.filter((obj) =>
    hideVal
      ? obj.text.toLowerCase().includes(textFilter.toLowerCase()) &&
        obj.completed === false
      : obj.text.toLowerCase().includes(textFilter.toLowerCase())
  );
}

// Generate todo DOM
const generateTodoDOM = function (obj) {
  const newTask = document.createElement("li");

  const checkbox = document.createElement("input");
  checkbox.setAttribute("type", "checkbox");
  checkbox.addEventListener("change", (e) => {
    obj.completed = !obj.completed;
    saveTodos(todos);
  });
  if (obj.completed === true) {
    checkbox.setAttribute("checked", "checked");
  }

  const button = document.createElement("button");
  button.textContent = "X";
  button.addEventListener("click", () => {
    removeTodo(obj.id);
    clearSection("#todo-list");
    let filtered = filterTodo(todos, userInput.searchText, userInput.hideVal);
    renderSummary(filtered);
    renderTodoItems(filtered);
  });

  newTask.appendChild(checkbox);
  newTask.append(obj.text);
  newTask.appendChild(button);

  document.querySelector("#todo-list").appendChild(newTask);
};

// Render content to DOM
function renderTodoItems(arrOfObj) {
  arrOfObj.forEach((obj) => {
    generateTodoDOM(obj);
  });
}

// Renders summary to DOM
function renderSummary(array) {
  document.querySelector(
    "#summary"
  ).textContent = `You have ${array.length} to-do's left`;
}

// Removes all elements from a section
function clearSection(selector) {
  document.querySelector(selector).innerHTML = "";
}

// Remove specific todo by id
function removeTodo(identifier) {
  const ind = todos.findIndex((el) => el.id === identifier);
  if (ind !== -1) {
    todos.splice(ind, 1);
  }
  saveTodos(todos);
}
