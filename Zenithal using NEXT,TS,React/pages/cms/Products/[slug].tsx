import React, { useContext } from 'react';
import styles from "@/styles/product_ditails.module.css"
import test_img from "@/assets/Images/logo.png";
import ThemeContext from '@/ThemeContext/ThemeContext';

const ProductDetails: React.FC = () => {
    const theme_data = useContext<any>(ThemeContext);
    return (
        <div className={styles[`main_container_${theme_data.theme}`]}>
            <div className={styles.pr_image_container}>
                {<img src={test_img.src} alt="Product" className={styles.Pr_image} />}
            </div>

            <div className={styles.pr_details_container}>
                <h1 className={styles.pr_titleHD}>Title</h1>
                <p className={styles.pr_title}>Product Title</p>
                <h1 className={styles.pr_descriptionHD}>Description</h1>
                <p className={styles.pr_description}>
                    Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit. Nulla euismod, nisl eget ultricies
                    aliquam, nunc nisl aliquet nunc, vitae aliquam nisl nunc vitae nisl.
                    Nulla euismod, nisl eget ultricies aliquam, nunc nisl aliquet nunc,
                    vitae aliquam nisl nunc vitae nisl.
                </p>
                <h4 className={styles.createdatHD}>created at: </h4>
                <p className={styles.createdat}>2023-08-23</p>
                <h4 className={styles.updatedatHD}>updated at: </h4>
                <p className={styles.updatedat}>2023-08-23</p>

                <button className={styles.update_btn}>Update</button>
            </div>
        </div>
    );
};

export default ProductDetails;