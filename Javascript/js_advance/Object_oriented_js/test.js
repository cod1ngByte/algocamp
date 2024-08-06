function Product(n, c) {
    this.name = n;
    this.company = c;
}
Product.prototype.displayProduct = function () {
    console.log("present in unanamed object");
};

const p = new Product("mg14", "motorola");
