const noteID = location.hash.substring(1);
const notes = getSavedNotes();
const note = notes.find((el) => el.id === noteID);

if ((note = undefined)) {
  location.assign(index.html);
}


