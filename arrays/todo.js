// create array with five to-do
// you have x todos
// print the first and second to last items

const todos = [
  "study",
  "make breakfast",
  "replant plants",
  "go to store",
  "hang mirror",
];

// console.log(`You have ${todos.length} To-Do's.`);

// console.log(`To-do: ${todos[1]}, ${todos[todos.length - 2]}.`);

// console.log(todos.shift());

// console.log(todos.splice(1, 0, "This is the new second item"));
// console.log(todos);

// delete 3rd item
// add new item on end
// remove first item

// todos.splice(2, 1);
// console.log(todos);
// todos.push("make legs for bookcase");
// console.log(todos);
// todos.shift();
// console.log(todos);

// todos.forEach((item, index) => {
//     console.log(`${index + 1}. ${item}`);
// });

// for (let i = 0; i < todos.length; i++){
//     console.log(`${i + 1}. ${todos[i]}`);
// }

// convert array to array of objects
// text: string from above, completed: true/false
// create function to remove to-do by text value

todos.forEach((el, index) => {
  todos[index] = { text: el, completed: false };
});
console.log(todos);

const removeFromArrayObjects = function (array, item) {
  const index = array.findIndex((el) => {
    return el.text.toLowerCase() === item.toLowerCase();
  });
  return index === -1
    ? "To-do not found"
    : `${array.splice(index, 1)} were removed`;
};

// console.log(removeFromArrayObjects(todos, "study"));
// console.log(todos);

const getCompletedToDos = (array) => {
  //iterate through array
  //check each el completed value, if true, include in new array
  return array.filter((el) => {
    return el.completed === true;
  });
};

// takes list
// returns just completed to-do's
todos[2].completed = true; // replant plants
todos[0].completed = true; // study

// console.log(getCompletedToDos(todos));

const sortToDos = (array) => {
  array.sort((a, b) => {
    // console.log(a, b);
    if (a.completed === true && b.completed === false) {
      //   console.log("Swapped!");
      return 1;
    } else if (b.completed === true && a.completed === false) {
      return -1;
    } else {
      return 0;
    }
  });
  return array;
};

// console.log(todos);
console.log(sortToDos(todos));
