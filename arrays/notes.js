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
    body: "I should exercise more, Eating a bit better",
  },
  {
    title: "Office modification",
    body: "Get a new seat",
  },
  {
    title: "A test for sorting",
    body: "test test",
  },
];

// const findNote = function (notes, noteTitle) {
//   const index = notes.findIndex(function (note, index) {
//     return note.title.toLowerCase() === noteTitle.toLowerCase();
//   });
//   return notes[index];
// };

// const findNote = function (notes, noteTitle) {
//    return notes.find(function (note, index) {
//       return note.title.toLowerCase() === noteTitle.toLowerCase();
//     });
//   };

// const note = findNote(notes, "OFfice modification");
// console.log(note);

// const neArray = notes.filter((el, index) => {
//   // iterate over each el obj
//   for (const key in el) {
//     // if value has "ne", return true
//     if (el[key].toLowerCase().includes("ne")) return true;
//   }
//   //return false (post iteration, no "ne" found)
//   return false;
// });

// console.log(neArray);

const findNotes = (notes, query) => {
  return notes.filter((el) => {
    // iterate over each el obj
    for (const key in el) {
      // if value has "ne", return true
      if (el[key].toLowerCase().includes(query.toLowerCase())) return true;
    }
    //return false (post iteration, no "ne" found)
    return false;
  });
};

// console.log(findNotes(notes, "ne"));
// console.log(findNotes(notes, "work"));
// console.log(findNotes(notes, "eating"));

const sortNotes = (notes) => {
  notes.sort((a, b) => {
    if (a.title.toLowerCase() < b.title.toLowerCase()) {
      return -1;
    }
  });
  return notes;
};

console.log(sortNotes(notes));
