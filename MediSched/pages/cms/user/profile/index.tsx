import { useContext, useState, useEffect } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { supabase } from '@/lib/supabaseClient';
import { RiUser3Line, RiMailLine, RiPhoneLine, RiLogoutBoxRLine } from 'react-icons/ri';
import styles from '@/styles/user/user_profile.module.css';
import guest_img from '@/public/guest.jpg';
import cover_img from '@/public/cover_img.jpg';
import ThemeContext from '@/Theme/Themestate';

const Profile: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [user, setUser] = useState<any>(null);
  const [profile, setProfile] = useState<any>(null);
  const router = useRouter();
  const theme_data = useContext(ThemeContext);

  useEffect(() => {
    const fetchUser = async () => {
      const { data, error } = await supabase.auth.getUser();
      if (error || !data.user) {
        router.push('/auth/signin');
      } else {
        setUser(data.user);
        if (data.user.email) {
          fetchUserProfile(data.user.email); 
        }
      }
    };
    fetchUser();
  }, [router]);


  const fetchUserProfile = async (email: string) => {
    const { data, error } = await supabase
      .from('userSignup')
      .select('name, phone')
      .eq('email', email)
      .single();

    if (!error) {
      setProfile(data);
    }
  };


  const handleSignOut = async () => {
    await supabase.auth.signOut();
    router.push('/auth/signin'); 
  };

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
            <p className={styles.profile_name}>{profile?.name || "Guest User"}</p>
          </div>
          <div className={styles.profile_item}>
            <RiMailLine className={styles.icon} />
            <p>{user?.email || "No email available"}</p>
          </div>
          <div className={styles.profile_item}>
            <RiPhoneLine className={styles.icon} />
            <p>{profile?.phone || "No phone available"}</p>
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

export default Profile;
