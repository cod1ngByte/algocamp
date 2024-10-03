import { useState } from "react";
import "./App.css";
import SlowComponent from "./components/SlowComponent";
import Modal from "./components/Modal/Modal";
import ButtonWithModal from "./components/ButtonWithModal/ButtonWithModal";
import useModalDialog from "./hooks/useModalDialog";
import RefactorComponents from "./components/RefactorComponents";

//---->if parent comp re-render then all its child comp also re-render
//parent comp re-render becoz of state define in it or state getting changed in parent comp
//i just want to re-render the modal but slowcomp is also getting re-render so re-structure the component

/*
function App() {
    const [isOpen, setIsOpen] = useState(false);
    const handleBtn = () => {
        setIsOpen(true);
    };
    return (
        <>
            <h1>React re-render</h1>
            <button onClick={handleBtn}>Open Modal</button>

            <p>something done here</p>
            {isOpen && <Modal setIsOpen={setIsOpen} />}
            <p>something done here too</p>
            <SlowComponent />
        </>
    );
}
*/
//-------------------------------------------------------------------------------------------------------

//---> if child comp re-render its parent comp doesn't re-render but child comp grand child will re-render
//structure the comp

// function App() {
//     return (
//         <>
//             <h1>React re-render</h1>

//             <p>something done here</p>
//             <ButtonWithModal />
//             {/* here buttonwithmodal comp having state variable and its child is using it, so re-render of        buttonwithmodal
//             will happen and its child not is parent which is app comp so slowcomp will not re-render*/}
//             <p>something done here too</p>
//             <SlowComponent />
//         </>
//     );
// }
//-------------------------------------------------------------------------------------------------------------

//------->custom hooks
/*
function App() {
    //custom hooks but this is also defining in app comp so app comp and all its child will re-render
    //same prob as starting prob

    const { isOpen, open, close } = useModalDialog();
    return (
        <>
            <h1>React re-render</h1>
            <button onClick={open}>Open Modal</button>
            <p>something done here</p>
            {isOpen && <Modal close={close} />}
            <p>something done here</p>
            <SlowComponent />
        </>
    );
}
*/
// --------------------------------------------------------------------------------------------------------
//---->custom hooks in modalwithbutton component
// no app re-render only modalwithbutton comp and its child will re-render
/*
function App() {
    return (
        <>
            <h1>React re-render</h1>

            <p>something done here</p>
            <ButtonWithModal />
            <p>something done here too</p>
            <SlowComponent />
        </>
    );
}
*/

//--------------------------------------------------------------------------------------------------------
//--->what if state variable is present in app component and we cannot place it somewhere else
// now what to do so only specific comp is only re-render not the whole app comp and its child
//using children prop : we cann pass jsx as children prop in any component
function App() {
    return (
        <>
            <h1>React re-render</h1>
            <RefactorComponents>
                <>
                    <p>something done here</p>
                    <ButtonWithModal />
                    <p>something done here too</p>
                    <SlowComponent />
                </>
            </RefactorComponents>
        </>
    );
}
export default App;
