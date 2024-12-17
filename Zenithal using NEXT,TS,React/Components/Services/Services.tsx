import React, { useContext } from 'react';
import { FaShippingFast, FaPhoneAlt, FaUndo, FaShieldAlt } from 'react-icons/fa';
import styles from '@/styles/component.module.css';
import ThemeContext from '@/ThemeContext/ThemeContext';

const Services: React.FC = () => {
    const theme_data = useContext<any>(ThemeContext);

    return (
        <div className={styles[`servicesSection_${theme_data.theme}`]}>
            <h4 className={styles.servicesTitle}>Our Services</h4>
            <div className={styles.servicesContainer}>
                <div className={styles.serviceCard}>
                    <FaShippingFast className={styles.serviceIcon} />
                    <h5>Fast & Free Shipping</h5>
                    <p>We offer fast and free shipping on all orders. Get your products delivered quickly and at no additional cost.</p>
                </div>
                <div className={styles.serviceCard}>
                    <FaPhoneAlt className={styles.serviceIcon} />
                    <h5>24/7 Customer Support</h5>
                    <p>Our dedicated support team is available round-the-clock to assist you with any questions or concerns.</p>
                </div>
                <div className={styles.serviceCard}>
                    <FaUndo className={styles.serviceIcon} />
                    <h5>Easy Returns</h5>
                    <p>Shop with confidence! If you're not happy with your purchase, our hassle-free return policy makes it easy to get your money back.</p>
                </div>
                <div className={styles.serviceCard}>
                    <FaShieldAlt className={styles.serviceIcon} />
                    <h5>Secure Payments</h5>
                    <p>Your transactions are secure with us. We provide a variety of payment methods, ensuring your data is always protected.</p>
                </div>
            </div>
        </div>
    );
};

export default Services;
