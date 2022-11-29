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

const now = new Date();
console.log(now.toString());

console.log(`Year: ${now.getFullYear()}`); // Year: 2022
console.log(`Month: ${now.getMonth()}`); // Month: 10 **Note: zero indexed
console.log(`Day of month: ${now.getDate()}`); // Day of month: 29
console.log(`Hour: ${now.getHours()}`); // Hour: 10
console.log(`Minute: ${now.getMinutes()}`); // Minute: 41
console.log(`Seconds: ${now.getSeconds()}`); // Seconds: 20

const date1 = new Date("February 5 1980 06:35:46");
const date2 = new Date("December 1 1989 02:32:45");

const timestamp1 = date1.getTime();
const timestamp2 = date2.getTime();

const first = Math.min(timestamp1, timestamp2);
console.log("time: ", first.toString());

const firstDate = new Date(first);
console.log(firstDate.toString());
