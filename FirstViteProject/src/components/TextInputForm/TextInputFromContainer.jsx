import { useState } from "react";
import TextInputForm from "./TextInputForm.jsx";

function TextInputFormContainer() {
     const [inputType, setInputType] = useState("text");
     //this are not normal variable these are state variable which is basically non-primitive type where we store address not directly value
     function handleChange(e) {
          console.log(e.target.value);
     }
     function handleShowHide(e) {
          console.log("show/hide button clicked");
          if (inputType === "text") {
               setInputType("password");
          } else if (inputType === "password") {
               setInputType("text");
          }
     }
     function handleSubmit(e) {
          e.preventDefault();
          console.log("submit button clicked");
     }

     return (
          <TextInputForm
               handleChange={handleChange}
               handleShowHide={handleShowHide}
               handleSubmit={handleSubmit}
               inputType={inputType}
          />
     );
}

export default TextInputFormContainer;
