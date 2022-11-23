const notes = getSavedNotes();

const userInput = { searchText: "" };

// Render all notes to start
renderNote(notes);

// Search form listener
document.querySelector("#search-form").addEventListener("input", function (e) {
  userInput.searchText = e.target.value;
  clearSection("#all-notes");
  renderNote(filterNotes(notes, userInput.searchText));
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
    let filtered = filterNotes(notes, userInput.searchText);
    clearSection("#all-notes");
    renderNote(filtered);
    e.target.elements.title.value = "";
    e.target.elements.body.value = "";
  });

// Dropdown listener
document.querySelector("#sort-dropdown").addEventListener("change", (e) => {
  console.log(e.target.value);
});
