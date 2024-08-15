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
//---------------------------------------------------how promise is created-------------------------------------------------
*/
/**
 * new keyword :
 * 1. new empty object created
 * 2. this is pointing to empty object, and constructor code is getting executed
 * 3. prototypal chaining
 * 4. executer callback is executed
 * 5. returning the promise object created
 */
/*

const pr = new Promise(function executer(res, rej) {
    console.log("executer callback is triggered by Promise constructor");
    for (let i = 0; i < 10000000000; i++) {
        //
    }
    //Promise object will be created only if this executer call back is executed.
});
console.log("Promise object created");

console.log(pr);

*/
//--------------------------------------------------------------------------------------------------------------
//------->changing state from pending to fullfilled or rejected according to operation of exec callback
//

/*
const pr = new Promise(function exec(res, rej) {
    console.log("executer callback triggered by Promise constructor");
    const randomNumber = Math.floor(Math.random() * 100);
    if (randomNumber % 2 === 0) {
        res(randomNumber);
    } else {
        rej(randomNumber);
    }
});

console.log("promise object created");
console.log(pr);
*/
//------------------------------------------------------------------------------------------
/*
const pr = new Promise(function exec(res, rej) {
    console.log("executer callback triggered by Promise constructor");
    setTimeout(() => {
        const randomNumber = Math.floor(Math.random() * 100);
        if (randomNumber % 2 === 0) {
            res(randomNumber);
        } else {
            rej(randomNumber);
        }
    }, 5000);
});

console.log("promise object created");
console.log(pr); // pr.status will be pending but after the execution of setTimout() pr.status will be fullfilled
*/
//---------------------------------------------------------------------------------------------

//---------------------------------------how to consume Promise---------------------------------------------

/*
console.log("start");
setTimeout(function timerCB() {
    console.log("timer 1 is done");
}, 2000);

const pr = new Promise(function exec(res, rej) {
    console.log("executer callback triggered by Promise constructor");
    setTimeout(function prCb() {
        const randomNumber = Math.floor(Math.random() * 100);
        if (randomNumber % 2 == 0) {
            res(randomNumber);
        } else {
            rej(randomNumber);
        }
    }, 3000);
});

console.log("promise object created");

pr.then(
    function f() {
        console.log("f function executed");
    },
    function g() {
        console.log("g function executed");
    }
);
pr.then(
    function h() {
        console.log("h function executed");
    },
    function i() {
        console.log("i function executed");
    }
);
for (let i = 0; i < 10000000000; i++) {
    //
}
for (let i = 0; i < 1000000000; i++) {
    //
}
console.log("end");

//function f and h are stored in onFullfillment array and function g and i is stored in onRejection array
//if state : fullfilled, then f and h will be enqueue to micorqueue
//if state : rejected, then g and i will be enqueue to microqueue
*/
//----------------------------------------------------------------------------------------------------------------
//
/*
console.log("start");
const p1 = new Promise(function exec(res, rej) {
    console.log("executer callback is triggered by Promise constructor");
    setTimeout(function p1CB() {
        console.log("timer of p1 done");
        res(210);
    }, 500);
});

console.log("p1 object created");
//.then() --> will store the function in onFullfillment array and onRejection array it will not execute the function
//function will be executed depending upon the res() or rej()
//function will taken out from onFullfillment array or onRejection array and enqueue in microtask queue to execute
p1.then(
    function a() {
        console.log("function a is executed");
    },
    function b() {
        console.log("function b is executed");
    }
);

setTimeout(function timerCB() {
    console.log("timer 2 is done");
}, 2000);

const p2 = new Promise(function exec(res, rej) {
    console.log("executer callback is triggered by Promise constructor");
    setTimeout(function p2CB() {
        const randomNumber = Math.floor(Math.random() * 100);
        if (randomNumber % 2 == 0) {
            res(randomNumber);
        } else {
            rej(randomNumber);
        }
    }, 4000);
});

console.log("p2 object created");
//then() stored not executed
p2.then(
    function f() {
        console.log("function f is executed");
    },
    function g() {
        console.log("function g is executed");
    }
);

for (let i = 0; i < 1000000000; i++) {
    //
}
console.log("end");
*/

//------------------------------------------------------------------------------------------
//check output:
setTimeout(() => {
    console.log("timer is done");
}, 2000);

const p = new Promise((res, rej) => {
    for (let i = 0; i < 1000000000; i++) {
        //
    }
    res(90);
    // native code
});

p.then(
    function f() {
        console.log("f is executed");
    },
    function g() {
        console.log("g is executed");
    }
);
// macro task queue [timer 2 sec]
//micro task queue [f]
//priority to micortask queue

//output : f is executed
// timer is done
