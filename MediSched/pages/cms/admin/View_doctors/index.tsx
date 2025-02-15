import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styles from "@/styles/admin/view_doctor.module.css";
import { supabase } from "@/lib/supabaseClient";

const View_doctor: React.FC = () => {
    const [doctors, setDoctors] = useState<any[]>([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [deleteId, setDeleteId] = useState<string | null>(null);


    useEffect(() => {
        const fetchDoctors = async () => {
            const { data, error } = await supabase.from("doctorSignup").select("*");
            if (error) {
                toast.error(`Error fetching data: ${error.message}`);
            } else {
                setDoctors(data || []);
            }
        };
        fetchDoctors();
    }, []);


    const handleOpenModal = (id: string) => {
        setDeleteId(id);
        setIsModalOpen(true);
    };


    const handleCloseModal = () => {
        setIsModalOpen(false);
        setDeleteId(null);
    };

    const handleConfirmDelete = async () => {
        if (deleteId) {
            const { error } = await supabase.from("doctorSignup").delete().match({ id: deleteId });

            if (error) {
                toast.error(`Error deleting doctor: ${error.message}`);
            } else {
                toast.success("Doctor deleted successfully!");
                setDoctors(doctors.filter((doctor) => doctor.id !== deleteId));
            }
        }
        handleCloseModal();
    };

    return (
        <div className={styles.main}>
            <h4 className={styles.title}>Available Doctors</h4>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <th>Doctor Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Specialization</th>
                        <th>Username</th>
                        <th>Password</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {doctors.map((doctor) => (
                        <tr key={doctor.id}>
                            <td>{doctor.doctorname}</td>
                            <td>{doctor.email}</td>
                            <td>{doctor.phone}</td>
                            <td>{doctor.specialization}</td>
                            <td>{doctor.username}</td>
                            <td>{doctor.password}</td>
                            <td>
                                <button className={styles.deleteButton} onClick={() => handleOpenModal(doctor.id)}>
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* Delete Confirmation Modal */}
            {isModalOpen && (
                <div className={styles.modalOverlay}>
                    <div className={styles.modalContent}>
                        <h3>Are you sure you want to delete?</h3>
                        <div className={styles.buttonContainer}>
                            <button className={styles.yesButton} onClick={handleConfirmDelete}>Yes</button>
                            <button className={styles.noButton} onClick={handleCloseModal}>No</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default View_doctor;
