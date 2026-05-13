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
                <img src={drawerButtonImg} alt="ドロワーボタン" className={open ? styles.active : ""} />
                <span>{open ? "CLOSE" : "MENU"}</span>
            </button>
        </>
    );
}
