import { createContext, useState } from "react";

interface stateProps{
    theme:string,
    setTheme:string
}


export const ThemeContext = createContext<stateProps | any>(null);

const ThemeState = (props: { children: React.ReactNode }) => {
 
    const[theme,setTheme]=useState("light");
    return (
        <ThemeContext.Provider value={{theme,setTheme}}>{props.children}</ThemeContext.Provider>
    )
}
export default ThemeState