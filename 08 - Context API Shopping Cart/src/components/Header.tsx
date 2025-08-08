import './Header.css';
import type {ReactNode} from "react";

type HeaderProps = {
    children?: ReactNode;
};

export const Header = ({children}: HeaderProps) => {

    return (
        <header className="header">
            <h1 className="title">Shopping</h1>
            {children}
        </header>
    );
};

export default Header;