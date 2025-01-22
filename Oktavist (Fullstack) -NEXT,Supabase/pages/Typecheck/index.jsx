import React, { useContext } from 'react';
import styles from '@/styles/typecheck.module.css';
import { ThemeContext } from '@/Theme/Themestate';
import { useRouter } from 'next/router';
import Theme_button from '@/Components/Theme_button';

const Typecheck = () => {
    const theme_data = useContext(ThemeContext);
    const router = useRouter();

    const handleNavigation = (path) => {
        router.push(path);
    };

    return (
        <div className={`${styles[`main_${theme_data.theme}`]} ${styles.background}`}>
            <Theme_button />
            <div className={styles.container}>

                <div className={styles[`headline_${theme_data.theme}`]}>
                    <h1 className={styles.mainTitle}>
                        🎵 Are You a <span className={styles.highlight}>User</span> or an <span className={styles.highlight}>Admin</span>?
                    </h1>
                    <p className={styles.subTitle}>
                        Pick your role to dive into the <span className={styles.highlight}>world of music</span> and explore our amazing features!
                    </p>
                </div>


                <div className={styles.typeSelection}>
                    <button
                        className={`${styles.typeButton} ${styles.userButton}`}
                        onClick={() => handleNavigation('Auth/UserSignin')}
                    >
                        User
                    </button>
                    <button
                        className={`${styles.typeButton} ${styles.adminButton}`}
                        onClick={() => handleNavigation('Auth/AdminSignin')}
                    >
                        Admin
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Typecheck;
