//both async and await is keyword
//generator function is replaced by async and yield is replaced by await
//internally it is using generator and iterator only

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
          console.log("writing to file");
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

/*
async function exec() {
     console.log("start executing");
     const downloadedData = await download("www.abc.com");
     console.log("downloaded data is ", downloadedData);

     const fileResponse = await download(downloadedData, "file1.txt");
     console.log("file write status ", fileResponse);

     const uploadStatus = await upload("file1.txt", "www.xyz.com");
     console.log("upload status ", uploadStatus);

     return uploadStatus;
}
*/
async function exec() {
     try {
          console.log("start executing");
          const downloadedData = await download("www.abc.com");
          console.log("downloaded data is ", downloadedData);

          const fileResponse = await download(downloadedData, "file1.txt");
          console.log("file write status ", fileResponse);

          const uploadStatus = await upload("file1.txt", "www.xyz.com");
          console.log("upload status ", uploadStatus);

          return uploadStatus;
     } catch (e) {
          console.log("something went wrong ", e);
     }
}

const pr = exec();
pr.then(function f() {
     console.log("execution of exec() is done");
});
