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
  const newSection = document.createElement("section");

  const removeButton = document.createElement("button");
  removeButton.textContent = "X";
  newSection.appendChild(removeButton);

  const newArticle = document.createElement("article");
  newArticle.textContent = `${obj.title}: ${obj.body}`;
  newArticle.setAttribute("class", "note");
  newSection.appendChild(newArticle);

  document.querySelector("#all-notes").appendChild(newSection);
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
