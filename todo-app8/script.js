let todos = [];

// have variable that updates with user input
const userInput = {
  newTask: "",
  searchText: "",
  hideCompleted: false,
};

// Check for existing saved data
const todosJSON = localStorage.getItem("todos");
if (todosJSON !== null) {
  todos = JSON.parse(todosJSON);
}

// Alternative render:
filterAndRenderWithSummary(todos);

// Listener for search text changes:
document.querySelector("#search-input").addEventListener("input", function (e) {
  userInput.searchText = e.target.value;
  removeToDos("#all-todos");
  filterAndRenderWithSummary(todos);
});

// Listener for changes to hiding completed checkbox:
document
  .querySelector("#hide-completed")
  .addEventListener("change", function (e) {
    userInput.hideCompleted = !userInput.hideCompleted;
    removeToDos("#all-todos");
    filterAndRenderWithSummary(todos);
  });

// Listener for submit button to add a new to-do
document
  .querySelector("#new-to-do-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    const newToDoObj = [
      {
        text: e.target.elements.newToDo.value,
        completed: false,
      },
    ];
    todos.push(newToDoObj[0]);
    localStorage.setItem("todos", JSON.stringify(todos));
    removeToDos("all-todos");
    filterAndRenderWithSummary(todos);
    e.target.elements.newToDo.value = "";
  });

///////  HELPER FUNCTIONS /////////

// function that filters to-do items based on user input variable
function filterToDo(arrOfObj, textFilter, hideVal) {
  return arrOfObj.filter((obj) =>
    hideVal
      ? obj.text.toLowerCase().includes(textFilter.toLowerCase()) &&
        obj.completed === false
      : obj.text.toLowerCase().includes(textFilter.toLowerCase())
  );
}

// function for calculating uncompleted todo's for summary
function findNumUncompleted(arrOfObj) {
  return arrOfObj.filter((obj) => obj.completed === false).length;
}

// function that renders content to DOM
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
function removeToDos(selector) {
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
