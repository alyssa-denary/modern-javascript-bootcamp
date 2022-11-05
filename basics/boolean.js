let temp = 89;
let isFreezing = temp <= 32;

if (temp <= 32){
    console.log("It's freezing outside");
}

if (temp >= 110){
    console.log("It is way too hot outside");
}

// create age set to your age
let age = 5;
// under 7 ischild discount
let isChild = age <= 7;
// over 65 issenior
let isSenior = age >= 65;

// print ischild
console.log(isChild);
// print isSenior 
console.log(isSenior);

//7, 30, 65

// if 7 or under print msg about child price
if (age <= 7){
    console.log("Children enter free!");
}
// if 65 or older print senior discount
if (age >= 65){
    console.log("Seniors get 75% discount");
}