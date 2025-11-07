import styles from "./styles.module.css";

/**
 * BamosHeadings コンポーネント
 *
 * セクション見出しを表示するためのシンプルなコンポーネントです。
 * `headingText` で見出し内容を指定し、`fontSize` で文字サイズを調整できます。
 *
 * @param {Object} props - コンポーネントのプロパティ
 * @param {string} [props.headingText="headings"] - 表示する見出しテキスト
 * @param {string} [props.fontSize="1.5rem"] - 見出しの文字サイズ（CSSの単位指定可）
 *
 * @returns {JSX.Element} 見出し（`<h2>`）要素を返します
 *
 * @example
 * // 使用例：
 * <BamosHeadings
 *   headingText="Service Overview"
 *   fontSize="2rem"
 * />
 */
export default function BamosHeadings({ headingText = "headings", fontSize = "1.5rem" }) {
    return (
        <h2 className={styles.heading} style={{ fontSize: fontSize }}>
            {headingText}
        </h2>
    );
}
