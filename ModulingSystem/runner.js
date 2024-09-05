//----->default export

// import bubbleSort from "./sorting.js";
// or we can change the name of default export at the time of import
import bs from "./bubbleSort.js";

//------>named exports

// import { linearSearch, binarySearch, ternarySearch } from "./searching.js";
//changing the name
// import { linearSearch as ls , binarySearch as bs , ternarySearch as ts } from "./searching.js";
//destructuring object

// ------->in single statement both named export and defualt export

import myFunction, {
     linearSearch,
     binarySearch,
     ternarySearch,
} from "./searching.js";

const arr = [1, 5, 29, 3, -1];

// console.log(bubbleSort(arr));
console.log(bs(arr));
