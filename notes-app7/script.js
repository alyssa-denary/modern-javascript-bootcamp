const notes = getSavedNotes();

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
      title: e.target.elements.title.value,
      body: e.target.elements.body.value,
    };
    notes.push(newNote);
    saveNote(notes);
    e.target.elements.title.value = "";
    e.target.elements.body.value = "";
    location.assign(`edit.html#${newNote.id}`);
  });

// Dropdown listener
document.querySelector("#sort-dropdown").addEventListener("change", (e) => {
  console.log(e.target.value);
});
