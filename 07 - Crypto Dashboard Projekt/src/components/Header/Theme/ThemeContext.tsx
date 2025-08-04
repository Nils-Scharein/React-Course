import React, {createContext, useEffect, useState} from "react";

// Define the possible theme values: "light" or "dark"
type Theme = "light" | "dark";

// Define the structure of the context value
type ThemeContextType = {
    theme: Theme;
    toggleTheme: () => void;
};

// Create the ThemeContext with default values
export const ThemeContext = createContext<ThemeContextType>({
    theme: "light",
    toggleTheme: () => {
    },
});

// ThemeProvider component
export const ThemeProvider = ({children}: { children: React.ReactNode }) => {

    // useState to keep track of the Theme
    const [theme, setTheme] = useState<Theme>(() => {
        const stored = localStorage.getItem("theme") as Theme | null;
        if (stored === "light" || stored === "dark") return stored;
        return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    });

    //change Local Storage, if Theme Changes
    useEffect(() => {
        document.documentElement.classList.remove("light", "dark");
        document.documentElement.classList.add(theme);
        localStorage.setItem("theme", theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme((prev) => (prev === "dark" ? "light" : "dark"));
    };

    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    );
};
