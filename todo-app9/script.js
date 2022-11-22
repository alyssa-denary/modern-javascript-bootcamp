// Retrieve saved todos
const todos = getSavedTodos();

// Variable to hold user input
const userInput = {
  newTask: "",
  searchText: "",
  hideCompleted: false,
};

// Render initial todos
let filtered = filterToDo(todos, userInput.searchText, userInput.hideCompleted);
renderSummary(filtered);
renderToDoItems(filtered);

// Listener for search text changes:
document.querySelector("#search-input").addEventListener("input", function (e) {
  userInput.searchText = e.target.value;
  clearSection("#todo-list");
  filtered = filterToDo(todos, userInput.searchText, userInput.hideCompleted);
  renderSummary(filtered);
  renderToDoItems(filtered);
});

// Listener for changes to hiding completed checkbox:
document
  .querySelector("#hide-completed")
  .addEventListener("change", function (e) {
    userInput.hideCompleted = !userInput.hideCompleted;
    clearSection("#todo-list");
    filtered = filterToDo(todos, userInput.searchText, userInput.hideCompleted);
    renderSummary(filtered);
    renderToDoItems(filtered);
  });

// Listener for submit button to add a new to-do
document
  .querySelector("#new-to-do-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    const newToDoObj = {
      text: e.target.elements.newToDo.value,
      completed: false,
    };
    todos.push(newToDoObj);
    saveTodos(todos);
    clearSection("#todo-list");
    filtered = filterToDo(todos, userInput.searchText, userInput.hideCompleted);
    renderSummary(filtered);
    renderToDoItems(filtered);
    e.target.elements.newToDo.value = "";
  });
