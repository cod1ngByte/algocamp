// var curStud = "rajiv";
// console.log(bestFrnd);
// function fun() {
//     var currStudLocal = "ranjan";
//     bestFrnd = "prakash";
//     console.log(currStudLocal, bestFrnd);
// }

debugger;
const product = {
    name: "iphone14",
    price: 12300,
    fun: function () {
        console.log(this.price);
        console.log("hello", this);
    },
    specification: {
        storage: "128gb",
        camera: "12mp",
        display: () => {
            // console.log(storage);s
            console.log(this);
        },
        // display();
    },
};

// product.fun();
product.specification.display();
// debugger;
// function fun() {
//     const a = 10;
//     {
//         const b = 20;
//         console.log(b);
//     }
// }

// fun();
