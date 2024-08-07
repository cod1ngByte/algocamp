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
    console.log("booking events", this.dateOfTime);
};
function Movie(name, dateOfTime) {
    //calling event function by passing this
    Events.call(this, dateOfTime);
    this.name = name;
}

Movie.prototype = Object.create(Events.prototype);
//new empty object is created and that object is point to Events.prototype
//empty object is assign to Movie.prototype

Movie.prototype.showTime = function () {
    console.log("showing time", this.name);
};

Movie.prototype.constructor = Movie;

const m = new Movie("kalki", "12-aug-2024");
console.log(m);
m.bookEvent();
m.showTime();
