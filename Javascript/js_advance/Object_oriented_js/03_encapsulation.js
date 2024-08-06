class Product {
    #name; // private
    #price; // private
    description; // public
    rating; //public

    constructor(name, price, description, rating) {
        this.#name = name;
        this.#price = price;
        this.description = description;
        this.rating = rating;
    }

    displayProduct() {
        // console.log("product displayed : ", this); //private keys are not accessible
        console.log("product displayed ", this.#name, this.#price, this);
    }
}

const obj = new Product("Motorola", 1500, "motog15", 4);

//trying to access private data member outside the class

// obj.#name = 'apple'; //  syntax error : cannnot access private key outside the class
obj.name = "Samsung"; // new key called name is added with value as samsung. no changes in #name which is private and cannot be accessed outside class
obj.displayProduct();

//--------------------------------------------------------------------------------------------------------------------------
