import React, { useContext } from 'react';
import styles from '@/styles/component.module.css'
import ThemeContext from '@/ThemeContext/ThemeContext';

const Blog_home = () => {
    const theme_data=useContext<any>(ThemeContext)
    return (
        <div className={styles[`blogContainer${theme_data.theme}`]}>
            <h1>Blog_home</h1>
        </div>
    );
};

export default Blog_home;