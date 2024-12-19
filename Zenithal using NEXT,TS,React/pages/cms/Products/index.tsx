import ThemeContext from "@/ThemeContext/ThemeContext";
import React, { useContext, useState } from "react";
import { AiOutlineProduct } from "react-icons/ai";
import { IoIosCloseCircle } from "react-icons/io";
import styles from "@/styles/products.module.css";

import test_img from "@/assets/Images/logo.png";


const CreateForm: React.FC<{ handleCreatebtn: () => void }> = ({ handleCreatebtn }) => {
    const theme_data = useContext<any>(ThemeContext);
    return (
        <div className={styles[`create_form_container_${theme_data.theme}`]}>

            <div className={styles.close_btn_container}>
                <IoIosCloseCircle className={styles.close_btn} onClick={handleCreatebtn} />
            </div>

            <div className={styles.form_container}>
                <div className={styles.form_header}>
                    <h2>Create Product</h2>
                </div>
                <div className={styles.form_body}>
                    <form>
                        <div className={styles.form_group}>
                            <label htmlFor="title">Title</label>
                            <input type="text" id="title" name="title" />
                        </div>
                        <div className={styles.form_group}>
                            <label htmlFor="description">Description</label>
                            <textarea id="description" name="description"></textarea>
                        </div>
                        <div className={styles.form_group}>
                            <label htmlFor="product_image">Upload product image</label>
                            <input type="file" id="product_image" name="product_image" accept="image/*" />
                        </div>
                        <div className={styles.form_group}>
                            <button type="submit" className={styles.createProductbtn}>Create Product</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};





const Products: React.FC = () => {

    const theme_data = useContext<any>(ThemeContext);

    const [openCreateForm, setOpenCreateForm] = useState(false);

    const handleCreatebtn = () => {
        (openCreateForm) ? setOpenCreateForm(false) : setOpenCreateForm(true);
    }

    return (
        <div className={styles[`main_container_${theme_data.theme}`]}>
            <div className={styles.createBox}>
                <button className={styles.createButton} onClick={handleCreatebtn}>
                    <AiOutlineProduct className={styles.createIcon} />
                    Create Product
                </button>
            </div>

            {openCreateForm && <CreateForm handleCreatebtn={handleCreatebtn} />}

            <div className={styles.product_container}>

                <div className={styles.product_card}>

                    <div className={styles.product_image_box}>
                        <img src={test_img.src} alt="Product" className={styles.product_image} />
                    </div>

                    <p className={styles.product_titleHD}>Title:</p>
                    <p className={styles.product_title}>Product Title</p>
                    <p className={styles.product_descriptionHD}>Description:</p>
                    <p className={styles.product_description}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.
                    </p>
                </div>

                <div className={styles.product_card}>

                    <div className={styles.product_image_box}>
                        <img src={test_img.src} alt="Product" className={styles.product_image} />
                    </div>

                    <p className={styles.product_titleHD}>Title:</p>
                    <p className={styles.product_title}>Product Title</p>
                    <p className={styles.product_descriptionHD}>Description:</p>
                    <p className={styles.product_description}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.
                    </p>
                </div>

                <div className={styles.product_card}>

                    <div className={styles.product_image_box}>
                        <img src={test_img.src} alt="Product" className={styles.product_image} />
                    </div>

                    <p className={styles.product_titleHD}>Title:</p>
                    <p className={styles.product_title}>Product Title</p>
                    <p className={styles.product_descriptionHD}>Description:</p>
                    <p className={styles.product_description}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.
                    </p>
                </div>
            </div>

        </div>
    )
}

export default Products;