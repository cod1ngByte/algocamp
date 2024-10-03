/*
function Modal({ setIsOpen }) {
    return (
        <>
            <div>
                <h4>Modal start </h4>
                <p>this is a modal</p>
                <h4>Modal end</h4>
                <button onClick={() => setIsOpen(false)}>Close Modal</button>
            </div>
        </>
    );
}
*/

//using custom hooks
function Modal({ close }) {
    return (
        <>
            <div>
                <h4>Modal start </h4>
                <p>this is a modal</p>
                <h4>Modal end</h4>
                <button onClick={() => close()}>Close Modal</button>
            </div>
        </>
    );
}
export default Modal;
