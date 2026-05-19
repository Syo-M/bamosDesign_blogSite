import { useState } from "react";
import BamosDrawerButton from "../_drawerMenu/BamosDrawerButton/BamosDrawerButton";
import BamosDrawerMenu from "../_drawerMenu/BamosDrawerMenu/BamosDrawerMenu";
import BamosLogo from "../../_commons/BamosLogo/BamosLogo";
import styles from "./Navigation.module.css";

export default function Navigation() {
    // useStateでドロワーメニューの開閉状態を管理。子コンポーネントにpropsとして渡し、
    // 子コンポーネント内で状態を変更できるようにする。
    const [open, isOpen] = useState(false);
    return (
        <>
            <div className={styles.navigation}>
                <div className={`${styles.navigation_container} ${open ? styles.open : ""}`}>
                    <div className={styles.navigation_box}>
                        {open ? <BamosLogo type="white" /> : <BamosLogo type="black" />}

                    </div>
                    <BamosDrawerMenu open={open} />
                </div>
            </div>
            <BamosDrawerButton open={open} isOpen={isOpen} />
        </>
    );
}
