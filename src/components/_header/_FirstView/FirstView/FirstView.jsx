import styles from "./FirstView.module.css";
export default function FirstView({ children }) {
    return (
        <>
            <div className={styles.firstViewWrap}>{children}</div>
        </>
    );
}
