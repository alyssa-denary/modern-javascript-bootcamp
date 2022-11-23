const notes = getSavedNotes();

// Render all notes to start
renderNote(notes);

// Search form listener
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
    saveNote(notes);
    clearSection("#all-notes");
    renderNote(notes);
    e.target.elements.title.value = "";
    e.target.elements.body.value = "";
  });

// Dropdown listener
document.querySelector("#sort-dropdown").addEventListener("change", (e) => {
  console.log(e.target.value);
});
