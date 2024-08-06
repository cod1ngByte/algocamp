//result is of string type if any of operands are string type and operator is +

console.log("" + 0); // 0 -> "0"
console.log("" + -0); // -0 -> "0"
console.log(" " + []); // [] -> ""(empty string)
console.log("" + {}); // {} ->"[object Object]"
console.log("" + [1, 2, 3]); // [1,2,3]  -> "1,2,3"
console.log("" + [undefined, null]); // [undefined,null] -> ","
console.log("" + [1, 2, undefined, 4]); // [1,2,undefined,4] -> "1,2,,4"
