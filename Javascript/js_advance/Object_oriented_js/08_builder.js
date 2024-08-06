class Product {
    #name;
    #price;
    #description;
    #review;
    constructor(builder) {
        //builder object is constructor parameter

        // console.log(builder);

        // validation at the time of object creation
        this.#name = builder.name;
        if (builder.price > 0 && typeof builder.price === "number") {
            this.#price = builder.price;
        } else {
            return {};
        }
        this.#description = builder.description;
        this.#review = builder.review;
        console.log(builder);
    }
    displayProduct() {
        console.log(this.#name, this.#price, this.#description, this.#review);
    }

    //creating a getter method as static, why taki is method ko call karenge to object banake nai call karna pare bina object banaye call kare using ClassName
    static get Builder() {
        class Builder {
            constructor() {
                //default values
                this.name = "";
                this.price = 0;
                this.description = "";
                this.review = 0;
            }
            setPrice(p) {
                this.price = p;
                return this;
            }
            setName(n) {
                this.name = n;
                return this;
            }
            setDescription(d) {
                this.description = d;
                return this;
            }
            setReview(r) {
                this.review = r;
                return this;
            }
            build() {
                return new Product(this);
            }
        }
        return Builder;
    }
}
//calling static getter method --> Product.Builder, it will create a class Builder and return the class Builder
// console.log(Product.Builder);
//par mujhe Builder class ka object create karna hai ar us object ko product constructor mai pass karna hai
// console.log(new Product.Builder());

// const b = new Product.Builder();
// console.log(b);
// console.log(b.setName("motorola"));
// console.log(b.setPrice(1050));
// console.log(b.setDescription("motog15"));
// console.log(b.setReview(4));
// console.log(b);

const p = new Product.Builder()
    .setName("motorola")
    .setPrice(1500)
    .setDescription("motog15")
    .setReview(4)
    .build();

p.displayProduct();
