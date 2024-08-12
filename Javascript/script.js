let m = 0;
let mm = 0;
let hh = 0;
let h = 0;
const id = setInterval(function () {
    // console.log(count);

    console.log(hh, mm);
    m++;
    if (m == 7) {
        h++;
        hh = h;
        m = 0;
    }
    mm = m;
    if (hh == 3) {
        m = 0;
        h = 0;
        mm = m;
        hh = h;
        console.log(hh, mm);
        clearInterval(id);
    }
}, 1000);
