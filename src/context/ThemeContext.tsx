"use client";

import { ReactNode, createContext, useContext, useEffect, useState } from 'react';

type ThemeContextType = {
    theme: "light" | "dark"
    toggle: () => void
};

const getFormLocalStorage = () => {
    if (typeof window !== "undefined") {
        const value = localStorage.getItem('theme') as "light" | "dark";

        return value || "light";
    }

}

export const ThemeContext = createContext<ThemeContextType>({
    theme: "light",
    toggle: () => { }
});

export const ThemeContextProvider = ({ children }: { children: ReactNode }) => {
    const [theme, setTheme] = useState<"light" | "dark" | null>(() => getFormLocalStorage());

    const toggle = () => {
        setTheme(theme === "light" ? "dark" : "light")
    }

    useEffect(() => {
        localStorage.setItem('theme', theme as "light" | "dark");
    }, [theme])

    return (
        <ThemeContext.Provider value={{ theme, toggle }}>
            {children}
        </ThemeContext.Provider>
    )
}
const useThemeContext = () => {
    const context = useContext(ThemeContext);
    if (context === null) {
        throw new Error("useTheme must be used within a ThemeProvider");
    }
    return context;
}
export default useThemeContext