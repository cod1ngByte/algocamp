//this component is slow to render

const waitingForSomething = (ms) => {
    const start = Date.now();
    //Date.now() return the time in milliseconds since jan 1,1970
    let now = start;
    while (now - start < ms) {
        now = Date.now();
    }
};

export default function SlowComponent() {
    waitingForSomething(1000);
    return <h3>hello i m slow component </h3>;
}
