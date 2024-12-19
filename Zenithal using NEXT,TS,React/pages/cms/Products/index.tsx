import ThemeContext from "@/ThemeContext/ThemeContext";
import React, { useContext, useState } from "react";
import { AiOutlineProduct } from "react-icons/ai";
import { IoIosCloseCircle } from "react-icons/io";
import styles from "@/styles/products.module.css"


const CreateForm: React.FC = () => {
    const theme_data = useContext<any>(ThemeContext);
    return (
        <div className={styles[`create_form_container_${theme_data.theme}`]}>

            <div className={styles.close_btn_container}>
                <IoIosCloseCircle className={styles.close_btn} />
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
    )
}


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

            {openCreateForm && <CreateForm />}

        </div>
    )
}

export default Products;