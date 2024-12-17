import React, { useContext } from "react";
import styles from '@/styles/Home.module.css'
import ThemeContext from "@/ThemeContext/ThemeContext"
import Banner from "@/Components/Banner/Banner";
import Blog_home from "@/Components/Blog_home/Blog_home";
import Services from "@/Components/Services/Services";


const Home: React.FC = () => {
    const theme_data = useContext<any>(ThemeContext)
    return (
        <>
            <div className={styles[`main_container_${theme_data.theme}`]}>
                <Banner />

                <Blog_home />

                <Services />

            </div>
        </>
    );
};

export default Home;
