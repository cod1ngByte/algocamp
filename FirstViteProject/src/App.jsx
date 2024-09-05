import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Button from "./button.jsx";

function App() {
     return (
          <div>
               Hello world
               <Button />
               <Button />
               <Button />
          </div>
     );
}

// keeping component to diff file
// function Button() {
//      return <button>Click Me</button>;
// }

//------>react component must start with uppercase
// function button(){
//   return <button>click me</button>
// }

export default App;
