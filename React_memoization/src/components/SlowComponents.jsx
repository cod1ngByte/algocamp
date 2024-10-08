const waitingForSomething = function (time) {
    const start = Date.now();
    let now = start;
    while (now - start < time) {
        now = Date.now();
    }
};

function SlowComponent({ time, callback, val }) {
    // console.log(time);
    callback();
    waitingForSomething(time[0]);
    console.log(val);
    return (
        <>
            <h3>hello I am slow Component </h3>
            <p>{val}</p>
        </>
    );
}

export default SlowComponent;
