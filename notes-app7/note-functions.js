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

  removeButton.addEventListener("click", () => {
    removeNote(obj.id);
    renderFilteredNotes();
  });

  const newArticle = document.createElement("article");
  const newLink = document.createElement("a");
  newLink.textContent = `${obj.title}: ${obj.body}`;
  newLink.setAttribute("href", `edit.html#${obj.id}`);
  newArticle.append(newLink);
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

function renderFilteredNotes() {
  const filtered = filterNotes(notes, userInput.searchText);
  clearSection("#all-notes");
  renderNote(filtered);
}

// Remove all notes from an html section
function clearSection(selector) {
  document.querySelector(selector).innerHTML = "";
}

// Remove specific note by id
function removeNote(identifier) {
  for (let i = 0; i < notes.length; i++) {
    if (notes[i].id === identifier) {
      notes.splice(i, 1);
    }
  }
  saveNote(notes);
}
