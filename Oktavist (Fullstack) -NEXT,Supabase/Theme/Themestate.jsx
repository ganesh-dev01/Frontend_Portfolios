const { createContext, useState } = require("react");

export const Themecontext = createContext();

const Themestate = ({ children }) => {
    let [theme, setTheme] = useState("light");
    return (
        <>
            <Themecontext.Provider value={{ theme, setTheme }}>{children}</Themecontext.Provider>
        </>

    )
}

export default Themestate