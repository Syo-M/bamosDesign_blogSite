import { useState } from "react";
import thumbsUp from "@/assets/images/thumbsUp.svg";
import isActiveThumbsUp from "@/assets/images/isActive_thumbsUp.svg";
import thumbsDown from "@/assets/images/thumbsDown.svg";
import isActiveThumbsDown from "@/assets/images/isActive_thumbsDown.svg";

export default function ThumbsUpDownButton({ init = 0, GorB = true }) {
    const [count, setCount] = useState(init);
    const [isActive, setIsActive] = useState(false);

    const handleClick = () => {
        setIsActive(!isActive); // 真偽値を反転
        setCount((prev) => prev + (isActive ? -1 : 1)); // 状態に応じて増減
    };

    // propsのGorBに応じてアイコンを切り替える。
    // GorBがtrueならいいねボタン、falseならバッドボタンに対応するために変数iconを宣言。中身はまだ未定義。
    // useStateで管理しているので、関数handleClickが実行されるたびに再レンダーされて画像が切り替わる。
    let icon;

    if (GorB) {
        // いいねボタンの場合
        icon = isActive ? isActiveThumbsUp : thumbsUp;
    } else {
        // バッドボタンの場合
        icon = isActive ? isActiveThumbsDown : thumbsDown;
    }

    return (
        <div className="thumbs">
            <button className={`likeButton ${isActive ? "like" : ""}`} onClick={handleClick}>
                <span className="thumbsIcons">
                    <img src={icon} alt={GorB ? "thumbUp" : "thumbDown"} />
                </span>
                <span className="count">{count}</span>
            </button>
        </div>
    );
}
