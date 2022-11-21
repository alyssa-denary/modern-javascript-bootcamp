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
function filterToDo(arrOfObj, textFilter, hideVal) {
  return arrOfObj.filter((obj) =>
    hideVal
      ? obj.text.toLowerCase().includes(textFilter.toLowerCase()) &&
        obj.completed === false
      : obj.text.toLowerCase().includes(textFilter.toLowerCase())
  );
}

// Generate todo DOM
const generateTodoDOM = function (obj) {
  const newTaskPar = document.createElement("p");
  newTaskPar.textContent = obj.text;
  document.querySelector("#all-todos").appendChild(newTaskPar);
};

// Render content to DOM
function renderToDoItems(arrOfObj) {
  arrOfObj.forEach((obj) => {
    generateTodoDOM(obj);
  });
}

// Renders summary to DOM
function renderSummary(array) {
  const summary = document.createElement("h2");
  summary.textContent = `You have ${array.length} to-do's left`;
  document.querySelector("#all-todos").appendChild(summary);
}

// Removes all elements from a section
function clearSection(selector) {
  document.querySelector("#all-todos").innerHTML = "";
}
