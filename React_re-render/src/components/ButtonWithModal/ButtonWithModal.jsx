import { useState } from "react";
import Modal from "../Modal/Modal";
import useModalDialog from "../../hooks/useModalDialog";

/*
export default function ButtonWithModal() {
    const [isOpen, setIsOpen] = useState(false); 

    return (
        <>
            <button onClick={() => setIsOpen(true)}>Open Modal</button>
            {isOpen && <Modal setIsOpen={setIsOpen} />}
        </>
    );
}
*/

//using custom hooks and passing state as props

export default function ButtonWithModal() {
    const { isOpen, open, close } = useModalDialog();
    return (
        <>
            <button onClick={() => open()}>Open Modal</button>
            {isOpen && <Modal close={close} />}
        </>
    );
}
