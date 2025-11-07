import { useState } from "react";
import BamosDrawerButton from "./_drawerMenu/BamosDrawerButton";
import BamosDrawerMenu from "./_drawerMenu/BamosDrawerMenu";
import BamosLogo from "../_commons/BamosLogo/BamosLogo";

export default function Navigation() {
    // useStateでドロワーメニューの開閉状態を管理。子コンポーネントにpropsとして渡し、
    // 子コンポーネント内で状態を変更できるようにする。
    const [open, isOpen] = useState(false);
    return (
        <>
            <div className="navigation_container">
                <div className="navigation_box">
                    <BamosLogo type="black" />
                    <BamosDrawerButton open={open} isOpen={isOpen} />
                </div>
                <BamosDrawerMenu open={open} />
            </div>
        </>
    );
}
