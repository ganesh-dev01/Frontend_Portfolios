import { useContext, useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import ThemeContext from "@/Theme/Themestate";
import styles from "@/styles/user/status.module.css";

const Status: React.FC = () => {
    const theme_data = useContext(ThemeContext);
    const [canceledAppointments, setCanceledAppointments] = useState<any[]>([]);
    const [userEmail, setUserEmail] = useState<string | null>(null);

    useEffect(() => {
        const fetchUserSession = async () => {
            const { data, error } = await supabase.auth.getSession();
            if (error) {
                console.error("Error fetching session:", error);
                return;
            }
            setUserEmail(data.session?.user?.email || null);
        };
        
        fetchUserSession();
    }, []);

    useEffect(() => {
        const fetchCanceledAppointments = async () => {
            if (!userEmail) return;

            const { data, error } = await supabase
                .from("status")
                .select("*")
                .eq("booked_person", userEmail); 

            if (error) {
                console.error("Error fetching canceled appointments:", error);
            } else {
                setCanceledAppointments(data);
            }
        };

        fetchCanceledAppointments();
    }, [userEmail]);

    return (
        <div className={styles[`main_${theme_data?.theme}`]}>
            <h4 className={styles.heading}>Canceled Appointments</h4>

            <div className={styles.container}>
                {canceledAppointments.length > 0 ? (
                    canceledAppointments.map((appointment) => (
                        <div key={appointment.id} className={styles.card}>
                            <h5 className={styles.doctorName}>Dr. {appointment.doctorname}</h5>
                            <p className={styles.reason}><strong>Reason:</strong> {appointment.reason}</p>
                            <p className={styles.date}>
                                <strong>New Date:</strong> {appointment.postpone_date || "Not Rescheduled"}
                            </p>
                        </div>
                    ))
                ) : (
                    <p className={styles.noData}>No canceled appointments found.</p>
                )}
            </div>
        </div>
    );
};

export default Status;
