let myBook = {
    title: '1984',
    author: 'George Orwell',
    pageCount: 326
};

console.log(`${myBook.title} by ${myBook.author}`);

myBook.title = 'Animal Farm';

console.log(`${myBook.title} by ${myBook.author}`);


// challenge: mode person: name, age, location

const person = {
    name: "Alyssa",
    age: 31,
    location: "New Haven"
}

console.log(`My name is ${person.name}. I'm ${person.age} and I live in ${person.location}`);

person.age += 1;

console.log(`My name is ${person.name}. I'm ${person.age} and I live in ${person.location}`);
