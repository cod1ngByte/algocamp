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

// function CustomPromise(executerCallback) {
//     this.state = "pending";
//     this.value;
//     this.resolve = function (val) {
//         console.log(this); // call site is window
//         this.state = "fullfilled";
//         this.value = val;
//     };
//     this.reject = (val) => {
//         console.log(this);
//         //scope resolved lexically and poiting to newly created object, how?
//         this.state = "rejected";
//         this.value = val;
//     };
//     executerCallback(this.resolve, this.reject);
// }

// const p = new CustomPromise(function exec(res, rej) {
//     // console.log(this); window
//     res(10);
// });

// // function fun() {
// //     console.log("inside the fun function");
// //     console.log(this);
// // }
// // fun();

function download(url) {
    return new Promise((res, rej) => {
        console.log("starting downloading data");
        setTimeout(() => {
            let downloadedData = "some data from " + url;
            console.log("downloaded data from url ", url);
            res(downloadedData);
        }, 5000);
    });
}

function writeFile(data, fileName) {
    return new Promise((res, rej) => {
        console.log("writing ", data, "to  file");
        setTimeout(() => {
            console.log("writing ", data, "to ", fileName, " is done");
            let status = "success";
            res(status);
        }, 2000);
    });
}

function upload(fileName, url) {
    return new Promise((res, rej) => {
        console.log("uploading file to url");
        setTimeout(() => {
            console.log("uploading is done");
            let uploadStatus = "success";
            res(uploadStatus);
        }, 3000);
    });
}

download("www.abc.com")
    .then(function f(value) {
        console.log("downloaded data ", value);
        return writeFile(value, "file1.txt");
    })
    .then(function g(value) {
        console.log("file written ", value);
        return upload(value, "www.xyz.com");
    })
    .then(function h(value) {
        console.log("file uploaded ", value);
    });
