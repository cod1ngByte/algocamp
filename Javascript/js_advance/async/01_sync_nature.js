// all the native of js code are executed sequentially

console.log("start");

for (let i = 0; i < 1000000000; i++) {
    //
}
for (let i = 0; i < 10000; i++) {
    //
}

console.log("end");
