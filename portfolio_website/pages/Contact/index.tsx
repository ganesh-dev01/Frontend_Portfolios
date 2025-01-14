import styles from '@/styles/Contact.module.css'

import icon1 from '../../public/assets/Icons/Linkedin_icon.png';
import icon2 from '../../public/assets/Icons/insta_icon.png';
import icon3 from '../../public/assets/Icons/facebook_icon.png';

const Contact: React.FC = () => {
    return (
        <div className='page'>
            <div className={`container-fluid ${styles.contact_bdy_container}`} id="contact_pg">

                <div className="row">
                    <div className="col-12 text-center">
                        <p className={styles.contact_hadline}>Contact</p>
                    </div>
                </div>

                <div className="row">
                    <div className="col-12">
                        <div className={styles.main_msgbox}>
                            <form action="https://api.web3forms.com/submit" method="POST" className={styles.form_container}>
                                <input type="hidden" name="access_key" value="208733a0-8c9b-46eb-9bf2-2ae17ca845bc" />

                                <input type="text" placeholder="Name" className={styles.name} name="name" required />
                                <input type="email" placeholder="Email" className={styles.email} name="email" required />
                                <textarea className={styles.msg} placeholder="Enter Message here..." name="message" required></textarea>
                                <button type="submit" className={styles.send_btn}>Send</button>

                            </form>

                            <div className={styles.social_box}>
                                <div className={`${styles.social} ${styles.linkedin}`}>
                                    <a href="https://www.linkedin.com/in/ganesh-saha-0698b72a5/" target="_blank">
                                        <img src={icon1.src} className="social_icon" style={{ width: '100px' }} />
                                    </a>
                                </div>
                                <div className={`${styles.social} ${styles.insta}`}>
                                    <a href="https://www.instagram.com/vinayak_the.universe?igsh=MWVmcmV0ZmxwODkxZw==" target="_blank">
                                        <img src={icon2.src} className="social_icon" style={{ width: '100px' }} /></a>
                                </div>
                                <div className={`${styles.social} ${styles.facebook}`}>
                                    <a href="https://www.facebook.com/profile.php?className=100071861187044&mibextclassName=ZbWKwL" target="_blank">
                                        <img src={icon3.src} className="social_icon" style={{ width: '100px' }} /></a>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact; 