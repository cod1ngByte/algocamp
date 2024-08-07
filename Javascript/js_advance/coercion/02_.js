console.log(1 < 2 < 3); //(1< 2) < 3 --> 1  < 2 -> true < 3 --> ToPrimitive(true,hint number) --> non object --> ToNumber(true) --> 1
// 1 < 3 > true
console.log(3 < 2 < 1); // (3 < 2) < 1 --> false --> ToPrimitive(false,number) --> non object --> ToNumber(false) --> 0
// 0  < 1  --> true

console.log(3 > 2 > 1);
//false > 1 --> 0 > 1 --> true

let x = 10;
console.log(`the value of x ${x}`);
// string + number = string
// output : 'the value of x 10'

let y = {};
console.log(`the value of y is ${y}`);
//string + object --> ToPrimitive(object) -- > OrdinaryToNumber(O, number) --> y.valueOf() , y.toString()
// output :' the value of y is [object Object]'

//-----------------------------------------------------------------
//--->converting string to Number manually
const str = "123";
console.log(+str); // result is Number(str); --> 123
const str1 = "1234bc";
console.log(+str1); // output : NaN, Number('1234bc') --> NaN

//-->> converting to Boolean
console.log(!!str); //output : true

Number(""); //--> 0
Number("-0"); // --> -0
Number("+0"); // --> +0

String(10); //-->"10"
String(0); //-->"0"
String(-0); //--> "0" not '-0'

//----------------------------------------------------------------
// ---> +0 and -0
//used in game development to identify the direction
//-0 present in IEEE standard aswell

//--------------------------------------------------------------
// NaN : represent as invalid number
//usecase : in array we need to find the element if found return the element index, if not found what to return we will return invalid number as index ie. NaN
// in other languages like c++/java we return -1 for invalid index
// any airthmetic operation with NaN will result in NaN only
/**
 * 1 + NaN = NaN
 * 2 - NaN = NaN
 * 3 * NaN = NaN
 * 4 / NaN = NaN
 * 5 % NaN = NaN
 *
 * NaN is not equals to itself
 * NaN === NaN -->false
 * NaN == NaN --> false
 * 
 * any comparison with NaN is always false we cannot compare the invalid number with any value
 *   1 > NaN 
false
1 < NaN
false
 1 == NaN
false
1 === NaN
false
"rajiv" === NaN
false


'rajiv' > NaN
false
 * 
*
 * */

//------------------------------------------------------------------------------------
// +Infinity / -Infinity
//represent the extremely big values
//checking +0 or -0 according to infintiy
// 1/0  --> Infinity
// 1/-0 --> -Infinity
//const x = 0;
//inbuilt function Object.is(x,0)
//inbuilt function Object.is(x,-0)

//-------------------------------------------------------------------------------------

//0 === -0 --> true
//0 === 0 --> true
//== will check if typeof(lhs) and typeof(rhs) is same if yes it will give to strict equality operators
//and 0 and -0 both are of number type

//---------------------------------------------------------------------------------------
//AutoBoxing -- not a term in js documentation, given by community
// Autoboxing helps you to apply methods in Primitive type by wrapping in them as object and then unwrapping them again to primtive type
/**
 *const x = 10;
 console.log(x.toString()) // applying toString() in primitive type number

 20.toString() //error 20 is literal
 (20).toString() // no error if wrap in parenthesis
 
 autoboxing in js article in dev and mdn
 */
