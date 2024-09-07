// 1.internally js create two entities: 1> Object which is a  function 2> unanmed entity which is an js object
// 2.this unnamed object is having all the method defination like toString(), valueOf(), hasOwnProperty() and many more, we can
// see this method in dev tools --> Object.prototype
// 3.Object which is a function,so how we can access using dot prototype becoz internally Object is also non-primitive type in js
// 4.there is a special method in unnamed object called constructor, which will point to Object function only when we try the
// code
// Object.prototype.constructor --> it will point to Object function only check in dev tools
// Object === Object.prototype.constructor --> true
// Object === Object.prototype.toString --> false

class Product {
     constructor(n, c) {
          this.name = n;
          this.company = c;
     }
     displayProduct() {
          console.log("present in unnamed object");
     }
}

const p = new Product("mg14", "motorolla");
console.log(p); // in dev tools
/**
 * key value present in plain object
 * Product {name: 'mg15', company: 'motorola'} which is present in plain object
    p.__proto__ / Product.prototype
        constructor(): class product 
        ƒ displayProduct()
    
 */

class Product1 {
     constructor(n, c) {
          this.name = n;
          this.company = c;
          this.displayProduct = function () {
               console.log("inside constructor display function");
          };
     }
     displayProduct() {
          console.log("present in unanmed object");
     }
}

const p1 = new Product1("iphone14", "iphone");
console.log(p1);
// Product1 {name: 'iphone14', company: 'iphone', displayProduct: ƒ}
//__proto__ : constructor() : class Product1, f displayProduct()

console.log(p1.displayProduct()); //inside constructor display function
console.log(p1.__proto__displayProduct()); //present in unanmed object
console.log(Product.prototype.displayProduct()); //present in unanmed object
//---------------------------------------------------------------------------------------------
class Product2 {
     constructor(n) {
          this.name = n;
     }
     display() {
          console.log(this);
     }
}

const p3 = new Product2("samsung");
console.log(p3.display()); // call site  : p3 object
console.log(Product2.prototype.display()); // call site  : prototype object which is an unnamed object
console.log(Product2.prototype);
console.log(p3.__proto__.display()); // call site : __proto__ which is an unnamed object
console.log(p3.__proto__);
console.log(p3.__proto__.__proto__); // it will point to Object unnamed entity object
//-----------------------------------------------------------------------------------------------------
function Product4(n) {
     this.name = n;
     this.display = function () {
          // inside plain object not in protoype object
          console.log(this);
     };
}

const p4 = new Product4("iphone");
//we can check by calling Product4.protoype
//display() is in plain object

//adding function in prototype
Product4.prototype.displayProduct = function () {
     console.log("hello");
};
//this method which is added in prototype manually is added in class syntax automatically

//----------------------------------------------------------------------------------------------------
// in js we can modify the function after class creation which is not possible in c++/java

function Product5(n) {
     this.name = n;
}
const p5 = new Product5("samsung");
Product5.prototype.display = function () {
     console.log(this.name);
};

p5.display(); //samsung

Product5.prototype.display = function () {
     console.log("modified  display function", this.name);
};

p5.display();
//------------------------------------------------------------------------------------
