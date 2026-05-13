import firstViewImg from "@/assets/images/bamosFirstView.jpg";
import styles from "./FirstViewImg.module.css";

export default function FirstViewImg() {
    return <img className={styles.firstViewImg} src={firstViewImg} alt="ファーストビュー画像" />;
}
