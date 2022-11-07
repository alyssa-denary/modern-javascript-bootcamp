let name = ' Alyssa   ';

console.log(name.length);

// convert to uppercase

console.log(name.toUpperCase());

console.log(name.toLowerCase());

// includes method
let password = 'abc123password';
console.log(password.includes('password'));

// trim method
console.log(name.trim());

// isValidPassword
// length longer 8, doesn't have password

const isValidPassword = function(pass) {
    return pass.length >= 8 && !(pass.toLowerCase().includes("password"))
}

console.log(isValidPassword("123"));
console.log(isValidPassword("123goodpass"));
console.log(isValidPassword("123password "));
