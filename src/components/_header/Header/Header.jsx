import FirstView from "../_FirstView/FirstView/FirstView";
import FirstViewImg from "../_FirstView/FirstViewImg/FirstViewImg";
import FirstViewTitle from "../_FirstView/FirstViewTitle/FirstViewTitle";
import Navigation from "../Navigation/Navigation";
import styles from "./Header.module.css";

export default function Header() {
    return (
        <header className={styles.header}>
            <Navigation />
            <FirstView>
                <FirstViewImg />
                <FirstViewTitle />
            </FirstView>
        </header>
    );
}
