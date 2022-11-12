// const notes = ["notes1", "note2", "note3"];

// console.log(notes.length);
// console.log(notes[0]);

// notes.forEach((item, index) => {
//   console.log(`1. ${item}`);
// });

// 1. first
// 2. second

const notes = [
  {
    title: "My next trip",
    body: "I would like to go to spain",
  },
  {
    title: "Habits to work on",
    body: "I should exercise more",
  },
  {
    title: "Office modification",
    body: "Get a new seat",
  },
];

// const findNote = function (notes, noteTitle) {
//   const index = notes.findIndex(function (note, index) {
//     return note.title.toLowerCase() === noteTitle.toLowerCase();
//   });
//   return notes[index];
// };

const findNote = function (notes, noteTitle) {
   return notes.find(function (note, index) {
      return note.title.toLowerCase() === noteTitle.toLowerCase();
    });
  };

const note = findNote(notes, "OFfice modification");
console.log(note);
