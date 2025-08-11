import React, { createContext, useEffect, useState } from 'react';

// Define the possible theme values
type Theme = 'light' | 'dark';

// Define the structure of the context value
type ThemeContextType = {
  theme: Theme;
  toggleTheme: () => void;
};

// Default context (used before real value is set)
export const ThemeContext = createContext<ThemeContextType>({
  theme: 'light',
  toggleTheme: () => {},
});

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<Theme>('dark'); // Default on SSR

  // On mount, set initial theme from localStorage or media query
  useEffect(() => {
    const stored = localStorage.getItem('theme') as Theme | null;
    const prefersDark = window.matchMedia(
      '(prefers-color-scheme: dark)'
    ).matches;

    const initialTheme =
      stored === 'dark' || stored === 'light'
        ? stored
        : prefersDark
          ? 'dark'
          : 'light';

    setTheme(initialTheme);
  }, []);

  // Apply theme to <html> and persist in localStorage
  useEffect(() => {
    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
