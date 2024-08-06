function Product(n, p, d) {
    this.name = n;
    this.price = p;
    this.description = d;

    // function displayProduct(){ // this function is not available to this object
    //     console.log(this);
    // }

    this.displayProduct = function () {
        console.log("display product: ");
        console.log(this);
    };
}

const p = new Product("motorola", 15000, "motog15");
//new keyword : 4 step : 1> empty object 2> pass empty object to Product function 3> prototyping 4>return object as this
// same like constructor new keyword

// p.displayProduct();

//there is no private data memeber features avialable in constructor function
// console.log(p);
p.displayProduct();

const p1 = new Product("Apple", 150000, "macbook air");
p1.displayProduct();

//-----------------------------------------------

// function Product(n, p, d) {
//     this.name = n;
//     this.price = p;
//     this.description = d;
//     this.displayProduct = () => {
//         console.log("display product");
//         console.log(this);
//     };
// }

// const p = new Product("mg15", 1344, "motorola");

//displayProduct() is arrow function but then also it works fine

//--------------------------------------------------------------------------------------------------------
// what if we use arrow function as a function constructor?

const Product1 = (n, p, d) => {
    this.name = n;
    this.price = p;
    this.description = d;
    this.displayProduct = function () {
        console.log(this);
    };
};

// syntax error : Product1 is not a constructor
const iphone = new Product1("apple", 20000, "iphone14");

//------------------------------------------------------------------------------------------------------------
// calling function constructor without a new keyword
function Product2(n, p) {
    this.name = n;
    this.price = p;
    this.displayProduct = function () {
        console.log(this);
    };
    return this;
}

const m = Product2("iphone14", 20);
// no new keyword, so function behave normal function only so, we have to return manually this and this will be pointing to globle which window object
console.log(m);
