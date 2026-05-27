import { useEffect, useState } from "react";
import BamosDrawerButton from "../_drawerMenu/BamosDrawerButton/BamosDrawerButton";
import BamosDrawerMenu from "../_drawerMenu/BamosDrawerMenu/BamosDrawerMenu";
import BamosLogo from "../../_commons/BamosLogo/BamosLogo";
import styles from "./Navigation.module.css";

export default function Navigation() {
    // ドロワーメニューの開閉状態
    const [open, isOpen] = useState(false);

    // 画面幅が768px以上かどうか
    const [isDesktop, setIsDesktop] = useState(false);

    useEffect(() => {
        //window.matchMedia() は、CSSのメディアクエリをJavaScript側で判定するためのメソッド。

        const mediaQuery = window.matchMedia("(min-width: 768px)");

        // 初回判定
        // mediaQuery.matches は、メディアクエリにマッチしているかどうかを示す真偽値が入っています。
        // 画面幅が768px以上ならtrue、そうでなければfalseになります。
        setIsDesktop(mediaQuery.matches);

        // 画面幅が変わった時に実行
        const handleChange = (event) => {
            setIsDesktop(event.matches);
        };

        mediaQuery.addEventListener("change", handleChange);

        // コンポーネントが消える時にイベントを解除
        return () => {
            mediaQuery.removeEventListener("change", handleChange);
        };
    }, []);

    return (
        <>
            <div className={styles.navigation}>
                <div className={`${styles.navigation_container} ${open ? styles.open : ""}`}>
                    <div className={styles.navigation_box}>
                        <BamosLogo type={open && !isDesktop ? "white" : "black"} />
                    </div>

                    <BamosDrawerMenu open={open} />
                </div>
            </div>

            <BamosDrawerButton open={open} isOpen={isOpen} />
        </>
    );
}