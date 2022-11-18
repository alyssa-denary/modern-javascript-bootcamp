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
  showCompleted: true,
};

//Render summary
renderSummary(findNumUncompleted(todos));

// Render current items
renderToDoItems(todos);

// Listener for search text changes:
document.querySelector("#search-input").addEventListener("input", function (e) {
  userInput.searchText = e.target.value;
  removeToDos("#all-todos");
  const filtered = filterToDo(
    todos,
    userInput.searchText,
    userInput.showCompleted
  );
  renderToDoItems(filtered);
  document.querySelector(
    "#heading-todo-left"
  ).textContent = `You have ${findNumUncompleted(todos)} left`;
  document.querySelector("#todo-left").appendChild(summary);
});

// Listener for changes to hiding completed checkbox:
document
  .querySelector("#hide-completed")
  .addEventListener("click", function (e) {
    userInput.showCompleted = !userInput.showCompleted;
    removeToDos("#all-todos");
    const filtered = filterToDo(
      todos,
      userInput.searchText,
      userInput.showCompleted
    );
    renderToDoItems(filtered);
    renderSummary(findNumUncompleted(todos));
  });

// // Listener for create to-do text changes
// document.querySelector("#create-to-do").addEventListener("input", function (e) {
//   userInput.newTask = e.target.value;
// });

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
    renderToDoItems(newToDoObj);
    todos.push(newToDoObj[0]);
    e.target.elements.newToDo.value = "";
    renderSummary(findNumUncompleted(todos));
  });

///////  HELPER FUNCTIONS /////////

// function that filters to-do items based on user input variable
function filterToDo(arrOfObj, textFilter, showCompletedVal) {
  return arrOfObj.filter((obj) =>
    showCompletedVal
      ? obj.text.toLowerCase().includes(textFilter.toLowerCase())
      : obj.text.toLowerCase().includes(textFilter.toLowerCase()) &&
        obj.completed === false
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

// function that renders summary to DOM
function renderSummary(num) {
  document.querySelector(
    "#heading-todo-left"
  ).textContent = `You have ${num} to-do's left`;
}

// function that removes all to-do items
function removeToDos(selector) {
  document.querySelector("#all-todos").innerHTML = "";
}
