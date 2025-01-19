const { createContext, useState } = require("react");


export const ThemeContext = createContext();

function Themestate(props) {

    let [theme, setTheme] = useState("light");

    return (
        <div>
            <ThemeContext.Provider value={{ theme, setTheme }}>{props.children}</ThemeContext.Provider>
        </div>
    )
}

export default Themestate