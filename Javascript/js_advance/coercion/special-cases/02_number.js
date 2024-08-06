//toNumber(arg)

console.log(0 - "010"); // toNumber("010") --> 010 as number, o/p : -10
console.log(0 - "o10"); // o -> small oh, toNumber("o10") --> NaN, o/p : NaN
console.log(0 - "O10"); // O -> capital oh, toNumber("O10") --> NaN, o/p : NaN
// console.log(0 - 010); // 010 -> octal
console.log(0 - 0xab); // 0x10 -> hexadecimal
console.log(0 - "0xab"); // "0x10" -> hexadecimal

console.log(1 - []); // o/p : 1
// o/p is -1 for below code
console.log([] - 1);
console.log([""] - 1);
console.log(["0"] - 1);
