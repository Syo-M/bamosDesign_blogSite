import styles from "./Footer.module.css";
import BamosLogo from "../../_commons/BamosLogo/BamosLogo";

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <BamosLogo type="accent" />
        </footer>
    );
}
