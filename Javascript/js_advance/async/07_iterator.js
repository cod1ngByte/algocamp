const arr = [1, 2, 3, 4, 5];

//--------->imperative
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

//---------> declrative
/*
custom iterator for fetching array next element

function fetchNextElement(arr) {
    let idx = 0;
    function next() {
        //closure
        if (idx >= arr.length) {
            return { value: undefined, done: true };
        }
        const nextElemenet = arr[idx];
        idx++;
        return { value: nextElemenet, done: false };
    }
    return { next }; // returning object with next has property of an object, here next is a function
}

const it = fetchNextElement(arr);
console.log(it.next());
console.log(it.next());
console.log(it.next());
for (let i = 0; i < 10000000000; i++) {
    //
}
console.log(it.next());
console.log(it.next());
console.log(it.next());

// it.next();
*/

//---------------------------------------array is having inbuilt iterator

const arr1 = [2, 3, 4, 5];
const it = arr1[Symbol.iterator]();
console.log(it.next());
console.log(it.next());
console.log(it.next());
