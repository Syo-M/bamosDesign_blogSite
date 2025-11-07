import FirstView from "./_FirstView/FirstView";
import FirstViewImg from "./_FirstView/FirstViewImg";
import FirstViewTitle from "./_FirstView/FirstViewTitle";
import Navigation from "./Navigation";

export default function Header() {
    return (
        <header className="header">
            <Navigation />
            <FirstView>
                <FirstViewImg />
                <FirstViewTitle />
            </FirstView>
        </header>
    );
}
