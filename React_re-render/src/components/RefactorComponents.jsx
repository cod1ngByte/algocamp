import { useState } from "react";

export default function RefactorComponents({ children }) {
    const [x, setX] = useState(0);
    // console.log("refactor component called") will be log everytime it is re-render
    return (
        <>
            <button onClick={() => setX(x + 1)}>increment x</button>
            {children}
            {x}
        </>
    );
}
