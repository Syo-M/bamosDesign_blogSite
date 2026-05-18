import drawerButtonImg from "@/assets/images/drawerButton.svg";
import styles from "./BamosDrawerButton.module.css";

// 親コンポーネントからpropsとしてuseStateのstate変数とstateセッタ関数を受け取る
export default function BamosDrawerButton({ open, isOpen }) {
    const handleClick = () => {
        isOpen(!open);
    };

    return (
        <>
            <button className={`${styles.drawerButton} ${open ? styles.open : ""}`} onClick={handleClick}>
                <span className={`${styles.drawerButtonCross} ${open ? styles.active : ""}`}>
                    <span className={styles.drawerButtonBar}></span>
                    <span className={styles.drawerButtonBar}></span>
                </span>
                
                <span className={`${styles.span} ${open ? styles.active : ""}`}>{open ? "CLOSE" : "MENU"}</span>
            </button>
        </>
    );
}
