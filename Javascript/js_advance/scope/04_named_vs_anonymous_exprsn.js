const exprsn = function expresn(x) {
    if (x <= 0) {
        return;
    }
    console.log("named function exprsn");
    expresn(--x);
};

// exprsn(3);

const exprsn2 = function () {
    console.log("anonymous function expresn");
};

// exprsn2();

// 1. more readable than anonymous function expresn
// 2. hard to trace in call stack if more anonymous function is used in file

const exprsn3 = function (fn) {
    console.log("inside anonymous function");
    fn();
};

// named function expresn
exprsn3(function fun() {
    console.log("function passing as an argument");
    // console.trace(); not a native object 'console' of nodejs
});

//anonymous function expresn
exprsn3(function () {
    console.log("function passing as an argument");
    // console.trace(); not a native object 'console' of nodejs
});

//3. named function expresn  can be used as a recursive function expresn whereas anonymous function expsrn is hard to use as a recursive function exprsn

const arr = [2, 3, 4, 5];

const newArr = arr.map(function twice(param) {
    return param * 2;
});

console.log(arr);
console.log(newArr);
//------------------------------------------------------custom map function
function customMap(arr, fn) {
    const arr1 = [];
    for (let i = 0; i < arr.length; i++) {
        arr1.push(fn(arr[i]));
    }
    return arr1;
}

const newArr2 = customMap([2, 3, 4, 5], function twice(ele) {
    return ele * 2;
});

console.log(newArr2);

//--------------------------------------------------------------using function exprsn as a recursive environment

const exprsn1 = function fact(n) {
    if (n == 1) return 1;
    return n * fact(n - 1);
};
console.log(exprsn1(3));

const arr2 = [1, 2, 3, 4];

const arr3 = arr2.map(function fact(ele) {
    if (ele == 1) return 1;
    return ele * fact(ele - 1);
});

console.log(arr2);
console.log(arr3);

const arr4 = arr2.map(function (n) {
    if (n == 1) return 1;
    return n * arguments.callee(n - 1);
});

console.log(arr4);
