import React, { useContext } from 'react';
import styles from '@/styles/About.module.css'
import ThemeContext from '@/ThemeContext/ThemeContext';
import Testimonial from '@/Components/Testimonial/Testimonial';
import Team from '@/Components/Team/Team';
import Location from '@/Components/Location/Loaction';


const About: React.FC = () => {
    const theme_data = useContext<any>(ThemeContext);
    return (
        <div className={styles[`main_container_${theme_data.theme}`]}>
            <div className={styles.poster_container}>
            </div>

            <div className={styles.about_container}>
                <p>
                    <span className={styles.aboutHD}>Zenithal </span>
                    <br />
                    Zenithal is a forward-thinking platform dedicated to innovation, creativity, and excellence.
                    Our mission is to empower individuals and businesses by providing cutting-edge solutions that
                    inspire growth and transformation. At Zenithal, we strive to be a guiding light, helping our
                    clients reach the pinnacle of success through tailored strategies, collaborative partnerships,
                    and a commitment to quality. Join us on this journey to achieve greatness and redefine possibilities
                    together.
                </p>
            </div>

            <Team />

            <Testimonial />

            <Location />

            
        </div>
    )
}

export default About