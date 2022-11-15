const notes = [
  {
    title: "My next trip",
    body: "I would like to go to spain",
  },
  {
    title: "Habits to work on",
    body: "I should exercise more, Eating a bit better",
  },
  {
    title: "Office modification",
    body: "Get a new seat",
  },
  {
    title: "A test for sorting",
    body: "test test",
  },
];

// INITIAL DOM MANIPULATION PRACTICE
// const p = document.querySelector("p");
// console.log(p);
// // p.remove();

// const allP = document.querySelectorAll("p");

// allP.forEach((el) => {
//   //   el.remove();
//   //   console.log(el.textContent);
//   el.textContent = "********";
// });

// // Goal to add new p to bottom
// // Add new element
// // update it's content
// // Put it somewhere

// const newP = document.createElement("p");
// newP.textContent = "I'm the newest paragraph";
// // body.append(newP);
// document.querySelector("body").appendChild(newP);

const newNote = document
  .querySelector(".note-submit")
  .addEventListener("click", function (e) {
    // console.log("Did this work?");
    // e.target.textContent = "Button has been clicked";
  });

document.querySelector("#remove-button").addEventListener("click", (e) => {
  document.querySelectorAll(".note").forEach((note) => {
    note.remove();
  });
});

document.querySelector("#note-input").addEventListener("change", function (e) {
  console.log(e.target.value);
});
