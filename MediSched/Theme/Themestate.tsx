import { createContext, ReactNode, useState, Dispatch, SetStateAction } from "react";

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

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};
