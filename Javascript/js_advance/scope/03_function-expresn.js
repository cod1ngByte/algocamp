// 1. named function exprsn
// 2. anonymous function exprsn
// 3. arrow function expresn
// 4. Intermediate function expresn
// intermediate function expresn can be named, anonymous or arrow
const exprsn1 = function fun1(x) {
    console.log("named function expression");
    console.log(x);
};

// exprsn1(10);
// fun1(10); fun scope is within the exprsn1 scope so we  cannot call outside the exprsn1 scope

const exprsn2 = function (x) {
    console.log("anonymous function expression");
    console.log(x);
};

// exprsn2(20);

const exprsn3 = (x) => {
    console.log("arrow function ");
    console.log(x);
};

// exprsn3(30);

(function fun3(x) {
    console.log("iife");
    console.log(x);
})(40);

(function (x) {
    console.log("iife ");
    console.log(x);
})(50);

(() => {
    console.log("iife");
})();
