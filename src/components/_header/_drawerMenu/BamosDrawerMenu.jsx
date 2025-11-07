import navList from "./navList";

// 親コンポーネントからpropsとしてuseStateのstate変数を受け取る
export default function BamosDrawerMenu({ open }) {
    return (
        <nav className={open ? "drawerMenu open" : "drawerMenu"}>
            <ul>
                {navList.map((item) => (
                    <li key={item.id}>{item.list}</li>
                ))}
            </ul>
        </nav>
    );
}
