const obj = {
    firstName: "rajiv",
    //call apply and bind doesn't work in arrow function also
    /**
     greet: () => {
         console.log("hello my name is ", this.firstName);
     },
      
     */
    greet: function () {
        console.log("hello my name is ", this.firstName);
    },
};
//for arrow function
// obj.greet(); //this in arrow is resolved lexically ie. scope : global -->arrow  so output : undefined since no firstName in global scope

const newObj = {
    firstName: "ranjan",
};

obj.greet(); // normal function so this is pointing to call site : obj object

// each function have access to method call apply and bind

obj.greet.call(newObj); // here this will point to the first argument of call() method that is newObj

//------------------------------------------------------------------------------------------------------
const obj1 = {
    firstName: "rajiv",
    greet(msg, msg1) {
        console.log("hello my name is ", this.firstName, msg, msg1);
    },
};
const newObj1 = {
    firstName: "ranjan",
};

obj1.greet("how are you?", "how can i help you");

//changing this keyword value using call() method

obj1.greet.call(newObj1, "how are you?", "how can i help you?");
//first argument is this keyword value, 2nd argument onwards it is function argument

obj1.greet.call(null, "how are you", "how can i help you"); // this is pointing to null and null.firstName = undefined
// obj1.greet.call('abcd','how are you','how can i help you');

//what if we don't pass any argument to call(), then this will point to??
//it will point to global object that is in the case of browser is winodw
obj1.greet.call();

//-----------------------------------------------------------------------------------------------------------
// apply() method
/**
 * it works exactly same like call(), the only difference is instead of taking n number of arguments, it will take only 2
 * 1st argument : the object which will poinnt to this
 * 2nd argument : array of values which will be pass to function
 */

obj1.greet.apply(newObj, ["how are you", "how may i help you"]);

//----------------------------------------------------------------------------------------------
//INTRESTING CASE:
var name = "rajiv";
const obj3 = {
    name: "ranjan",
    greet() {
        console.log("hi", this.name);
    },
};

obj3.greet.call(); // no 1st argument therfore this is will point to global object , in browser it will be window
//window.name = '' --> by default
//window.name = 'rajiv' --> var in global scope create key in window object
//output : rajiv

//what if we change the var name = 'rajiv' to let name = 'rajiv'

//-----------------------------------------------------------------------------------------------
//bind() works exactly like call() but instead of immediately invoking the function, it will return a new function which has
// this keyword binded to the object passed as argument and this new function can be called later anytime

const obj4 = {
    firstName: "rajiv",
    greet(msg, msg1) {
        console.log("hello my name is ", this.firstName, msg, msg1);
    },
};

const newObj4 = {
    firstName: "ranjan",
};

const fn = obj4.greet.bind(newObj4); // bind will return a new function which has this keyword binded to the object
fn("how are you", "how may i help you");

//------------------------------------------resolving arrow function------------------------------------

const obj5 = {
    name: "rajiv",
    greet() {
        const self = this;
        const arrow = () => {
            console.log("hey ", self.name);
        };
        arrow();
    },
};
