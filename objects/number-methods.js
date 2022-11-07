let num = 103.941;

console.log(num.toFixed(1));

console.log(Math.round(num));
console.log(Math.floor(num));
console.log(Math.ceil(num));

let min = 10;
let max = 20;
let randomNum = Math.floor(Math.random() * (max-min +1)) + min;
console.log(randomNum);

// Challenge Area
// function guess, generate number in range and determine if their guess is correct

const makeGuess = function(guess) {
    let min = 30;
    let max = 40;
    let randomNum = Math.floor(Math.random() * (max-min +1)) + min;
    return randomNum === Number(guess);
}

console.log(makeGuess(33));
console.log(makeGuess(37));
console.log(makeGuess(38));
console.log(makeGuess(31));
