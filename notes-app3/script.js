const currentInput = document
  .querySelector("#note-input")
  .addEventListener("change", function (e) {
    return e.target.value;
  });

document.querySelector(".note-submit").addEventListener("click", function () {
  addNote();
});

function addNote() {
  const newPar = document.createElement("p");
  newPar.textContent = "I am the new paragraph";
  document.querySelector("body").appendChild(newPar);
  console.log(currentInput);
}

document.querySelector("#remove-button").addEventListener("click", (e) => {
  document.querySelectorAll(".note").forEach((note) => {
    note.remove();
  });
});

// document.querySelector("#note-input").addEventListener("change", function (e) {
//   console.log(e);
// });
