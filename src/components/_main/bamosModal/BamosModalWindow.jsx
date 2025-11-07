import { useState } from "react";
import FormRadio from "./forms/FormRadio";
import FormSelect from "./forms/FormSelect";
import FormCheckMulti from "./forms/FormCheckMulti";
import FormTextarea from "./forms/FormTextarea";
import BamosButton from "../../_commons/BamosButton/BamosButton";
// import modalImg from "@/assets/images/modalDog.webp";
import closeButton from "@/assets/images/closeButton.svg";

export default function BamosModalWindow({ setIsOpen }) {
    // フォームの各パーツに送るuseState。
    // 子コンポーネントのフォームに入力された値がここに集約される。
    const [form, setForm] = useState({
        media: "",
        age: "",
        favorite: [],
        comment: "",
    });

    //SUBMITボタンを押した時の処理
    const handleSubmit = () => {
        console.log(`年齢：${form.age}`);
        console.log(`どうやってこのサイトを知ったのか？：${form.media}`);
        console.log(`興味のあるジャンル：${form.favorite.join(", ")}`);
        console.log(`ご意見：${form.comment}`);
    };

    // 閉じるボタンやモーダルのオーバーレイをクリックした時の処理。親から受け取ったsetIsOpen関数を使って、
    // 処理しています。
    const closeModal = () => {
        setIsOpen(false);
    };

    return (
        <>
            <div className="modalOverlay" onClick={closeModal}>
                <div className="modalContent" onClick={(e) => e.stopPropagation()}>
                    {/* <div className="modalImg">
                        <img src={modalImg} alt="キツネ・・・じゃなくて子犬。子犬です。" />
                    </div> */}

                    <div className="modalBox">
                        <h2>FEEDBACK</h2>
                        {/* <p>
                            Thank you for visiting BAMOS DESIGN.Please take a moment to complete our survey to help us
                            improve our services.
                        </p> */}

                        <form action="#" method="post">
                            {/* propsとしてそれぞれのパーツにstate変数とstateセッタ関数を渡す */}
                            <FormRadio form={form} setForm={setForm} />
                            <FormSelect form={form} setForm={setForm} />
                            <FormCheckMulti form={form} setForm={setForm} />
                            <FormTextarea form={form} setForm={setForm} />

                            {/* 集計結果をコンソールに表示するボタン */}
                            <BamosButton onClick={handleSubmit} label="SUBMIT" />
                        </form>

                        <button className="closeButton" onClick={closeModal}>
                            <img src={closeButton} alt="閉じるボタン" />
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}
