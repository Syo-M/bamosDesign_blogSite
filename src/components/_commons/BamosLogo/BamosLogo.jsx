import styles from "./styles.module.css";
import bamosLogoBlack from "@/assets/images/bamosLogo_black.svg";
import bamosLogoWhite from "@/assets/images/bamosLogo_white.svg";
import bamosLogoAccent from "@/assets/images/bamosLogo_accent.svg";

/**
 * BamosLogo コンポーネント
 *
 * ブランドロゴを `type` の値に応じて切り替えて表示します。
 * それぞれのタイプに対応するロゴ画像（黒／白／アクセントカラー）を表示します。
 *
 * @param {Object} props - コンポーネントのプロパティ
 * @param {"black"|"white"|"accent"} [props.type="black"] - 表示するロゴの種類
 * `"black"`：黒ロゴ、 `"white"`：白ロゴ、 `"accent"`：アクセントカラーのロゴ
 *
 * @returns {JSX.Element} 適切なロゴ画像（`<img>`要素）を返します
 *
 * @example
 * // 黒ロゴを表示
 * <BamosLogo type="black" />
 *
 * // アクセントロゴを表示
 * <BamosLogo type="accent" />
 *
 * // type を省略するとデフォルトで黒ロゴが表示されます
 * <BamosLogo />
 */
export default function BamosLogo({ type = "black" }) {
    let logoSrc;

    switch (type) {
        case "black":
            logoSrc = bamosLogoBlack;
            break;
        case "accent":
            logoSrc = bamosLogoAccent;
            break;
        default:
            logoSrc = bamosLogoWhite;
    }

    return <img src={logoSrc} alt="logo" className={styles.logo} id="logo" />;
}
