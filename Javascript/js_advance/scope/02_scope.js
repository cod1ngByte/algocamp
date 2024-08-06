// -------------------------------------------------1. global scope

/*
let x = 10;
function fun(){
    console.log(x);
}

for(let i = x; i <= 10; i++){
    console.log(i);
}
*/

//---------------------------------------------------2. function scope

/*
function fun() {
    let x = 10;
    for (let i = x; i <= 10; i++) {
        console.log(i);
    }
    {
        console.log(x);
    }
}

fun();
function gun() {
    console.log(x); // ref error x is not defined in gun scope
}
gun();

console.log(x); //ref error x is not defined in global scope
*/

//---------------------------------------------------3. block scope

/*
{
    let x = 10;
    console.log(x);
}

console.log(x); // ref error : x is not defined in global scope
*/
//------------------------------------------------------------------
/* 
//1.
var teacher = "rajiv";
function fun(){
    var teacher = "ranjan";
    console.log("Hello",teacher);
}
function gun(){
    var student = 'prakash';
    console.log(student);
}

fun();
gun();
*/

/*
//2
var teacher = "rajiv";
function fun() {
    var teacher = "ranjan";
    console.log("hello", teacher);
}

function gun() {
    var student = "prakash";
    console.log(student, teacher);
}

fun();
gun();

o/p: hello ranjan
     prakash rajiv
*/

/*
// 3.
var teacher = 'rajiv';
function fun(){
    var teacher ='ranjan';
    console.log("hello",teacher);
    function gun(){
        var student = 'prakash';
        console.log(student,teacher)
    }
    gun();
}

fun();

//o/p : hello ranjan
//      prakash ranjan
*/

/*
//4. auto global
var teacher = "rajiv";
function fun() {
    teacher = "ranjan";
    content = "js";
    console.log(teacher, content);
}
fun();
console.log(teacher);
console.log(content);
 
// op : ranjan js
        ranjan js
*/

/*
// 5.
var teacher = "rajiv";
function fun() {
    teacher = "ranjan";
    content = "js";
    console.log(content, teacher);
}

console.log(teacher);
console.log(content); // ref error : content is not defined, further execution stopped
fun();

*/

/*
//6.
var teacher = "rajiv";
function fun() {
    teacher = "ranjan";
    content = "js";
    console.log(content, teacher);
}

console.log(teacher);
fun();
console.log(content);

//op : rajiv
//     js ranjan
//     js

*/

/*
// 7.
var x = 10;
if(true){
    var x = 20;
    var y = 30;
    console.log(x,y);
}

console.log(x,y);

// var keyword having global or functional scope only 
//op    : 20 30
//      : 20 30
*/

/*
//8.
var x = 10;
console.log(x, y);
if (true) {
    var x = 20;
    var y = 30;
    console.log(x, y);
}
console.log(x, y);

// op   :10 undefined
//      : 20 30
//      : 20 30
*/

/*
//9.
let x = 10;
var y = 20;
function fun() {
    var x = 30;
    {
        let y = 40;
        console.log(x, y);
    }
    console.log(x, y);
}
fun();
console.log(x, y);

//op:    30 40
//  :    30 20
//  :    10 20
//phase 2, scope : global ->fun -> block -> fun -> global 
*/

/*
//10.
var currStud = 'rajiv';
console.log(bestFrnd); //ref error : bestFrnd is not defined
function fun(){
    var currStudLocal = 'ranjan';
    bestFrnd = 'Prakash';
    console.log(currStudLocal, bestFrnd);
}
*/

/*
//11.
var x = 10;
for(var x = 1; x < 3; x++){
    console.log(x);
}

var x = 30;
console.log(x);
// op : 1 2 30
*/

// variable declare using let/const get the scope of nearest block. if block, else block, for block, while block or scope inside function block
