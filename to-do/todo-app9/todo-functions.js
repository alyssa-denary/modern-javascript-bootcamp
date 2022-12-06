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

// Update hideVal based on checked status
const getHideVal = () => {
  const hideValJSON = localStorage.getItem("hideVal");
  if (hideValJSON !== null) {
    return JSON.parse(hideValJSON);
  } else {
    return false;
  }
};

// Save hideVal in localStorage
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

// Generate todo DOM
const generateTodoDOM = function (obj) {
  const newTask = document.createElement("li");

  const checkbox = document.createElement("input");
  checkbox.setAttribute("type", "checkbox");
  checkbox.addEventListener("change", (e) => {
    obj.completed = !obj.completed; // ADD TOGGLE FUNCTION BY ID in NEXT VERSION, QUESTION: WHY DOES THIS WAY STILL WORK?
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
