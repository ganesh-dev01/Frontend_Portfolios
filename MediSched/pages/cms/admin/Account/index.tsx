import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import styles from "@/styles/admin/admin_account.module.css";
import guest_img from "@/public/guest.jpg";

const Account: React.FC = () => {
    const [admin, setAdmin] = useState<{ name: string; email: string; phone: string } | null>(null);
    const router = useRouter();

    useEffect(() => {
        const adminSession = localStorage.getItem("admin_session");
        if (adminSession) {
            setAdmin(JSON.parse(adminSession));
        } else {
            router.push("/auth/admin/signin");
        }
    }, [router]);

    const handleSignOut = () => {
        localStorage.removeItem("admin_session");
        router.push("/auth/admin/signin/154154541");
    };

    return (
        <div className={styles.main}>
            <div className={styles.profileCard}>
                <img src={guest_img.src} alt="Admin Avatar" className={styles.avatar} />
                <h2 className={styles.name}>{admin?.name || "Loading..."}</h2>
                <p className={styles.email}>{admin?.email || "Loading..."}</p>
                <p className={styles.phone}>{admin?.phone || "Loading..."}</p>
                <button className={styles.signoutButton} onClick={handleSignOut}>
                    Sign Out
                </button>
            </div>
        </div>
    );
};

export default Account;
