import React, { useContext } from 'react';
import styles from '@/styles/component.module.css'
import ThemeContext from '@/ThemeContext/ThemeContext';

import image1 from '@/Assets/Images/img1.jpg';
import image2 from '@/Assets/Images/img2.jpg';
import image3 from '@/Assets/Images/img3.jpg';
import image4 from '@/Assets/Images/img4.jpg';


const Blog_home = () => {
    const theme_data = useContext<any>(ThemeContext)

    const blogs_obj = [
        {
            id: 1,
            title: 'Shop the Latest Trends – Fast Shipping, Great Prices!-',
            description: `Discover the newest styles and must-have products at unbeatable prices. Whether you're upgrading your wardrobe,
             exploring the latest tech, or refreshing your home, we've got you covered. Enjoy fast shipping, hassle-free returns, 
             and deals that keep you coming back for more. Why wait? Start shopping today and stay ahead of the trends! 🚀`,
            image: image1
        },
        {
            id: 2,
            title: 'Your One-Stop Shop for Everything You Love-',
            description: `Find everything you need and love in one place! From fashion and electronics to home essentials and gifts,
            we bring you top-quality products at great prices. Enjoy a seamless shopping experience with fast delivery, secure payments, 
            and unmatched convenience.Start exploring today — your favorites are just a click away! 🛒✨`,
            image: image2
        },
        {
            id: 3,
            title: 'Exclusive Offers – Limited Time Only!',
            description: `Discover unbeatable savings with our exclusive, limited-time offers! Whether you're upgrading your wardrobe,
             snagging the latest tech, or refreshing your home essentials, we’ve got incredible deals just for you. Act fast — these 
             discounts won’t stick around forever! Shop now, save big, and treat yourself to the products you love 
             at prices you’ll love even more. Don't let these amazing offers slip through your fingers — grab them before 
             they're gone! 🎉🛍️`,
            image: image3
        },
        {
            id: 4,
            title: 'Quality Products, Unbeatable Prices',
            description: `At our store, we believe you shouldn’t have to compromise on quality to get a great deal. That’s why we 
            offer top-notch products at prices that can’t be beat. Whether you’re shopping for fashion, electronics, or home essentials, 
            we ensure you get the best value for your money without sacrificing quality. Experience the perfect balance of reliability,
            performance, and affordability. Shop with confidence knowing that every purchase is backed by our commitment to excellence. 
            Quality is our priority, and unbeatable prices are our promise!`,
            image: image4
        }
    ]

    return (
        <div className={styles[`blogContainer_${theme_data.theme}`]}>

            {blogs_obj.map((item, index) => <>
                <div className={styles.postContainer} key={index}>
                    <div className={styles.post}>
                        <div className={styles.postTitle}>
                            {item.title}
                        </div>
                        {item.description}
                    </div>
                    <div className={styles.imageContainer}>
                        <img src={item.image.src} alt="image" className={styles.blogImage} />
                    </div>
                </div>
            </>)}
        </div>
    );
};

export default Blog_home;