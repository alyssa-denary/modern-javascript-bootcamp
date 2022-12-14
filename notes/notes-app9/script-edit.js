'use strict'

import {
  getSavedNotes,
  saveNote,
  showLastEdited,
  removeNote,
} from "./utils.js";

export const noteID = location.hash.substring(1);
export let notes = getSavedNotes();
export let note = notes.find((el) => el.id === noteID);

if (note === undefined) {
  location.assign("index.html");
}

export const noteTitle = document.querySelector("#note-title");
export const editedTime = document.querySelector("#time-last-edited");
export const noteBody = document.querySelector("#note-body");

// Initialize displayed value as current title and body
noteTitle.value = note.title;
noteBody.value = note.body;

// Initialize last edited time
editedTime.textContent = showLastEdited(note.updatedAt);

// Event listeners to update and save new note title and body
noteTitle.addEventListener("input", (e) => {
  note.title = e.target.value;
  note.updatedAt = moment().valueOf();
  editedTime.textContent = showLastEdited(note.updatedAt);
  saveNote(notes);
});

noteBody.addEventListener("input", (e) => {
  note.body = e.target.value;
  note.updatedAt = moment().valueOf();
  editedTime.textContent = showLastEdited(note.updatedAt);
  saveNote(notes);
});

// Event listener for remove note button, also returns user to homepage
document.querySelector("#remove-note").addEventListener("click", (e) => {
  removeNote(note.id);
  saveNote(notes);
  location.assign("index.html");
});

window.addEventListener("storage", (e) => {
  if (e.key === "notes") {
    notes = JSON.parse(e.newValue);
    note = notes.find((el) => el.id === noteID);

    if (note === undefined) {
      location.assign("index.html");
    }

    noteTitle.value = note.title;
    noteBody.value = note.body;
    editedTime.textContent = showLastEdited(note.updatedAt);
  }
});
