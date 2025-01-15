import React, { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import styles from '@/styles/Components_styles/Header.module.css';
import { Link as Scroll } from 'react-scroll';

const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);


    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };


    return (
        <header>
            <div className={styles.P_navbar}>
                <div className={styles.P_brand}>Ganesh Saha</div>
                <div className={`${styles.P_nav_items} ${isMenuOpen ? styles.open : ''}`}>
                    <ul>

                        <Scroll to="home" smooth={true} duration={500}>
                            <li className={styles.menu_item}>
                                Home
                            </li>
                        </Scroll>


                        <Scroll to="abouts" smooth={true} duration={500}>
                            <li className={styles.menu_item}>
                                Abouts
                            </li>
                        </Scroll>


                        <Scroll to="projects" smooth={true} duration={500}>
                            <li className={styles.menu_item}>
                                Projects
                            </li>
                        </Scroll>


                        <Scroll to="contact" smooth={true} duration={500}>
                            <li className={styles.menu_item}>
                                Contact
                            </li>
                        </Scroll>

                    </ul>
                </div>
                <div className={styles.bar} onClick={toggleMenu}>
                    {Array.from({ length: 4 }).map((_, i) => (
                        <div
                            key={i}
                            className={`${styles.line}`}
                        ></div>
                    ))}
                </div>
            </div>
        </header>
    );
};

export default Header;
