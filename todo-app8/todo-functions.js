// Filter to-do items based on Text AND if hide completed is checked
function filterToDo(arrOfObj, textFilter, hideVal) {
  return arrOfObj.filter((obj) =>
    hideVal
      ? obj.text.toLowerCase().includes(textFilter.toLowerCase()) &&
        obj.completed === false
      : obj.text.toLowerCase().includes(textFilter.toLowerCase())
  );
}

// Calculate uncompleted todos number for summary
function findNumUncompleted(arrOfObj) {
  return arrOfObj.filter((obj) => obj.completed === false).length;
}

// Render content to DOM
function renderToDoItems(arrOfObj) {
  arrOfObj.forEach((obj) => {
    const newTaskPar = document.createElement("p");
    newTaskPar.textContent = obj.text;
    document.querySelector("#all-todos").appendChild(newTaskPar);
  });
}

// Alternative render with summary updating to only those incomplete and changes with searched
function filterAndRenderWithSummary(arrOfObj) {
  const filtered = filterToDo(
    arrOfObj,
    userInput.searchText,
    userInput.hideCompleted
  );
  renderSummary(filtered);
  renderToDoItems(filtered);
}

// function that renders summary to DOM
function renderSummary(array) {
  const summary = document.createElement("h2");
  summary.textContent = `You have ${array.length} to-do's left`;
  document.querySelector("#all-todos").appendChild(summary);
}

// function that removes all to-do items
function clearSection(selector) {
  document.querySelector("#all-todos").innerHTML = "";
}

// Alternative Optimization rendering 1
function renderTodos1(todos, userInput) {
  let filteredTodos = todos.filter((el) =>
    el.text.toLowerCase().includes(textFilter.toLowerCase())
  );
  filteredTodos = filteredTodos.filter(
    (el) => !userInput.hideCompleted || !el.completed // consenses the if/else to filter true if either hideCompleted is false, or the todo element is not completed.
  );
}

// Alternative Optimization rendering 2
function renderTodos2(todos, userInput) {
  const filteredTodos = todos.filter((el) => {
    const searchTextMatch = el.text
      .toLowerCase()
      .includes(textFilter.toLowerCase());
    const hideCompletedMatch = !userInput.hideCompleted || !el.completed;
    return searchTextMatch && hideCompletedMatch; // consenses the above two filter calls into one, filtering for both searchText and hideCompleted.
  });
}
