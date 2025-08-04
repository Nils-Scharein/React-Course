import "./link.css"
import {Link} from "react-router"

type LinksHeaderProps = {
    className?: string;
};

const LinksHeader = ({className}: LinksHeaderProps) => {
    return (
        <div className={className}>
            <Link className="link" to={"/"}>Home</Link>
            <Link className="link" to={"/about"}>About</Link>
            <Link className="link" to={"/contact"}>Contact</Link>
        </div>
    );
};

export default LinksHeader
