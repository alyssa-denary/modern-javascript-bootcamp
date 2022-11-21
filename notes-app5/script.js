let notes = [];

// Check for existing saved data
const notesJSON = localStorage.getItem("notes");
if (notesJSON !== null) {
  notes = JSON.parse(notesJSON);
}

// Render all notes to start
renderNote(notes);

// Search form Listener
document.querySelector("#search-form").addEventListener("input", function (e) {
  clearSection("#all-notes");
  renderNote(filterNotes(notes, e.target.value));
});

// Create new note submit listener
document
  .querySelector("#create-note-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    const newNote = {
      title: e.target.elements.title.value,
      body: e.target.elements.body.value,
    };
    notes.push(newNote);
    localStorage.setItem("notes", JSON.stringify(notes));
    clearSection("#all-notes");
    renderNote(notes);
    e.target.elements.title.value = "";
    e.target.elements.body.value = "";
  });

// Dropdown listener
document.querySelector("");

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
