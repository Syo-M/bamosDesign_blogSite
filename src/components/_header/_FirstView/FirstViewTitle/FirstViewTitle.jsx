import BamosLogo from "../../../_commons/BamosLogo/BamosLogo";
import styles from "./FirstViewTitle.module.css";

export default function FirstViewTitle() {
    return (
        <div className={styles.firstViewTitle}>
            <BamosLogo type="white" />
        </div>
    );
}
