import { useEffect, useRef, useState } from "react";

import "./App.css";
import Input from "./components/Input";

// function App() {
//     const [validEmail, setvalidEmail] = useState("");

//     function submitForm(e) {
//         e.preventDefault();
//         if (validEmail.includes("@")) {
//             //
//         } else {
//             console.log("please provide valid email");
//             document.getElementById("inputEmail").focus();
//             // ------------------------------------------------------------------
//             // better to use useRefs to access the dom directly
//             // ------------------------------------------------------------------
//         }
//     }

//     function handlechange(e) {
//         setvalidEmail(e.target.value);
//     }
//     return (
//         <>
//             <h1>react refs</h1>
//             <Input
//                 type={"text"}
//                 placeholder={"email..."}
//                 handleChange={handlechange}
//                 value={validEmail}
//                 id={"inputEmail"}
//             />
//             <br />
//             <Input type="password" placeholder={"password..."} />
//             <br />
//             <button onClick={submitForm}>Submit</button>
//         </>
//     );
// }
// ------------------------------------------------------------------------------------------
//re-render becoz of state doesn't effect ref value, ref value preserves between re-render, ref doesn't cause re-render
// function App() {
//     const customRef = useRef(0);
//     const [x, setX] = useState(0);
//     //-------------accessing element using ref
//     const inputRef = useRef(null);
//     //
//     function handleClick() {
//         // customRef.current = customRef.current + 1;
//         //-----------------accessing element using ref
//         //same as console.dir(document.getElmentByid('inputEmail'))
//         console.log(inputRef);
//         //
//         inputRef.current.focus();
//     }
//     useEffect(() => {
//         console.log("useEffect ", customRef);
//     }, [x]);
//     return (
//         <>
//             <h2>useRef</h2>
//             {/* -----------add ref property to element  */}
//             <input type="text" placeholder="email..." ref={inputRef} />
//             <br />
//             <input type="password" placeholder="password..." />
//             <br />
//             <button onClick={handleClick}>Click</button>
//             <br />
//             {x}
//             <button onClick={() => setX(x + 1)}>Submit</button>
//         </>
//     );
// }
//-----------------------------------------------------------------------------------------
// passing ref property to a component
//
function App() {
    const customRef = useRef(null);

    return (
        <>
            {/* <h2>react ref</h2>
            <Input type={"text"} placeholder={"email..."} ref={customRef} />
            <button onClick={() => console.log(customRef)}>
                Click
            </button> */}
            <h2>react ref</h2>
            <Input type={"text"} placeholder={"email..."} cref={customRef} />
            <br />
            <input type="password" placeholder="password..." />
            <br />
            <button onClick={() => customRef.current.focus()}>
                Focuse the email input
            </button>
        </>
    );
}
export default App;
