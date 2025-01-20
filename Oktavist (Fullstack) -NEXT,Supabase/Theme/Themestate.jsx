const { createContext, useState, useEffect } = require("react");


export const ThemeContext = createContext();



function Themestate(props) {

    let [theme, setTheme] = useState("light");

    useEffect(() => {
        if (theme === "dark") {
            document.body.classList.add("body_dark");
        } else {
            document.body.classList.remove("body_dark");
            document.body.classList.add("body_light");
        }
    }, [theme]);

    return (
        <div>
            <ThemeContext.Provider value={{ theme, setTheme }}>{props.children}</ThemeContext.Provider>
        </div>
    )
}

export default Themestate