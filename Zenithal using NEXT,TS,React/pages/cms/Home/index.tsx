import React, { useContext } from "react";
import styles from '@/styles/Home.module.css'
import ThemeContext from "@/ThemeContext/ThemeContext"
import Banner from "@/Components/Banner/Banner";


const Home: React.FC = () => {
    const theme_data = useContext<any>(ThemeContext)
    return (
        <>
            <Banner />

            <h4>Hello world</h4>
        </>
    );
};

export default Home;
