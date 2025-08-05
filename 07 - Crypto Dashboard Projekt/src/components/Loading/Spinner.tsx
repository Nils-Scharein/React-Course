import {ClipLoader} from "react-spinners";
import {useContext} from "react";
import {ThemeContext} from "../../context/Theme/ThemeContext.tsx";

type SpinnerProps = {
    size?: string | number;
}

const override = {
    display: "block",
    margin: "0 auto"
}

const Spinner = ({size = "150"}: SpinnerProps) => {

    const {theme} = useContext(ThemeContext);
    const color = theme === "dark" ? "#ffffff" : "#1e3a8a";

    return (
        <div>
            <ClipLoader
                color={color}
                size={size}
                cssOverride={override}
                aria-label={"loading..."}
            />
        </div>

    )
}

export default Spinner