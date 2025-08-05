import {Link} from "react-router";
import type {CSSProperties} from "react"; // Importiere CSSProperties
// Importiere CSSProperties

const NotFoundPage = () => {
    return (
        <div style={styles.container}>
            <h1 style={styles.title}>404</h1>
            <p style={styles.message}>
                The page you are looking for does not exist.
            </p>
            <Link to="/" style={styles.link}>
                Go back Home
            </Link>
        </div>
    );
};

const styles: {
    container: CSSProperties;
    title: CSSProperties;
    message: CSSProperties;
    link: CSSProperties;
} = {
    container: {
        textAlign: "center",
        padding: "80px 20px",
        color: "#fff",
    },
    title: {
        fontSize: "72px",
        marginBottom: "20px",
    },
    message: {
        fontSize: "18px",
        marginBottom: "30px",
    },
    link: {
        textDecoration: "none",
        color: "#007bff",
        fontWeight: "bold",
    },
};

export default NotFoundPage;
