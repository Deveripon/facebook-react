import { useState } from "react";
import ModalContext from "../Context/ModalContext";

const ModalContextProvider = ({ children }) => {
    const [modal, setModal] = useState(false);
    function openRegModal() {
        setModal(true);
    }
    function closeRegModal() {
        setModal(false);
    }
    return (
        <>
            <ModalContext.Provider
                value={{
                    modal,
                    setModal,
                    openRegModal,
                    closeRegModal,
                }}>
                {children}
            </ModalContext.Provider>
        </>
    );
};

export default ModalContextProvider;
