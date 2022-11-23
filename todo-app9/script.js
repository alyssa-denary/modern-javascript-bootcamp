// Retrieve saved todos
const todos = getSavedTodos();

// Variable to hold user input
const userInput = {
  newTask: "",
  searchText: "",
  hideCompleted: false,
};

// Render initial todos
let filtered = filterTodo(todos, userInput.searchText, userInput.hideCompleted);
renderSummary(filtered);
renderTodoItems(filtered);

// Listener for search text changes:
document.querySelector("#search-input").addEventListener("input", function (e) {
  userInput.searchText = e.target.value;
  clearSection("#todo-list");
  filtered = filterTodo(todos, userInput.searchText, userInput.hideCompleted);
  renderSummary(filtered);
  renderTodoItems(filtered);
});

// Listener for changes to hiding completed checkbox:
document
  .querySelector("#hide-completed")
  .addEventListener("change", function (e) {
    userInput.hideCompleted = !userInput.hideCompleted;
    clearSection("#todo-list");
    filtered = filterTodo(todos, userInput.searchText, userInput.hideCompleted);
    renderSummary(filtered);
    renderTodoItems(filtered);
  });

// Listener for submit button to add a new to-do
document
  .querySelector("#new-todo-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    const newTodoObj = {
      id: uuidv4(),
      text: e.target.elements.newTodo.value,
      completed: false,
    };
    todos.push(newTodoObj);
    saveTodos(todos);
    clearSection("#todo-list");
    filtered = filterTodo(todos, userInput.searchText, userInput.hideCompleted);
    renderSummary(filtered);
    renderTodoItems(filtered);
    e.target.elements.newTodo.value = "";
  });

// Listener for checkbox to change completed value
const allTodos = document.querySelectorAll("#todo-list li input");
allTodos.forEach((el) => {
  el.addEventListener("change", (e) => {
    console.log(e);
    console.log(el);
  });
});
