import { useContext, useState, useEffect } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { RiUser3Line, RiMailLine, RiPhoneLine, RiLogoutBoxRLine } from 'react-icons/ri';
import styles from '@/styles/admin/dct_profile.module.css';
import guest_img from '@/public/guest2.jpg';
import cover_img from '@/public/cover_img2.jpg';
import ThemeContext from '@/Theme/Themestate';

const Doctor_Profile: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [doctor, setDoctor] = useState<{ doctorname: string; email: string; phone: string } | null>(null);
  const theme_data = useContext(ThemeContext);
  const router = useRouter();


  useEffect(() => {
    const doctorSession = localStorage.getItem("doctor_session");

    if (doctorSession) {
      const doctorData = JSON.parse(doctorSession);
      setDoctor(doctorData);
    } else {
      router.push('/auth/doctor/signin');
    }
  }, [router]);

  const handleSignOut = () => {
    localStorage.removeItem("doctor_session");
    router.push('/auth/signin');
  };

  if (!doctor) return <p>Loading...</p>;

  return (
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
            <p className={styles.profile_name}>{doctor.doctorname}</p>
          </div>
          <div className={styles.profile_item}>
            <RiMailLine className={styles.icon} />
            <p>{doctor.email}</p>
          </div>
          <div className={styles.profile_item}>
            <RiPhoneLine className={styles.icon} />
            <p>{doctor.phone}</p>
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

export default Doctor_Profile;
