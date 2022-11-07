let restaurant = {
    name: 'Thai Table',
    guestCapacity: 75,
    guestCount: 0,
    checkAvailability: function (partySize) {
        return this.guestCount + partySize <= this.guestCapacity;
    }
}

let stats = restaurant.checkAvailability(4);

// console.log(stats);

// seatParty
restaurant.seatParty = function (partySize) {
    if (!this.checkAvailability) {
        throw new Error ("This party is too big to seat");
    } else {
        this.guestCount += partySize;
    }
}
// removeParty
restaurant.removeParty = function(partySize) {
    this.guestCount -= partySize;
}

restaurant.seatParty(72);
console.log(restaurant.checkAvailability(4));
restaurant.removeParty(5);
console.log(restaurant.checkAvailability(4));