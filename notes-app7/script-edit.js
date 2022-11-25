const noteID = location.hash.substring(1);
const notes = getSavedNotes();
const note = notes.find((el) => el.id === noteID);

if (note === undefined) {
  location.assign(index.html);
}

document.querySelector("#note-title").value = note.title;
document.querySelector("#note-body").value = note.body;

document.querySelector("#note-title").addEventListener("input", (e) => {
  note.title = e.target.value;
  saveNote(notes);
});

document.querySelector("#note-body").addEventListener("input", (e) => {
  note.body = e.target.value;
  saveNote(notes);
});
