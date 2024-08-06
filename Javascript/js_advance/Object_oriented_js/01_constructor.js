/*
class Product {
    name;
    price;
    company;
    description;
    review;
    //compile time error classes have different rule to define variable and function
    // let review;
    // const price;
    // var name;
    // function addToCart(){

    // }
    addToCart() {
        console.log("product added to cart");
    }
    removeFromCart() {
        console.log("product removed from cart");
    }
    displayProduct() {
        console.log("product displayed");
    }
*/

// const iphone = new Product();
// console.log(iphone);

/* output
default constructor is called therfore data members having undefined value
Product {
    name: undefined,
    price: undefined,
    company: undefined,
    description: undefined,
    review: undefined
    }
    */

// const iphone = new Product("iphone4", 1000, "apple", "abcdefgh", 4);
// console.log(iphone);
/* output
default constructor is called therfore data members having undefined value
Product {
    name: undefined,
    price: undefined,
    company: undefined,
    description: undefined,
    review: undefined
    }
    */

//----------------------------------------- now creating a custom constructor with parameter and passing argument
/*
class Product {
    name;
    price;
    company;
    description;
    review;
    constructor(name, price, company, description, review) {
        this.name = name;
        this.price = price;
        this.company = company;
        this.description = description;
        this.review = review;
    }
    addToCart() {
        console.log("product added to cart");
    }
    removeFromCart() {
        console.log("product removed from cart");
    }
    displayProduct() {
        console.log("product displayed");
    }
}
    
const iphone = new Product("iphone4", 1000, "apple", "abcdefgh", 4);
console.log(iphone);
*/
/**output
 * Product {
  name: 'iphone4',
  price: 1000,
  company: 'apple',
  description: 'abcdefgh',
  review: 4
}
 */
// ----------------------------------------------------------------------------------------------
/*
class Product {
    // name;
    // price;
    // company;
    // description;
    // review;
    //even if we don't define data members it will create data member since empty object is passed in this keyword and
    // it will create data members and assign the value from parameter
    constructor(name, price, company, description, review) {
        this.name = name;
        this.price = price;
        this.company = company;
        this.description = description;
        this.review = review;
    }
    addToCart() {
        console.log("product added to cart");
    }
    removeFromCart() {
        console.log("product removed from cart");
    }
    displayProduct() {
        console.log("product displayed");
    }
}
const iphone = new Product("iphone4", 1000, "apple", "abcdefgh", 4);
console.log(iphone);
// we cannot have more than one constructor in class or it will give syntax error
*/
// -------------------------------------------constructor is not a keyword in js
//
/**
 * variable name and function name cannot be a keyword like this,new
 *
 * const constructor = "rajiv";
 *  console.log(constructor);
 */

/*
    function constructor(x) {
    console.log("hello", x);
}
    constructor(10);
*/

/*
const obj = {
    constructor: 10,
    fun() {
        console.log(this); // pointing to obje that is call site
        console.log(this.constructor);
    },
};

console.log(obj.constructor);
constructor.fun();
*/

/*
const obj = {
    constructor() {
        console.log("hello");
    },
};

obj.constructor();
*/

// -------------------------------------------------can we change this keyword value ? no, syntax error left hand side assignment not possible

/*
class Product {
    name;
    price;
    constructor(name,price){
        this = {company : 'apple', rate : 4};
        this.name = name;
        this.price = price;
    }
}

const obj = new Product();
console.log(obj);
*/
//---------------how this is used as key??------------------------------
//becoz key can be of string type and any valid string type can be key
// therefore this,function or any keyword can be key but we should not use them as key
/*
class Product {
    name;
    this;
    constructor(name, num) {
        this.name = name;
        this.this = num;
    }
}

const obj = new Product("abc", 10);
console.log(obj);
console.log(obj.this) // 10
*/
/*-------------------------------this is keyword, have some specific meaning
const this = "rajiv";
console.log(this);
syntax error : this is reserved word cannot be used here

function this(){
    console.log(this);
}

syntax error : this is reserved word cannot be used here

//--------------------- we can use this keyword and function keyword as a key, no syntax error

const obj1 = {
    this: "abc",
    function() {
        console.log(this); // call site of this keyword in  function is obj1
    },
};

console.log(obj1)
console.log(obj1.this);
*/
//--------------keyword cannot be variable name or function name but can be key name inside class or obj becoz any valid key in obj or class can be of string type

/**
const obj = {
    new: 1,
};

console.log(obj.new);
 */
