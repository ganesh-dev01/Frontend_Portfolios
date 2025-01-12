import React, { useState } from 'react';
import styles from '@/styles/Components_styles/Header.module.css';
import close_icon from '@/assets/Icons/close_icon.png';

const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header>
            <div className={styles.P_navbar}>
                <div className={styles.P_brand}>
                    Ganesh Saha
                </div>
                <div className={`${styles.P_nav_items} ${isMenuOpen && styles.open}`}>

                    <ul>
                        <li className={styles.menu_item}>
                            Home
                        </li>
                        <li className={styles.menu_item}>
                            Abouts
                        </li>
                        <li className={styles.menu_item}>
                            Projects
                        </li>
                        <li className={styles.menu_item}>
                            Contact
                        </li>
                    </ul>
                </div>
                <div className={styles.bar} onClick={toggleMenu}>
                    {
                        (() => {
                            const lines = [];
                            for (let i = 0; i < 4; i++) {
                                lines.push(
                                    <div key={i} className={`${styles.line} ${isMenuOpen && styles.line_close}`}></div>
                                );
                            }
                            return lines;
                        })()
                    }



                    <img
                        src={close_icon.src}
                        className={`${styles.close_icon} ${isMenuOpen && styles.close_icon_open}`}
                        alt="Close Icon"
                    />
                </div>
            </div>
        </header >
    );
};

export default Header;
