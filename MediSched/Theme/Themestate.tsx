import { createContext, ReactNode, useState, Dispatch, SetStateAction, useEffect } from "react";

interface ThemeContextType {
    theme: string;
    setTheme: Dispatch<SetStateAction<string>>;
}

const ThemeContext = createContext<ThemeContextType | null>(null);

export default ThemeContext;

interface ThemeStateProps {
    children: ReactNode;
}

export const ThemeState: React.FC<ThemeStateProps> = ({ children }) => {
    const [theme, setTheme] = useState<string>("light");

    useEffect(() => {
        const savedTheme = localStorage.getItem("theme");
        if (savedTheme) {
            setTheme(savedTheme);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("theme", theme);
    }, [theme]);

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};