// Global scope (convertFahrenheitToCelsius, celsius1, celsius2)
    // Local scope (fahrenheit)
        // Local scope (isFreezing)
function convertFahrenheitToCelsius (fahrenheit) {
    let celsius = (fahrenheit - 32) * (5/9);

    if (celsius <= 0){
        let isFreezing = true;
    }

    return celsius;
}

let celsius1 = convertFahrenheitToCelsius(32);
let celsius2 = convertFahrenheitToCelsius(68);

console.log(celsius1);
console.log(celsius2);