//use case of protoype in js

class Events {
    bookEvents() {
        console.log("booking events", this);
    }
}

class Movie extends Events {
    bookTime() {
        console.log("showing time");
    }
}

class Comedy extends Events {
    bookTimeComedy() {
        console.log("showing time for comedy");
    }
}

const m = new Movie();
m.bookTime();
m.bookEvents(); // this will point to call site : m object

const c = new Comedy();
c.bookTimeComedy();
c.bookEvents(); // this will point to call site : c object

//check in dev tools
