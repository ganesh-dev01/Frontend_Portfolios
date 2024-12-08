import ThemeContext from "@/ThemeContext/ThemeContext"
import { useContext } from "react";
import styles from '@/styles/Header.module.css'

const Header: React.FC = () => {

    const theme_data = useContext<any>(ThemeContext);

    return (
        <div className={styles[`container-${theme_data.theme}`]}>

            <ul className={styles.list}>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li>Products</li>
            </ul>

        </div>
    )
}

export default Header