let notes = getSavedNotes();

const userInput = { searchText: "" };

// Render all notes to start
renderFilteredNotes();

// Search form listener
document.querySelector("#search-form").addEventListener("input", function (e) {
  userInput.searchText = e.target.value;
  renderFilteredNotes();
});

// Create new note submit listener
document
  .querySelector("#create-note-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    const newNote = {
      id: uuidv4(),
      title: "",
      body: "",
    };
    notes.push(newNote);
    saveNote(notes);
    location.assign(`edit.html#${newNote.id}`);
  });

// Dropdown listener
document.querySelector("#sort-dropdown").addEventListener("change", (e) => {
  console.log(e.target.value);
});

// Global storage listener
window.addEventListener("storage", (e) => {
  if (e.key === "notes") {
    notes = JSON.parse(e.newValue);
    saveNote(notes);
    renderFilteredNotes();
  }
});

const now = moment();
console.log(now.toString());
now.add(1, "year").subtract(20, "days");
console.log(now.format("MMMM Do, YYYY"));
console.log(now.fromNow());

const nowTimestamp = now.valueOf();
console.log(moment(nowTimestamp).toString());
