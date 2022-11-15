const todos = [
  { text: "make breakfast", completed: true },
  { text: "go to store", completed: false },
  { text: "hang mirror", completed: false },
  { text: "study", completed: false },
  { text: "replant plants", completed: true },
];

const uncompletedToDo = todos.filter((obj) => {
  return obj.completed === false;
});
console.log(uncompletedToDo);
// print summary of num left
const summary = `You have ${uncompletedToDo.length} To-Do's left.`;
const sumHeading = document.createElement("h2");
sumHeading.textContent = summary;
document.querySelector("body").appendChild(sumHeading);

// Add paragraph element for each uncompleted to-do
uncompletedToDo.forEach((todoObj) => {
  // creating element
  const todoElement = document.createElement("p");
  // updating text of that element to be the value of text property
  todoElement.textContent = todoObj.text;
  // appending this element to the body
  document.querySelector("body").appendChild(todoElement);
});

// add button to add to-do
// listen for click
// print message to console

document.querySelector("#create-to-do").addEventListener("click", (e) => {
  console.log("To-Do button has been clicked");
});
