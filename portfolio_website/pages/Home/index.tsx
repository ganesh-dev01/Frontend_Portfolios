import React from 'react';
import styles from '@/styles/Home.module.css';
import dp from '../../assets/images/dp_img.jpg';
import download_icon from '../../assets/Icons/dw_icon.png';
import resume from '../../assets/docs/GaneshSaha_Resume.pdf';
const Home: React.FC = () => {
    return (
        <div className='page'>
            <div className={`${styles['home_bdy_container']} container-fluid`} id="home_pg">
                <div className='row'>
                    <div className='col-md-6'>
                        <div className={styles['image_box']}>
                            <img
                                src={dp.src}
                                className={styles.dp_img}
                                alt="Profile"
                            />
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <div className={styles.intro}>
                            <p>Welcome to my world</p>
                            <h3 className={`${styles.text} ${styles.name}`}>
                                Hi, I'm Ganesh Saha
                            </h3>
                            <h4 className={`${styles.text} ${styles.role}`}>Frontend Developer</h4>
                            <h5 className={`${styles.text} ${styles.location}`}>based in India</h5>
                        </div>
                        <a href={resume} download>
                            <button className={styles.dw_resume_btn}>
                                <img
                                    src={download_icon.src}
                                    className={styles.download_icon}
                                    alt="Download Icon"
                                />
                                Resume
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
