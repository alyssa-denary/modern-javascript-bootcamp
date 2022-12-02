import * as Utils from "./utils";

export let notes = Utils.getSavedNotes();

console.log(notes);

export const userInput = { searchText: "", sortBy: "byEdited" };

// Render all notes to start
Utils.renderFilteredNotes(userInput.sortBy);

// Search form listener
document.querySelector("#search-form").addEventListener("input", function (e) {
  userInput.searchText = e.target.value;
  Utils.renderFilteredNotes(userInput.sortBy);
});

// Create new note submit listener
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
    Utils.saveNote(notes);
    location.assign(`edit.html#${newNote.id}`);
  });

// Dropdown listener
document.querySelector("#sort-dropdown").addEventListener("change", (e) => {
  userInput.sortBy = e.target.value;
  Utils.renderFilteredNotes(e.target.value);
});

// Global storage listener
window.addEventListener("storage", (e) => {
  if (e.key === "notes") {
    notes = JSON.parse(e.newValue);
    Utils.saveNote(notes);
    Utils.renderFilteredNotes(userInput.sortBy);
  }
});
