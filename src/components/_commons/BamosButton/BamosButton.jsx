import styles from "./styles.module.css";
/**
 * BamosButton コンポーネント
 *
 * 汎用的なボタン要素を表示します。
 * `label` でボタンのテキストを指定し、
 * `onClick` にクリック時の処理関数を渡します。
 *
 * @param {Object} props - コンポーネントのプロパティ
 * @param {string} [props.label="button"] - ボタンに表示するテキスト
 * @param {function} [props.onClick=console.log] - クリック時に呼び出される関数
 *
 * @returns {JSX.Element} button要素を返します
 *
 * @example
 * // 使用例：
 * <BamosButton
 *   label="送信"
 *   onClick={() => console.log("送信ボタンが押されました")}
 * />
 */
export default function BamosButton({
    label = "button",
    onClick = () => console.log("このボタンはonClickが設定されていません"),
}) {
    return (
        <button onClick={onClick} type="button" className={styles.button}>
            {label}
        </button>
    );
}
