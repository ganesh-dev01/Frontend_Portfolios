import styles from '@/styles/Auth_styles/signin.module.css'
import { ThemeContext } from '@/Theme/Themestate';
import { useContext } from 'react';

const Signin = () => {

    const theme_data = useContext(ThemeContext);

    return (
        <div className={styles[`main_${theme_data.theme}`]}>


        </div>
    )
}


export default Signin;