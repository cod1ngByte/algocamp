//prototypal inheritance without using extends keyword and class
/*
function Events(dateOfTime) {
    this.dateOfTime = dateOfTime;
}

Events.prototype.bookEvent = function () {
    console.log("booking event ");
};

function Movie(name) {
    this.name = name;
}

Movie.prototype.showTime = function () {
    console.log("showing time");
};

//movie prototype is pointing to Object prototype
// check Movie.prototype.__proto__ in devtools it will show Object.prototype

Movie.prototype.__proto__ = Events.prototype; // now Movie.prototype is pointing to Events.prototype
//check Movie.prototype.__proto__ check in devtools it will show Events.prototype so now we can access Events.prototype.bookEvents() using Movie object

const m = new Movie("deadpool");
m.showTime();
m.bookEvent();
*/

// --------------------------------------------------------------------------------------------------------
// creating prototypal inheritance using Object.create() instead of functionName.prototype.__proto__ = functionName.prototype

function Events(dateOfTime) {
    this.dateOfTime = dateOfTime;
}
Events.prototype.bookEvent = function () {
    console.log("booking events", this.name);
};

function Movie(name) {
    this.name = name;
}

Movie.prototype.showTime = function () {
    console.log("showing time", this.name);
};

// Movie.prototype.__proto__ = Events.prototype;
Movie.prototype = Object.create(Events.prototype);

const m = new Movie("kalki");
m.bookEvent();
// m.showTime(); unable to access showTime , now Movie.prototype has been changed to Event.prototype
