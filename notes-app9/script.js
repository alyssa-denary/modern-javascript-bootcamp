import { renderFilteredNotes, getSavedNotes, saveNote } from "./utils.js";

let notes = getSavedNotes();

const userInput = { searchText: "", sortBy: "byEdited" };

// Render all notes to start
renderFilteredNotes(notes, userInput.searchText, userInput.sortBy);

// Search form listener
document.querySelector("#search-form").addEventListener("input", function (e) {
  userInput.searchText = e.target.value;
  renderFilteredNotes(notes, userInput.searchText, userInput.sortBy);
});

// Create note listener
document
  .querySelector("#create-note-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    const timestamp = moment().valueOf();
    const newNote = {
      id: uuidv4(),
      title: "",
      body: "",
      createdAt: timestamp,
      updatedAt: timestamp,
    };
    notes.push(newNote);
    saveNote(notes);
    location.assign(`edit.html#${newNote.id}`);
  });

// Dropdown listener
document.querySelector("#sort-dropdown").addEventListener("change", (e) => {
  userInput.sortBy = e.target.value;
  renderFilteredNotes(notes, userInput.searchText, userInput.sortBy);
});

// Global storage listener
window.addEventListener("storage", (e) => {
  if (e.key === "notes") {
    notes = JSON.parse(e.newValue);
    saveNote(notes);
    renderFilteredNotes(notes, userInput.searchText, userInput.sortBy);
  }
});
