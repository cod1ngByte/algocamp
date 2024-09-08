// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import Button from "./components/Button/Button.jsx";

function App() {
     return (
          <div>
               {/* Hello world */}
               <p>
                    <Button
                         text="click 1"
                         onClick={() => {
                              console.log("clicked 1");
                         }}
                         btnType="primary"
                    />
               </p>
               <p>
                    <Button
                         text="click 2"
                         onClick={() => {
                              console.log("clicked 2");
                         }}
                         btnType="secondary"
                    />
               </p>
               <p>
                    <Button
                         text="click 3"
                         onClick={() => {
                              console.log("clicked 3");
                         }}
                         btnType="red"
                    />
               </p>
          </div>
     );
}

// keeping component in diff file
// function Button() {
//      return <button>Click Me</button>;
// }

//------>react component must start with uppercase
// function button(){
//   return <button>click me</button>
// }

export default App;
