let greetUser = function(){
    console.log("Welcome User");
}

greetUser();
greetUser();
greetUser();


let square = function (num){
    return num * num;
}

let value = square(3);
let otherValue = square(10);

console.log(value);
console.log(otherValue);

// create function convertFahrenheitToCelsius
// call couple times
// print converted value

function convertFahrenheitToCelsius (fahrenheit) {
    return (fahrenheit - 32) * (5/9);
}

let celsius1 = convertFahrenheitToCelsius(32);
let celsius2 = convertFahrenheitToCelsius(68);

console.log(celsius1);
console.log(celsius2);