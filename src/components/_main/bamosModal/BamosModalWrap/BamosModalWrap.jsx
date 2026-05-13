import { useState } from "react";
import BamosButton from "../../../_commons/BamosButton/BamosButton";
import BamosModalWindow from "../BamosModalWindow/BamosModalWindow";
import styles from "./BamosModalWrap.module.css";

export default function BamosModalWrap() {
    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <div className={styles.modalWrapper}>
                <BamosButton onClick={openModal} label="Feedback" />

                {isOpen && <BamosModalWindow setIsOpen={setIsOpen} />}
            </div>
        </>
    );
}
