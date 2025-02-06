import styles from '@/styles/admin_styles/admin_profile.module.css';
import { Themecontext } from '@/Theme/Themestate';
import { useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { supabase } from '@/lib/supabase';
import person_icon from '@/public/assets/guest.jpg'

interface AdminUser {
    id: number;
    email: string;
    name: string;
    profile_piclink: string;
    created_at: string;
}

const Account: React.FC = () => {
    const theme_data = useContext(Themecontext);
    const router = useRouter();
    const [admin, setAdmin] = useState<AdminUser | null>(null);

    useEffect(() => {
        const fetchAdminData = async () => {
            const { data, error } = await supabase.from('admin_user').select('*').single();
            if (error) {
                console.error('Error fetching admin data:', error.message);
                return;
            }
            setAdmin(data);
        };

        fetchAdminData();
    }, []);

    const handleSignOut = async () => {
        await supabase.auth.signOut();
        await localStorage.removeItem('adminAuthenticated')
        router.push('/auth/Admin_signin/154154541');
    };

    return (
        <div className={`${styles[`main_dashboard_${theme_data.theme}`]} ${styles.main_dashboard}`}>
            <div className={styles.profile_container}>
                <div className={styles.profile_pic_container}>
                    <img src={admin?.profile_piclink || person_icon.src} alt="Profile" />
                </div>
            </div>

            <div className={styles.profile_info_container}>
                {admin ? (
                    <div className={styles.profile_content}>
                        <h2 className={styles.profile_name}>{admin.name}</h2>
                        <p className={styles.profile_email}>{admin.email}</p>
                        <p className={styles.profile_date}>Joined: {new Date(admin.created_at).toDateString()}</p>
                    </div>
                ) : (
                    <p>Loading...</p>
                )}

                <div className={styles.btn_container}>
                    <button className={styles.signout_btn} onClick={handleSignOut}>Sign Out</button>
                </div>
            </div>
        </div>
    );
};

export default Account;
