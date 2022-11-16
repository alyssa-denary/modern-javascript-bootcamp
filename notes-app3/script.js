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

// Create filter object to update whenever input value changes
let userSearch = "";

// Render all notes to start
renderNote(notes);

// Each time input changes, remove all notes and just show new rendered items
// Get current state of search input and update filter
// Render just the notes that match that filter
document.querySelector("#filter-notes").addEventListener("input", function (e) {
  removeAllNotes(".note");
  userSearch = e.target.value;
  renderNote(filterNotes(notes, userSearch));
});

// Remove button removes all notes
document.querySelector("#remove-button").addEventListener("click", (e) => {
  removeAllNotes(".note");
});

//////    HELPER FUNCTIONS ///////

// Create function to filter notes: render to-do items to document:
// input: notes, filters, output: array of objects of filtered notes
function filterNotes(arrOfObj, string) {
  return arrOfObj.filter((noteObj) => {
    return (
      noteObj.title.toLowerCase().includes(string.toLowerCase()) ||
      noteObj.body.toLowerCase().includes(string.toLowerCase())
    );
  });
}

// create function to render notes to DOM
// input: array of objects, output: each objects title rendered to DOM as paragraph
function renderNote(arrOfObj) {
  for (const obj of arrOfObj) {
    const newPar = document.createElement("p");
    newPar.textContent = `${obj.title}: ${obj.body}`;
    newPar.className = "note";
    document.querySelector("body").appendChild(newPar);
  }
}

function removeAllNotes(selector) {
  document.querySelectorAll(selector).forEach((note) => {
    note.remove();
  });
}
