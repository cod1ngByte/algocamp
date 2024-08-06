class Product {
    #name;
    #price;
    #description;

    // new way to write the setter and getter method using set and get keyword
    set name(n) {
        if (n.length === 0) {
            console.log("invalid name");
        } else {
            this.#name = n;
        }
    }
    get name() {
        return this.#name;
    }

    set price(p) {
        if (p > 0 && typeof p === "number") {
            this.#price = p;
        } else {
            console.log("invalid price");
        }
    }
    get price() {
        return this.#price;
    }
    set description(d) {
        if (d.length === 0) {
            console.log("invalid description");
        } else {
            this.#description = d;
        }
    }
    get description() {
        return this.#description;
    }
}

const m = new Product();
//we can set and get, in a way we used to get and set the properties of obj
//obj.key = value;  --> to set the value of key
//obj.key  ---> to get the value

m.name = "motorolo";
m.price = 15000;
m.description = "motog15";

console.log(m.name);
console.log(m.price);
console.log(m.description);
