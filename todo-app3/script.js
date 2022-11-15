const todos = [
  { text: "make breakfast", completed: true },
  { text: "go to store", completed: false },
  { text: "hang mirror", completed: false },
  { text: "study", completed: false },
  { text: "replant plants", completed: true },
];

// have variable that updates with user input
const userInput = {
  newTask: "",
  searchText: "",
  notCompleted: true,
  completed: true,
};

// Render current items
renderToDoItems(todos);

// Listener for search text changes:
document.querySelector("#search-input").addEventListener("input", function (e) {
  userInput.searchText = e.target.value;
  removeToDos("#all-todos");
  const filtered = filterToDo(
    todos,
    userInput.searchText,
    userInput.notCompleted,
    userInput.completed
  );
  renderToDoItems(filtered);
});

// Listener for changes to not completed checkbox:
document
  .querySelector("#not-completed")
  .addEventListener("click", function (e) {
    userInput.notCompleted = !userInput.notCompleted;
    removeToDos("#all-todos");
    const filtered = filterToDo(
      todos,
      userInput.searchText,
      userInput.notCompleted,
      userInput.completed
    );
    renderToDoItems(filtered);
  });

// Listener for changes to completed checkbox:
document.querySelector("#completed").addEventListener("click", function (e) {
  userInput.completed = !userInput.completed;
  removeToDos("#all-todos");
  const filtered = filterToDo(
    todos,
    userInput.searchText,
    userInput.notCompleted,
    userInput.completed
  );
  renderToDoItems(filtered);
});

// get current state of new task input
document.querySelector("#create-to-do").addEventListener("input", function (e) {
  userInput.newTask = e.target.value;
});

// on click of button, adds new to-do item to page
document
  .querySelector("#submit-new-to-do")
  .addEventListener("click", function (e) {
    const newToDoObj = { text: userInput.newTask, completed: false };
    todos.push(newToDoObj);
    renderToDoItems([newToDoObj]);
  });

///////  HELPER FUNCTIONS /////////

// function that filters to-do items based on user input variable
function filterToDo(arrOfObj, textFilter, notComplete, complete) {
  return arrOfObj.filter((obj) => {
    return (
      obj.text.toLowerCase().includes(textFilter.toLowerCase()) &&
      (obj.completed === complete || !obj.completed === notComplete)
    );
  });
}

// function that renders content to DOM
function renderToDoItems(arrOfObj) {
  arrOfObj.forEach((obj) => {
    const newTaskPar = document.createElement("p");
    newTaskPar.textContent = obj.text;
    document.querySelector("#all-todos").appendChild(newTaskPar);
  });
}

// function that removes all to-do items
function removeToDos(selector) {
  document.querySelector("#all-todos").innerHTML = "";
}
