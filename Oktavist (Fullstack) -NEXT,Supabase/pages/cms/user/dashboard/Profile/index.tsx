import { useContext, useEffect, useState } from "react";
import { Themecontext } from "@/Theme/Themestate";
import { FaUser } from "react-icons/fa";
import { SiMinutemailer } from "react-icons/si";
import { MdPhoneAndroid } from "react-icons/md";
import { useSupabaseClient, useSession } from "@supabase/auth-helpers-react";
import styles from "@/styles/user_styles/profile.module.css";
import { useRouter } from "next/router";
import cover_pic from '@/public/assets/hd_phn2.jpg';
import guest_img from '@/public/assets/guest.jpg'

const Profile: React.FC = () => {
    const data_theme = useContext(Themecontext);
    const router = useRouter();
    const supabase = useSupabaseClient();
    const session = useSession();
    const [userData, setUserData] = useState<any>(null);
    const [showConfirmBox, setShowConfirmBox] = useState(false);


    console.log("Session:", session);

    useEffect(() => {
        const fetchUserData = async () => {
            if (!session?.user) {
                console.log("No session found. Redirecting to sign-in...");
                router.push("/auth/signin");
                return;
            }

            const { data: profile, error: profileError } = await supabase
                .from("signup_table")
                .select("name, email, phone, profile_image")
                .eq("email", session.user.email)
                .single();

            if (profileError) {
                console.error(profileError.message);
            } else {
                setUserData(profile);
            }
        };

        if (session?.user) {
            fetchUserData();
        }
    }, [session, router, supabase]);

    const handleSignOut = async () => {
        console.log("Sign-out initiated...");

        try {
            const { error } = await supabase.auth.signOut();


            if (error) {
                console.error("Error during sign out:", error.message);
                return;
            }


            console.log("Sign-out successful. Redirecting...");
            router.push("/auth/signin");
        } catch (error) {
            console.error("Unexpected error during sign out:", error);
        }
    };

    return (
        <div className={`${styles[`main_dashboard_${data_theme}`]} ${styles.main_dashboard}`}>
            {showConfirmBox && (
                <div className={styles.confirm_container}>
                    <div className={styles.confirm_box}>
                        <div className={styles.confirm_box_header}>
                            <h2>Confirmation</h2>
                        </div>
                        <div className={styles.confirm_box_body}>
                            <p>Are you sure you want to sign out this account?</p>
                        </div>
                        <div className={styles.confirm_box_footer}>
                            <button onClick={handleSignOut}>Yes</button>
                            <button onClick={() => setShowConfirmBox(false)}>No</button>
                        </div>
                    </div>
                </div>
            )}

            <div className={styles.profile_pic}>
                <img src={userData?.profile_image || guest_img.src} alt="profile_pic" />
            </div>

            <div className={styles.profile_header}>
                <img src={cover_pic.src} alt="cover_pic" />
            </div>

            <div className={styles.profile_body}>
                <div className={styles.profile_info_container}>
                    <div className={styles.profile_name_box}>
                        <div className={styles.icon}><FaUser /></div>
                        <p className={styles.profile_name}>{userData?.name || "Guest User"}</p>
                    </div>

                    <div className={styles.profile_email_box}>
                        <div className={styles.icon}><SiMinutemailer /></div>
                        <p className={styles.profile_email}>{userData?.email || "No"}</p>
                    </div>

                    <div className={styles.profile_phone_box}>
                        <div className={styles.icon}><MdPhoneAndroid /></div>
                        <p className={styles.profile_phone}>{userData?.phone || "No"}</p>
                    </div>
                </div>

                <div className={styles.btn_container}>

                    {(session) ?
                        <button className={styles.signout_btn} onClick={() => setShowConfirmBox(true)}>
                            Sign out
                        </button>
                        :
                        <button className={styles.login_btn} onClick={() => router.push('/auth/signin')}>
                            Login
                        </button>
                    }

                </div>
            </div>
        </div>
    );
};

export default Profile;