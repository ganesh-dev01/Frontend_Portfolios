import { ThemeContext } from '@/Theme/Themestate';
import Image from 'next/image';
import { useContext, useState } from 'react';
import { RiLogoutBoxRLine, RiMailLine, RiPhoneLine, RiUser3Line } from 'react-icons/ri';
import styles from '@/styles/user_pages/profile.module.css'
import guest_img from '@/public/guest.jpg';
import cover_img from '@/public/cover_img.jpg';

const User_Profile=()=>{
    const {theme_data} = useContext(ThemeContext);
    let[showModal,setShowModal]=useState(false);

    const handleSignOut=()=>{
        setShowModal(true);
    }

    return(
        <div className={`${styles.main_dashboard} ${styles[`main_${theme_data?.theme}`]}`}>

    
      <div className={styles.profile_header}>
        <Image src={cover_img} alt="Cover" layout="fill" objectFit="cover" />
      </div>

    
      <div className={styles.profile_pic}>
        <img src={guest_img.src} alt="Profile Picture" className={styles.profile_pic_img} />
      </div>

      <div className={styles.profile_body}>
        <div className={styles.profile_info_container}>
          <div className={styles.profile_item}>
            <RiUser3Line className={styles.icon} />
            <p className={styles.profile_name}>{"Guest User"}</p>
          </div>
          <div className={styles.profile_item}>
            <RiMailLine className={styles.icon} />
            <p>{ "No email available"}</p>
          </div>
          <div className={styles.profile_item}>
            <RiPhoneLine className={styles.icon} />
            <p>{ "No phone available"}</p>
          </div>
        </div>

     
        <div className={styles.btn_container}>
          <button className={styles.signout_btn} onClick={() => setShowModal(true)}>
            <RiLogoutBoxRLine className={styles.logout_icon} /> Sign Out
          </button>
        </div>
      </div>

      {/* Sign Out Confirmation Modal */}
      {showModal && (
        <div className={styles.modal_overlay}>
          <div className={styles.modal}>
            <p className={styles.modal_text}>Are you sure you want to sign out?</p>
            <div className={styles.modal_buttons}>
              <button className={styles.confirm_btn} onClick={handleSignOut}>
                Yes
              </button>
              <button className={styles.cancel_btn} onClick={() => setShowModal(false)}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
    )
}

export default User_Profile;



