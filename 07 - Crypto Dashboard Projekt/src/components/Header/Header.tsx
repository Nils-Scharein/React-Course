import './Header.css';
import "./link.css"
import LinksHeader from "./LinksHeader.tsx";
import CoinGeckoHeader from "./CoinGeckoHeader.tsx";
import ThemeToggleButton from "./Theme/ThemeToggleButton.tsx";

type HeaderProps = {
    gecko?: boolean;
};

export const Header = ({gecko}: HeaderProps) => {
    return (
        <header id="header">
            {gecko && (
                <div className="header-left">
                    <CoinGeckoHeader/>
                </div>
            )}
            <div className="header-right">
                <ThemeToggleButton className={"HeaderItem link"}/>
                <LinksHeader className={"HeaderItem"}/>
            </div>
        </header>
    );
};

export default Header;