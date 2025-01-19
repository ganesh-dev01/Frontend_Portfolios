import { ThemeContext } from '@/Theme/Themestate';
import { useContext } from 'react';
import styles from '@/styles/Component_styles/theme.module.css'
import { Brightness4, Brightness7 } from '@mui/icons-material';

const Theme_button = () => {
    const theme_data = useContext(ThemeContext);

    let changeTheme = () => {
        theme_data.setTheme(theme_data.theme === 'dark' ? 'light' : 'dark');
    }
    return (
        <>
            <div className={styles.top_bar}>
                <button className={styles.toggle_btn} onClick={changeTheme}>
                    {theme_data.theme === 'dark' ? <Brightness7 /> : <Brightness4 />}
                </button>
            </div>

        </>
    )
}

export default Theme_button;    