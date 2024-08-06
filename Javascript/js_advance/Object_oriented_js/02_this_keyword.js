const obj = {
    x: 20,
    y: 30,
    fn: function () {
        // this -->call site is obj object
        console.log(this.x);
        console.log(this.y);
    },
};

obj.fn(); // here call site for this keyword is : obj, as it is calling this function fn() which has this keyword
// output : 20, 30

const obj1 = {
    x: 10,
    y: 20,
    z: {
        x: 99,
        fn: function () {
            // this -- > call site is z object
            console.log(this.x);
            console.log(this.y);
        },
    },
};

obj1.z.fn();
//output : 99 undefined
//here fn() is triggered using z, so call site is z which holding the value of this keyword

//arrow function doesn't have this keyword .ie this keyword not refer to call site in arrow function

const obj2 = {
    x: 10,
    y: 20,
    z: {
        x: 99,
        fn: () => {
            //this is resolved lexically, one scope up
            //call stack : global -> fun()
            // therefore this point to global and there will find x and y which undefined
            console.log(this.x);
            console.log(this.y);
        },
    },
};
// var x = 200;
// var y = 300;
// const x = 2222;
// const y = 3333;
//there is no script scope if yes then y i am not allowed to have variable with same name in two different scope
obj2.z.fn();
//output : undefined undefined
// wrong answer this refer to global object ie. winodw
//in case of arrow function this keyword is resolved using lexical scoping ie. it will look up one scope outside for this keyword value

const obj3 = {
    x: 10,
    y: 20,
    fn: function () {
        //this keyword is present using call site is obj3 object
        const arrow = () => {
            //this resolved lexically
            console.log(this.x);
            console.log(this.y);
            // scope : global -> fn scope -> arrow scope
        };
        arrow();
    },
};

obj3.fn();
//output : 10 20
// here this keyword is resolve lexically ie. it search for this keyword in arrow() scope if not it will look one scope outside, here fn() is one scope up, here this keyword is defined becoz normal function have this keyword from call site

//---------------------manually creating this inside arrow

const obj4 = {
    x: 20,
    y: 30,
    fn: function () {
        const arrow = () => {
            const m = {
                x: 99,
                y: 100,
                g: function () {
                    //this -> call site is m object
                    console.log(this.x);
                    console.log(this.y);
                },
            };
            m.g();
        };
        arrow();
    },
};

obj4.fn();

//output : 99 100

//agar tmhe this keyword use karna hai to arrow function mat use karo nai to dhyan do arrow function mai this keyword kaise lexcially resolve ho rha hai

// -------------------------------------------------------------------------
let obj5 = {
    x: 1,
    y: 2,
    // x and y are keys here
    fn: function () {
        // this -- > call site is obj5 object
        x = 3;
        y = 4;
        // here x and y are variable which are auto global scope becoz of no formal declarations
        const printVariables = () => {
            //this is resolved lexically
            // and x and y variable are also resolved lexically
            console.log(this.x);
            console.log(this.y);
            console.log(x, y);
        };
        printVariables();
    },
};

//scope  : global scope -> fn scope -> printVariables scope

obj5.fn();
console.log(x);
console.log(y);

// output : 1 2 3 4 3 4
//here x and y are global becoz of auto global scope
//keys are different from variables
// if keys name and variables name are same that don't effect since key is accessed using this.key and variable are accessed using variablename
//---------------------------------------------------------------------------
const obj6 = {
    x: 10,
    y: 20,
    fn() {
        //this call site is obj6 object
        const printVariables1 = () => {
            //this resolved lexically
            // global scope -> fn scope -> printVariable1 scope
            this.x = 9;
            this.y = 19;

            console.log(this.x); //key accessed
            console.log(this.y);
            // here variables x and y not defined that will be phase 2 error
            // console.log(x); //variable accessed
            // console.log(y);
        };
        printVariables1();
    },
};

obj6.fn();
//output : 9 19

const obj7 = {
    x: 10,
    y: 22,
    f: {
        arrow: () => {
            //this point to window object
            //global scope -> arrow scope
            this.x = 999;
            this.y = 88;
            console.log(this.x);
            console.log(this.y);
        },
    },
};
obj7.f.arrow();
//output : 999 88

function fun() {
    console.log(this);
}

fun(); // call site global ie window object

//output : this is a window object
