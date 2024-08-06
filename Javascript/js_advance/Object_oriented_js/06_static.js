class Product {
    static x = 10;
    static #y = 20; // we can make static varaible private but generally we don't make static variable private becoz it will be only accessible within class only
    constructor(name, price) {
        this.name = name;
        this.price = price;
        console.log(Product.x); // if we want to access static variable it must be accessed using only ClassName inside any Member Function in class
        console.log(Product.#y);
    }
}
// static member is created when the class is loaded ie. static members are created before object creation
console.log(Product.x);
Product.x = 20;
const p = new Product("moto", 15);
console.log(p.x); // undefined since no x key is present in p object
//to access static variable we need to write  className.staticVariable
//static variable inside class is associated with ClassName
console.log(Product.x);

//sometime we need some value before object creation so we use static keyword
//one of the use cases of static is builder object
