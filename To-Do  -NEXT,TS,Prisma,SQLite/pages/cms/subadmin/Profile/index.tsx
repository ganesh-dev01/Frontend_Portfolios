import { ThemeContext } from '@/Theme/Themestate';
import Image from 'next/image';
import { useContext, useState } from 'react';
import { RiLogoutBoxRLine, RiMailLine, RiPhoneLine, RiUser3Line } from 'react-icons/ri';
import guest_img from '@/public/guest.jpg';
import cover_img from '@/public/cover_img.jpg';
import { signOut, useSession } from "next-auth/react";
import styles from '@/styles/admin_pages/admin_profile.module.css'
import { FaUser } from 'react-icons/fa';

const SubAdminProfile = () => {
  const data = useContext(ThemeContext);
  let { theme } = data;

  let [showModal, setShowModal] = useState(false);

  const handleSignOut = async () => {
    setShowModal(true);
    await signOut({ callbackUrl: "/auth/signin" });
  }

  const { data: session, status } = useSession();

  console.log("test2", session);

  console.log("theme", theme);

  return (
    <div className={`${styles[`main_${theme}`]} ${styles.main_dashboard}`}>


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
            <p className={styles.profile_name}>{session?.user.name||"Guest User"}</p>
          </div>
          <div className={styles.profile_item}>
            <RiMailLine className={styles.icon} />
            <p>{session?.user.email || "No email available"}</p>
          </div>
          <div className={styles.profile_item}>
            <FaUser className={styles.icon} />
            <p>role: {session?.user?.role || 'Guest'}</p>
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
  );
};

export default SubAdminProfile;







