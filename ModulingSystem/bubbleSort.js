function swap(arr, i, j) {
     let temp = arr[i];
     arr[i] = arr[j];
     arr[j] = temp;
}

function bubbleSort(arr) {
     const n = arr.length;
     for (let i = 0; i < n; i++) {
          for (let j = 0; j < n - i - 1; j++) {
               if (arr[j] > arr[j + 1]) {
                    swap(arr, j, j + 1);
               }
          }
     }
     return arr;
}

//1. default export
// export default bubbleSort;
// we can not export more than one default export
// we can export anything even variable
// we can export anonymous function too

// export default function (arr){
//      const n = arr.length;
//      for (let i = 0; i < n; i++) {
//           for (let j = 0; j < n - i - 1; j++) {
//                if (arr[j] > arr[j + 1]) {
//                     swap(arr, j, j + 1);
//                }
//           }
//      }
//      return arr;
// }

//2.named export
