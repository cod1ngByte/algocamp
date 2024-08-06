function customPoszeroNegzero(val) {
    if (1 / val === Infinity) {
        return 0;
    } else if (1 / val === -Infinity) {
        return -0;
    }
}

console.log(customPoszeroNegzero(0));
console.log(customPoszeroNegzero(-0));
