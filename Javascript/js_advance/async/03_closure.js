//1. closure is a mechanism using which a function remembers the variable present in the outer function scope even when the the outer function execution is completed.
//2. closure is an object
//3. closure is created at execution phase
//4. we can use closure even with the callback eg. below code :

/*
function createTimer(timer, timerId) {
    console.log("creating a new timer with id: ", timerId);
    setTimeout(() => {
        console.log(`timer with id ${timerId} is done`);
        //becoz of closure we can access local variable of outer function even if outer function execution is completed
    }, timer);
    console.log("successfully created a new timer with id: ", timerId);
}

console.log("starting the code");
createTimer(2000, 1);
createTimer(0, 2);
console.log("starting the loop");
for (let i = 1; i < 10000000000; i++) {
    //
}
console.log("loop is done");
console.log("last line of code");
*/
/**
 * output :
 * starting the code
creating a new timer with id:  1
successfully created a new timer with id:  1
creating a new timer with id:  2
successfully created a new timer with id:  2
starting the loop
loop is done
last line of code
timer with id 2 is done
timer with id 1 is done 
 */

//----------------------------------------------------------------------------------------------------------------

function fn(x, y) {
    let z = 5;
    function gn() {
        let w = 10;
        //accessing outer function variable
        console.log(x + z);
    }
    return gn;
}

const g = fn(10, 20);
g();

//output : 15
//console.dir(g) in dev tools
