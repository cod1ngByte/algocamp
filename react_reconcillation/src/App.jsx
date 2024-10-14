import React, { useState } from "react";
import "./App.css";
import Input from "./components/Input";

function App() {
    const [isStudent, setisStudent] = useState(false);

    //-------->type of html elements
    // console.log(React.createElement("div", null, "hello world"));
    //type of normal html element is of string type, check in dev tools type property--> type : "div"

    //------>type of react element or jsx element
    // console.log(React.createElement(Input, null, "hello world"));
    //type is of function which is an object

    return (
        <>
            <h1>Reconcillationn</h1>
            <form>
                <div>
                    <Input type={"text"} placeholder={"enter your name"} />
                </div>
                <div>
                    <input
                        type="checkbox"
                        id="student"
                        onChange={() => setisStudent(!isStudent)}
                        name="student"
                        value={isStudent}
                    />
                    <label htmlFor="student">Are you a Student?</label>
                </div>

                {/* working fine, what if we use two input element ?? */}
                {/* <div>
                    {isStudent ? (
                        <Input
                            type="text"
                            placeholder={"enter your school name"}
                        />
                    ) : (
                        <div>continue as a non student</div>
                    )}
                </div> */}
                {/* ------------------------------------------------------------------------------------------- */}
                {/* now when i type something and then unchecked the checkbox or checked the check box, input type is not changing even if it is re-rendering becoz re-rendering doesn't means it unmounted and re-mounted in dom, re-rendering happens in vdom */}
                {/* <div>
                    {isStudent ? (
                        <Input
                            type="text"
                            placeholder={"enter your school name"}
                        />
                    ) : (
                        <Input
                            type={"text"}
                            placeholder={"enter your company name"}
                        />
                    )}
                </div> */}
                {/* --------------------------------------------------------------------------------------------- */}
                {/* do mounting/unmounting manually */}
                {/* <div>
                    {isStudent ? (
                        <Input
                            type="text"
                            placeholder={"enter your school name"}
                        />
                    ) : null}
                </div>
                <div>
                    {!isStudent ? (
                        <Input
                            type={"text"}
                            placeholder={"enter your company name"}
                        />
                    ) : null}
                </div> */}
                {/* --------------------------------------------------------------------------------------------------- */}
                {/* using key props which doesn't stop re-render but if key props are diff then unmount/mounting happens */}
                <div>
                    {isStudent ? (
                        <Input
                            type="text"
                            placeholder={"enter your school name"}
                            key={"school"}
                        />
                    ) : (
                        <Input
                            type={"text"}
                            placeholder={"enter your company name"}
                            key={"company"}
                        />
                    )}
                </div>
            </form>
        </>
    );
}

export default App;
