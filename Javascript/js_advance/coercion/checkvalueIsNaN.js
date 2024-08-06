function customisNaN(val) {
    if (val !== val) {
        //NaN !== NaN will return true, any other value will return false;
        console.log(`val : ${val} is NaN`);
    } else {
        console.log("not NaN");
    }
}
// NaN === NaN will be false
// the only value that is not equals to itself
customisNaN(null);
customisNaN(undefined);
customisNaN(+0);
customisNaN(-0);
customisNaN(NaN);
customisNaN(2);
customisNaN("rajiv");
customisNaN("");
customisNaN(true);
customisNaN({});
