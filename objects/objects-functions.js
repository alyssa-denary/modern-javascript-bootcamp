let myBook = {
    title: '1984',
    author: 'George Orwell',
    pageCount: 326
};

let otherBook = {
    title: 'A Peoples History',
    author: 'Howard Zion',
    pageCount: 723
};

let getSummary = function (book) {
    return {
        summary: `${book.title} by ${book.author}.`,
        pageCountSummary: `${book.title} is ${book.pageCount} pages long.`
    }
}

let bookSummary = getSummary(myBook);
let otherBookSummary = getSummary(otherBook);

console.log(bookSummary.pageCountSummary);
console.log(otherBookSummary.summary);

//Challenge:
// create func that returns obj
// pass in fahrenheit, returns obj with all 3 temps

const tempConverter = function (tempFahrenheit){
    return {
        fahrenheit: tempFahrenheit,
        celsius: (tempFahrenheit - 32) * (5/9),
        kelvin: (tempFahrenheit - 32)/1.8 + 273.15
    }
}

const degree0 = tempConverter(74);
console.log(degree0.fahrenheit);
console.log(degree0.celsius);
console.log(degree0.kelvin);

const degree100 = tempConverter(100);
console.log(degree100.fahrenheit);
console.log(degree100.celsius);
console.log(degree100.kelvin);



