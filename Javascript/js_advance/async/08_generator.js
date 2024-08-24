//generator function helps us to write the declarative code
/*
function* customGenerator() {
    console.log("inside generator");
    yield 100;
    console.log("line 6");
    yield "rajiv";
    console.log("line 8");
    console.log("line 9");
    yield -999;
    console.log("line 11");
}

const it = customGenerator();
//it doesn't execute the customGenerator function instead
//return iterator object which is pointing to its prototype where next() is present
//console.dir(it)

console.log(it.next()); //will execute till 1st yield keyword
console.log("outside generator");
console.log(it.next()); // will executes from line 6 to line 7
console.log("outside generator");
console.log(it.next()); // will execute from line 8 to line 10
console.log("outside generator");
*/

/*
function* gen(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            yield arr[i];
        }
    }
}

const it = gen([2, 4, 3, 5, 6, 10]);
console.log(it.next());
console.log("out");
console.log(it.next());
console.log("out");
console.log(it.next());
console.log("out");
console.log(it.next());
console.log("out");
*/

function* gen() {
    console.log("inside generator");
    const x = yield 999;
    //yield will be replace by 10
    const y = x + 30;
    console.log(y);
    yield 888;
}

const it = gen();
console.log(it.next());
console.log(it.next(10));
