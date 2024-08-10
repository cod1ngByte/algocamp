//setTimeout is not native code of js and it is async in runtime environment of browser and nodej

/*
//below code is not executed sequentially

setTimeout(function () {
    console.log("timeout calback function execution");
}, 3000); //time in ms 3000ms = 3sec
//if we pass 0 as 2nd argument of setTimeout(), in nodejs environment it is coverted to 1 even in chrome browser

console.log("end");
*/

// ------------------------------------------------------------------------------------------------------

setTimeout(function f() {
    console.log("timeout 1 callback function executed");
}, 10);

setTimeout(function g() {
    console.log("timeout 2 callback function executed");
}, 5);

let x = 0;

for (let i = 0; i < 10000000000; i++) {
    x = x + i;
}

console.log("end");

//output :
// end
// timeout 2 callback function executed
// timeout 1 callback function executed
