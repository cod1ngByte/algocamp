function Modal({ setisOpen }) {
    return (
        <>
            <h2>Modal begin</h2>
            <button
                onClick={() => {
                    setisOpen(false);
                }}
            >
                Close Modal
            </button>
            <h2>Modal end</h2>
        </>
    );
}

export default Modal;
