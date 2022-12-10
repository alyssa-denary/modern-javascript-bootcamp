"use strict";

const getSavedTodos = function () {
  const todosJSON = localStorage.getItem("todos");
  if (todosJSON !== null) {
    return JSON.parse(todosJSON);
  } else {
    return [];
  }
};

const saveTodos = function (todos) {
  localStorage.setItem("todos", JSON.stringify(todos));
};

const getHideVal = () => {
  const hideValJSON = localStorage.getItem("hideVal");
  if (hideValJSON !== null) {
    return JSON.parse(hideValJSON);
  } else {
    return false;
  }
};

const saveHideVal = (val) => {
  localStorage.setItem("hideVal", JSON.stringify(val));
};

// Filter to-do items based on Text AND if hide completed is checked
function filterTodo(arrOfObj, textFilter, isHidden) {
  return arrOfObj.filter((obj) =>
    isHidden
      ? obj.text.toLowerCase().includes(textFilter.toLowerCase()) &&
        obj.completed === false
      : obj.text.toLowerCase().includes(textFilter.toLowerCase())
  );
}

const generateTodoDOM = function (obj) {
  const newTask = document.createElement("li");

  const checkbox = document.createElement("input");
  checkbox.setAttribute("type", "checkbox");
  checkbox.addEventListener("change", (e) => {
    toggleCompleted(obj.id);
    saveTodos(todos);
    renderFilteredTodos(todos);
  });
  checkbox.checked = obj.completed;

  const button = document.createElement("button");
  button.textContent = "X";
  button.addEventListener("click", () => {
    removeTodo(obj.id);
    renderFilteredTodos();
  });

  const text = document.createElement("span");
  text.textContent = obj.text;

  newTask.appendChild(checkbox);
  newTask.append(text);
  newTask.appendChild(button);

  document.querySelector("#todo-list").appendChild(newTask);
};

function renderTodoItems(arrOfObj) {
  arrOfObj.forEach((obj) => {
    generateTodoDOM(obj);
  });
}

function renderSummary(array) {
  let incomplete = array.filter((el) => !el.completed);
  document.querySelector(
    "#summary"
  ).textContent = `You have ${incomplete.length} to-do's left`;
}

function renderFilteredTodos() {
  let filtered = filterTodo(
    todos,
    userInput.searchText,
    userInput.hideCompleted
  );
  clearSection("#todo-list");
  renderSummary(filtered);
  renderTodoItems(filtered);
}

function clearSection(selector) {
  document.querySelector(selector).innerHTML = "";
}

function removeTodo(identifier) {
  const ind = todos.findIndex((el) => el.id === identifier);
  if (ind !== -1) {
    todos.splice(ind, 1);
  }
  saveTodos(todos);
}

function toggleCompleted(identifier) {
  const match = todos.find((el) => el.id === identifier);
  if (match !== undefined) {
    match.completed = !match.completed;
  }
}
