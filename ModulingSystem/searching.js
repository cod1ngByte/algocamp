export function linearSearch(arr, targetEle) {
     for (let i = 0; i < arr.length; i++) {
          if (arr[i] == targetEle) {
               return i;
          }
     }
     return -1;
}

export function binarySearch(arr, target) {
     let left = 0;
     let right = arr.length - 1;

     while (left <= right) {
          let mid = Math.floor((left + right) / 2);

          if (arr[mid] === target) {
               return mid; // Target found, return its index
          } else if (arr[mid] < target) {
               left = mid + 1; // Continue searching in the right half
          } else {
               right = mid - 1; // Continue searching in the left half
          }
     }

     return -1; // Target not found
}

export function ternarySearch(arr, targetEle) {
     //some logic
}

export default function myFunction() {
     //
     console.log("my function");
}
//need to export all these function : we can use named export prepend with export
//can we export both name and default export ? yes

//named export :
// export {linearSearch,binarySearch,ternarySearch}
