class Product {
    constructor(builder) {
        //here builder is an object
        this.name = builder.name;
        //validation at the time of creating object
        if (builder.price > 0 && typeof builder.price === "number") {
            this.price = builder.price;
        } else {
            return {};
        }
        this.description = builder.description;
        this.rating = builder.rating;
    }
}
//passing object as a argm for the constructor
const p = new Product({
    name: "moto",
    price: 15000,
    description: "motog15",
    rating: 4.5,
});

console.log(p);

const p1 = new Product({
    name: "moto",
    price: -15000,
    description: "motog15",
    rating: 4.5,
});
console.log(p1);

//solution :
/**
 * 1. we don't need to remember the constructor parameter ,becoz we are passing object
 * 2. we are validating at the time of object creation, no need to validate for getter and setter method
 */
