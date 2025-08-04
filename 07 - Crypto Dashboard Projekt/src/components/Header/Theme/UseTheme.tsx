import {useContext} from "react";
import {ThemeContext} from "./ThemeContext";

// Custom hook to access ThemeContext safely
export const useTheme = () => useContext(ThemeContext);
