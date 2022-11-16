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

// Render all notes to start
renderNote(notes);

// Each time input changes, remove all notes and just show new rendered items
// Get current state of search input and update filter
// Render just the notes that match that filter
document
  .querySelector("#search-form label input")
  .addEventListener("input", function (e) {
    removeAllNotes(".note");
    renderNote(filterNotes(notes, e.target.value));
  });

document
  .querySelector("#create-note-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    const newNote = [
      {
        title: e.target.elements.title.value,
        body: e.target.elements.body.value,
      },
    ];
    notes.push(newNote[0]);
    renderNote(newNote);
    e.target.elements.title.value = "";
    e.target.elements.body.value = "";
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
    document.querySelector("#all-notes").appendChild(newPar);
  }
}

function removeAllNotes(selector) {
  document.querySelectorAll(selector).forEach((note) => {
    note.remove();
  });
}

function clearSection(selector) {
  document.querySelector(selector).innerHTML = "";
}
