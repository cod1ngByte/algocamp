const waitingForSomething = function (time) {
    const start = Date.now();
    let now = start;
    while (now - start < time) {
        now = Date.now();
    }
};

function AnotherSlowComponents({ children }) {
    waitingForSomething(1000);
    return (
        <>
            <h3>hello I am another slow Component </h3>
            {children}
        </>
    );
}

export default AnotherSlowComponents;
