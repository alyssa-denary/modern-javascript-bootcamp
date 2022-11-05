let temp = 65;

if (temp >= 60 && temp <= 90){
    console.log("It is pretty nice out");
}

if (temp <= 0 || temp >= 120){
    console.log("Do not go outside");
}

// challenge

let isGuestOneVegan = false;
let isGuestTwoVegan = false;

// Are both vegan, only offer vegan
// At least one vegan, offer some vegan options
// Else, offer up anything on menu

if (isGuestOneVegan && isGuestTwoVegan){
    console.log("Only offer vegan options");
} else if (isGuestOneVegan || isGuestTwoVegan){
    console.log("Offer some vegan options");
} else {
    console.log("Offer anything on menu");
}