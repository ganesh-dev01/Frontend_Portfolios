import { useState } from "react";
import ThemeContext from "./ThemeContext";

interface NodeProps {
    children: React.ReactNode;
}

const ThemeState: React.FC<NodeProps> = (props) => {

    let [theme, setTheme] = useState("light");

    return (
        <div>
            <ThemeContext.Provider value={{ theme, setTheme }}>
                {props.children}
            </ThemeContext.Provider>
        </div>
    )
}

export default ThemeState;  