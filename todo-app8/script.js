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
  clearSection("#all-todos");
  filterAndRenderWithSummary(todos);
});

// Listener for changes to hiding completed checkbox:
document
  .querySelector("#hide-completed")
  .addEventListener("change", function (e) {
    userInput.hideCompleted = !userInput.hideCompleted;
    clearSection("#all-todos");
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
    clearSection("all-todos");
    filterAndRenderWithSummary(todos);
    e.target.elements.newToDo.value = "";
  });