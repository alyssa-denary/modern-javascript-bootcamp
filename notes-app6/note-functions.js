console.log(uuidv4);

// Read existing notes from localStorage
function getSavedNotes() {
  const notesJSON = localStorage.getItem("notes");
  if (notesJSON !== null) {
    return JSON.parse(notesJSON);
  } else {
    return [];
  }
}

function saveNote(notes) {
  localStorage.setItem("notes", JSON.stringify(notes));
}

// Filter notes that include string in title or body of note
function filterNotes(arrOfObj, string) {
  return arrOfObj.filter((noteObj) => {
    return (
      noteObj.title.toLowerCase().includes(string.toLowerCase()) ||
      noteObj.body.toLowerCase().includes(string.toLowerCase())
    );
  });
}

// Generate note on DOM
function generateNoteDOM(obj) {
  const newPar = document.createElement("p");
  newPar.textContent = `${obj.title}: ${obj.body}`;
  newPar.className = "note";
  document.querySelector("#all-notes").appendChild(newPar);
}

// Render note to DOM
function renderNote(arrOfObj) {
  for (const obj of arrOfObj) {
    generateNoteDOM(obj);
  }
}

// Remove all notes from an html section
function clearSection(selector) {
  document.querySelector(selector).innerHTML = "";
}
