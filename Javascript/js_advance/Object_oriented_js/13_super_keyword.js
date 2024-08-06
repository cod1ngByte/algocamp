//--------------------------super keyword using classes
/*
class Events {
    constructor(dateOfTime) {
        this.dateOfTime = dateOfTime;
    }

    bookEvents() {
        console.log("booking events");
    }
}

class Movie extends Events {
    constructor(movieName, movieTime) {
        super(movieTime); // it will call the parent constructor of Movie class ie Event constructor is called
        this.name = movieName;
    }
    showTime() {
        console.log("showing time");
    }
}

const m = new Movie("kalki", "1-08-2024");
m.showTime();
m.bookEvents();
*/

//---------------------------------------super keyword using function
function Event(dateOfTime) {
    this.dateOfTime = dateOfTime;
}
Event.prototype.bookEvent = function () {
    console.log("booking event");
};

function Movie(movieName, movieDate) {
    // super(movieDate) super cannot be used in function
    Event.call(this, movieDate); // this is pointing to Movie and is set to Event and that this(Movie object) is passed to Event constructor
    this.name = movieName;
}

Movie.prototype.showTime = function () {
    console.log("showing time");
};

Movie.prototype.__proto__ = Event.prototype;
// Movie.prototype   = Object.create(Event.prototype);  event.prototype will point to new Movie.prototype

const m = new Movie("kalki", "1aug'24");
m.showTime();
m.bookEvent();

// check in dev tools
// Movie.prototype
// Event.prototype
// Movie.prototype.__proto__
// Event.prototype.__proto__
