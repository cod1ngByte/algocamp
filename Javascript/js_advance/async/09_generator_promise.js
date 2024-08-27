/*

function* exec() {
     yield new Promise((res, rej) => {
          res(10);
     });
}

const it = exec(); // it will return a new generator object , it will not execute the exec() function
const ft = it.next();
console.log(ft); //return {value: Promise, done: false}
const ft1 = it.next();
console.log(ft1) // return {value : undefined, done : true}
*/

function download(url) {
     return new Promise((res, rej) => {
          console.log("starting downloading data");
          setTimeout(() => {
               let downloadedData = "some data from " + url;
               console.log("downloaded data from url : ", downloadedData);
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

function* exec() {
     console.log("starting execution");
     const downloadedData = yield download("www.xyz.com"); //return a new promise --> yield promise
     //2nd time it.next(val) is called the yield download('www.xyz.com') is replaced by val which will be stored in
     // downloadedData = val

     console.log("downloaded data is ", downloadedData);

     const writeStatus = yield writeFile(downloadedData, "file1.txt"); //return a new promise --> yield promise
     console.log("file write status ", writeStatus);

     const uploadStatus = yield upload("file1.text", "wwww.abc.com"); //return a new promise --> yield promise
     console.log("upload status ", uploadStatus);

     return uploadStatus;
}

const it = exec(); // exec() will return an generator object having an iterator
//function exec() is not execute when we call
//execution of exec will only start when we call next() in generator object
//it.next() --> {value : yield val , done : false/true}

const ft = it.next();
console.log(ft); // return {value: Promise, done: false}
ft.value.then(function doAfterReceiving(val) {
     console.log("calling doAfterReceiving ", val);
     const ft1 = it.next(val); // resume from the last yield and replace it with pass val and execute till next yield
     console.log(ft1);
     if (ft1.done) return;
     ft1.value.then(doAfterReceiving); //calling recursively
});
