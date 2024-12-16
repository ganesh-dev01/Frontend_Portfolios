import React, { useContext } from 'react';
import styles from '@/styles/component.module.css'
import ThemeContext from '@/ThemeContext/ThemeContext';

const Blog_home = () => {
    const theme_data = useContext<any>(ThemeContext)
    return (
        <div className={styles[`blogContainer_${theme_data.theme}`]}>
            <div className={styles.postContainer}>
                <div className={styles.post}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas veritatis recusandae voluptatibus molestias facilis necessitatibus odio. Debitis exercitationem illum sapiente eius quam culpa ipsum error at ipsa velit voluptatibus, dignissimos magni maxime voluptate autem eaque repellendus incidunt voluptatem et? Non qui quo reiciendis quas enim cum nemo nihil necessitatibus magnam.
                </div>
                <div className={styles.imageContainer}>
                </div>
            </div>
        </div>
    );
};

export default Blog_home;