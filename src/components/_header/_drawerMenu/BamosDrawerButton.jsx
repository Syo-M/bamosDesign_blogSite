import drawerButtonImg from "@/assets/images/drawerbutton.svg";

// 親コンポーネントからpropsとしてuseStateのstate変数とstateセッタ関数を受け取る
export default function BamosDrawerButton({ open, isOpen }) {
    const handleClick = () => {
        isOpen(!open);
    };

    return (
        <>
            <button className={open ? "drawerButton open" : "drawerButton"} onClick={handleClick}>
                <img src={drawerButtonImg} alt="ドロワーボタン" className={open ? "active" : ""} />
                <span>{open ? "CLOSE" : "MENU"}</span>
            </button>
        </>
    );
}
