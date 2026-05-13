import navList from "../navList";
import styles from "./BamosDrawerMenu.module.css";

// 親コンポーネントからpropsとしてuseStateのstate変数を受け取る
export default function BamosDrawerMenu({ open }) {
    return (
        <nav className={open ? styles.drawerMenu + " " + styles.open : styles.drawerMenu}>
            <ul>
                {navList.map((item) => (
                    <li key={item.id}>{item.list}</li>
                ))}
            </ul>
        </nav>
    );
}
