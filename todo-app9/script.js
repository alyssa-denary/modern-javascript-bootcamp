// Retrieve saved todos
const todos = getSavedTodos();

// Variable to hold user input
const userInput = {
  newTask: "",
  searchText: "",
  hideCompleted: false,
};

// Render initial todos
renderFilteredTodos();

// Listener for search text changes:
document.querySelector("#search-input").addEventListener("input", function (e) {
  userInput.searchText = e.target.value;
  renderFilteredTodos();
});

// Listener for changes to hiding completed checkbox:
document
  .querySelector("#hide-completed")
  .addEventListener("change", function (e) {
    userInput.hideCompleted = !userInput.hideCompleted;
    renderFilteredTodos();
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
    renderFilteredTodos();
    e.target.elements.newTodo.value = "";
  });

