/**
 * Implement a set of dummy functions which can mimic the behavior of the following functions:
 * 1. download -> This function should mimic downloading of somecontent from a url
 * 2. writeFile -> This function should mimic writing of some content to a file
 * 3. upload -> This function should mimic uploading the file to a server
 *
 * Now after you've implemented these functions, try to use them in a scenario where we first
 * download a file, then write it to a disk and then upload it to a server.
 */

function download(url, callback) {
    console.log("downloading from ", url);
    setTimeout(() => {
        console.log("downloaded the data from ", url);
        let downloadedData = "some data";
        //what to do with the downloaded data will depend upon the callback function implementation
        callback?.(downloadedData);
    }, 2000);
}

// download("www.def.com", function handleDownload(data) {
//     console.log("data is downloaded",data);
// });

function writeFile(data, fileName, callback) {
    console.log("writing ", data, "to file ");
    setTimeout(() => {
        console.log("writing to file ", fileName, " is done");
        let status = "success";
        //what to do with the written file will depend upon the callback function implementation
        callback?.(status, fileName);
    }, 1000);
}

function upload(fileName, url, callback) {
    console.log("uploading file ", fileName, "to the ", url);
    setTimeout(() => {
        console.log("uploading the file is done");
        let uploadStatus = "success";
        //what to do after uploading the file will depend upon the callback implementation
        callback?.(uploadStatus);
    }, 3000);
}

function process() {
    download("www.abc.com", function handleDownload(data) {
        writeFile(data, "xyz.text", function handleWrite(status, fileName) {
            if (status === "success") {
                upload(
                    fileName,
                    "www.example.com",
                    function handleUpload(status) {
                        if (status === "success") {
                            console.log("all done");
                        }
                    }
                );
            }
        });
    });
}

process();
