// Lexical scope (Static scope)
// Global scope - Defined outside of all code blocks
// Local scope - Defined inside a code block

// Global scope (varOne)
    // Local scrope (varTwo)
        // Local scope (varFour)
    // Local scope (varThree)

let varOne = "varOne";

if (true) {
    console.log(varOne);
    let varTwo = "varTwo";
    console.log(varTwo);

    if (true){
        let varFour = "varFour";
    }
}

if (true) {
    let varThree = "varThree";
}

console.log(varTwo);