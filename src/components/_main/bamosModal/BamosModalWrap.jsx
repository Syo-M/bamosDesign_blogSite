import { useState } from "react";
import BamosButton from "../../_commons/BamosButton/BamosButton";
import BamosModalWindow from "./BamosModalWindow";

export default function BamosModalWrap() {
    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <div className="modalWrapper">
                <BamosButton onClick={openModal} label="Feedback" />

                {isOpen && <BamosModalWindow setIsOpen={setIsOpen} />}
            </div>
        </>
    );
}
