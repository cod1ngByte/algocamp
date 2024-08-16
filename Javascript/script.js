// let m = 0;
// let mm = 0;
// let hh = 0;
// let h = 0;
// const id = setInterval(function () {
//     // console.log(count);

//     console.log(hh, mm);
//     m++;
//     if (m == 7) {
//         h++;
//         hh = h;
//         m = 0;
//     }
//     mm = m;
//     if (hh == 3) {
//         m = 0;
//         h = 0;
//         mm = m;
//         hh = h;
//         console.log(hh, mm);
//         clearInterval(id);
//     }
// }, 1000);

// const f = function () {
//     console.log("file getting downloaded");
//     setTimeout(() => {
//         console.log("file downloaded");
//         // console.log('')
//         setTimeout(() => {
//             console.log("file updated");
//             setTimeout(() => {
//                 console.log("file uploaded");
//             }, 3000);
//         }, 2000);
//     }, 1000);
// };

// class CustomPromise {
//     constructor(executerCallback) {
//         this.state = "pending";
//         this.value;

//         this.resolve = function (val) {
//             console.log(this);
//             // this.state = "fullfilled";
//             // this.value = val;
//         };
//         this.reject = (val) => {
//             this.state = "rejected";
//             this.value = val;
//         };
//         executerCallback(this.resolve, this.reject);
//     }
// }

// const pr = new CustomPromise(function exec(res, rej) {
//     //

//     res(10);
// });

function CustomPromise(executerCallback) {
    this.state = "pending";
    this.value;
    this.resolve = function (val) {
        console.log(this); // call site is window
        this.state = "fullfilled";
        this.value = val;
    };
    this.reject = (val) => {
        console.log(this);
        //scope resolved lexically and poiting to newly created object, how?
        this.state = "rejected";
        this.value = val;
    };
    executerCallback(this.resolve, this.reject);
}

const p = new CustomPromise(function exec(res, rej) {
    // console.log(this); window
    res(10);
});

// function fun() {
//     console.log("inside the fun function");
//     console.log(this);
// }
// fun();
