// const p1 = new Promise((res, rej) => {
//     setTimeout(() => {
//         console.log("timer of p1 is done");
//         res(9); //promise resolved
//     }, 5000);
// });

// const p2 = p1.then(
//     function f() {
//         //f is executed when p1 is res()
//         console.log("f is executed");
//         throw 99;
//     },

// );

//-----------------------------------------------------------------------------
// const p1 = new Promise((res, rej) => {
//     setTimeout(() => {
//         console.log("timer of p1 is done");
//         rej(9); //promise rejected
//     }, 5000);
// });

// const p2 = p1.then(
//     function f() {
//         //f is executed when p1 is res()
//         console.log("f is executed");
//         throw 99;
//     },
//     function g() {
//         //g is executed when p1 is rej()
//         console.log("g is executed");
//         throw 88;
//     }
// );

//using promise syntax simulate first download --> then write --> then upload

/**
 * 
 *function download(url, callback) {
    console.log("downloading from ", url);
    setTimeout(() => {
        console.log("downloaded the data from ", url);
        let downloadedData = "some data";
        //what to do with the downloaded data will depend upon the callback function implementation
        callback?.(downloadedData);
    }, 2000);
}

download("www.abc.com", function handleDownload(value) {
    console.log("data is downloaded",value);
});
 */
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

//--this is parallel execution

// download("www.abc.com").then(function f(value) {
//     console.log("downloaded data is ", value);
// });

// writeFile("some content", "file1.text").then(function f(value) {
//     console.log("write status is ", value);
// });

// upload("file2.text", "www.xyz.conm").then(function f(value) {
//     console.log("upload status is ", value);
// });

//sequential execution

const p2 = download("www.abc.com").then(function f(value) {
    //f param value = res(val)
    console.log("downloaded data is ", value);
    return value;
    //jab f function execute karke value return hoga to p2 resolved ho jaega
});

p2.then(function g(value) {
    // g param value =  p2.value
    writeFile(value, "file1.text");
});
