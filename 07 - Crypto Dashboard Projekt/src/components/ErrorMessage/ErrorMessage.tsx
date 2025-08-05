import type {AppError} from "../types.ts";
import "./error.css"

const ErrorMessage = ({error}: { error: AppError }) => {
    const {name, message, context} = error;

    return (
        <div className="error-container">
            <h2 className="error-title">⚠️ Fehler</h2>
            <p>{name}</p>
            <p>{message}</p>
            {context && <p>{context}</p>}
        </div>
    );
};

export default ErrorMessage;
