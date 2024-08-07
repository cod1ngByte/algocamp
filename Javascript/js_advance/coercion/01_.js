// echma 2019
// 6 : data type and values
// 7 : abstract operation : operation that we js developer cannot use but use by js internally used to convert automatically
//7.1 type conversion
// 7.1.2 ToBoolean(arg)
//12.5.9 logical not opertor --> internally used ToBoolean(arg) which is a abstract operations
// logical and or not all uses ToBoolean() internally
//7.1.3 ToNumber(arg) : used by subtraction operator(12.8.4) , used by addition Operator
// abstract equality comparison and strict equality comparison
//ToString(arg)

//ToPrimitive()

/*
const x = {};
console.log(x.toString()); //'[object Object]'
console.log(x.valueOf()); //return the x object itself ie {}
*/
/*
const y = {
    a: 10,
};

console.log(y.toString()); //'[object Object]'
console.log(y.valueOf()); //{ a: 10 } return the object itself
*/
/*
//can we change the implementation of toString() and valueOf() ?? -----------> Yes

const z = {
    a: 10,
    b: 20,
    toString() {
        console.log("my toString()");
    },
};

//z.prototype having toString()
// no need to call Object.toString()

z.toString(); //"my toString()"

//overriding valueOf() in z object
z.valueOf = function () {
    // console.log("");
    return 100;
};

//call valueOf
console.log(z.valueOf());
*/
/*
//we can override the toString() and valueOf() in your own class
class Product {
    toString() {
        console.log("overriding toString() ");
    }
}
//toString() is available in Product.prototype

*/
//////-------------------------
const x = 10;
const y = {
    a: 10,
};
console.log(x - y); //output : NaN
// ToNumber()-->ToPrimitive(y,hint number) --> OrdinaryToPrimtive(O,number) --> [valueOf(),toString()] --> '[object Object]'
// ToNumber('[object Object]') --> NaN

//10 - '[object Object]'
// 10 - NaN = NaN --> any arithmetic operation with NaN will result in NaN only

//if valueOf and toString both return object then ToPrimitive return type error
// y.toString = function () {
//     return {};
// };
// console.log(x - y); // output typeerror y cannot be converted to number type

y.toString = function () {
    return "100";
};

console.log(x - y); // -90
//y.valueOf() --> y itself, y.toString() --> '100', 10 -'100' , 10 - ToNumber('100') --> 10 - 100 --> -90

y.valueOf = function () {
    return 200;
};
console.log(x - y); // -190
//y.valueOf() --> 200, 10 - 200 --> -190

class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    valueOf() {
        // return this.price;
        return null;
    }
}
const p = new Product("mg14", 15500);
console.log(10 - p); // 10 - p.valueOf() --> 10 - 15500 --> 15490
console.log(10 - p); // 10 - null --> 10 - 0 --> 10
console.log(10 < p); // false

//abstract relation operator

const p1 = new Product("samsung", 15500);
// two object are commpared
//see abstract relation operator
console.log(p < p1); //output : false , ToPrimitive(arg,hint number) -->valueOf() is called for p1 and p
//-----------------------------------------------------------------------------------------------------------
//interview question asked in linkedin related to coercion
//adding any string + function --> result should be string + function name not string + function defination
//what is the use case ? to log which function is getting called while debugging
function fun() {}

fun.toString();
//output : return the function defination in string
/**
 * "function fun(){}"
 */

console.log("my function name is " + fun); // check addition operator in document
//output :
/**
 * "my function name is function fun(){}""
 * ToPrimitive(fun) --> OrdinaryToPrimitive(O,number) --> fun.valueOf() -->reference of fun,
 * fun.toString() --> 'fun(){}'
 * 'my function name is ' + 'fun(){}' => return new string after adding both
 */

function fun1() {}

//override toString() in fun1()
fun1.toString = function () {
    return "fun";
};
console.log("my function name is " + fun);
//output:
/**
 * 'my function is fun'
 */

//check typeof operator in document
//--------------------------------------------------------------------------------------------------------------

//what will be the return value if arr.valueOf() and arr.toString() is called
const arr = [10, 20];
console.log(arr.toString()); // output : '10,20', element separated by comma in string is written
console.log(arr.valueOf()); // output : Array [ 10, 20 ], array itslef is written

const arr1 = [];
console.log(arr1.toString()); //output : ""(empty string)
console.log(arr1.valueOf()); // output : {}, object itself which empty object
