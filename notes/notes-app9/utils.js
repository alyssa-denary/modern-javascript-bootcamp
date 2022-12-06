// Read existing notes from localStorage
export function getSavedNotes() {
  let notesJSON = localStorage.getItem("notes");
  if (notesJSON !== null) {
    return JSON.parse(notesJSON);
  } else {
    return [];
  }
}

export function saveNote(notes) {
  localStorage.setItem("notes", JSON.stringify(notes));
}

// Filter notes that include string in title or body of note
export function filterNotes(arrOfObj, string) {
  return arrOfObj.filter((noteObj) => {
    return (
      noteObj.title.toLowerCase().includes(string.toLowerCase()) ||
      noteObj.body.toLowerCase().includes(string.toLowerCase())
    );
  });
}

// Sort notes
export function sortNotes(array, keyword) {
  let cb;
  // if sorting by last edited, sort by updatedAt timestamp dates
  if (keyword === "byEdited") {
    cb = (a, b) => {
      if (a.updatedAt < b.updatedAt) {
        return -1;
      } else if (a.updatedAt > b.updatedAt) {
        return 1;
      } else {
        return 0;
      }
    };
  } else if (keyword === "byRecent") {
    // if sorting by recently created, sort by createdAt date
    cb = (a, b) => {
      if (a.createdAt > b.createdAt) {
        return -1;
      } else if (a.createdAt < b.createdAt) {
        return 1;
      } else {
        return 0;
      }
    };
  } else if (keyword === "byAlphabetical") {
    // if sorting alphabetically, sort by title name
    cb = (a, b) => {
      if (a.title.toLowerCase() < b.title.toLowerCase()) {
        return -1;
      } else if (a.title.toLowerCase() > b.title.toLowerCase()) {
        return 1;
      } else {
        return 0;
      }
    };
  }
  return array.sort(cb);
}

// Generate note on DOM
export function generateNoteDOM(note, notes, searchText, sortBy) {
  const newSection = document.createElement("section");

  const removeButton = document.createElement("button");
  removeButton.textContent = "X";
  newSection.appendChild(removeButton);

  removeButton.addEventListener("click", () => {
    removeNote(note.id, notes);
    renderFilteredNotes(notes, searchText, sortBy);
  });

  const newArticle = document.createElement("article");
  const newLink = document.createElement("a");
  newLink.textContent = `${note.title}`;
  newLink.setAttribute("href", `edit.html#${note.id}`);
  newArticle.append(newLink);
  newArticle.setAttribute("class", "note");
  newSection.appendChild(newArticle);

  document.querySelector("#all-notes").appendChild(newSection);
}

// Render note to DOM
export function renderNote(notes, searchText, sortBy) {
  for (const note of notes) {
    generateNoteDOM(note, notes, searchText, sortBy);
  }
}

export function renderFilteredNotes(notes, searchText, sortBy) {
  const filtered = filterNotes(notes, searchText);
  const sorted = sortNotes(filtered, sortBy);
  clearSection("#all-notes");
  renderNote(sorted, searchText, sortBy);
}

// Remove all notes from an html section
export function clearSection(selector) {
  document.querySelector(selector).innerHTML = "";
}

// Remove specific note by id
export function removeNote(identifier, notes) {
  for (let i = 0; i < notes.length; i++) {
    if (notes[i].id === identifier) {
      notes.splice(i, 1);
    }
  }
  saveNote(notes);
}

// Render last edited string
export function showLastEdited(timestamp) {
  return `Last edited ${moment(timestamp).fromNow()}`;
}
