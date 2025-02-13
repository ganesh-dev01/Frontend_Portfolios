import { useContext } from "react";
import { FaSun, FaMoon } from "react-icons/fa";
import ThemeContext from "@/Theme/Themestate";
import styles from "@/styles/Component_styles/theme.module.css";

const ThemeButton = () => {
    const data = useContext(ThemeContext)


    const changeTheme = () => {
        data?.setTheme(data?.theme === "dark" ? "light" : "dark");
    };

    return (
        <button className={styles[`themeButton_${data?.theme}`]} onClick={changeTheme}>
            {data?.theme === "dark" ? <FaSun className={styles.icon} /> : <FaMoon className={styles.icon} />}
        </button>
    );
};

export default ThemeButton;
