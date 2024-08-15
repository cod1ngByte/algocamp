/*

function fn(cb) {
    //
    function resolver(val) {
        console.log("resolver fn", val);
    }
    //
    function rejecter(val) {
        console.log("rejecter fn", val);
    }
    //
    cb(resolver, rejecter);
    //
}

fn(function exec(res, rej) {
    res(10);
    rej(20);
});

*/
/**
 * new keyword :
 * 1. new empty object created
 * 2. this is pointing to empty object, and constructor code is getting executed
 * 3. prototypal chaining
 * 4. executer callback is executed
 * 5. returning the promise object created
 */

const pr = new Promise(function executer(res, rej) {
    console.log("executer callback is triggered by Promise constructor");
    for (let i = 0; i < 10000000000; i++) {
        //
    }
    //Promise object will be created only if this executer call back is executed.
});
console.log("Promise object created");

console.log(pr);
