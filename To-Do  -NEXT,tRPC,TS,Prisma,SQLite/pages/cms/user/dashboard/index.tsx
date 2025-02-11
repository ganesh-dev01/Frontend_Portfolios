import ThemeContext from '@/Theme/Themestate';
import { useContext, useState } from 'react';
import guest_img from '@/public/guest.jpg';
import Modal from '@/Components/Modal/index';
import styles from '@/styles/user_dashboard.module.css';

const Dashboard: React.FC = () => {
    const data = useContext(ThemeContext);
    const { theme } = data || {};

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedTitle, setSelectedTitle] = useState("");
    const [selectedDescription, setSelectedDescription] = useState("");

    const handleModalToggle = (title: string = "", description: string = "") => {
        setSelectedTitle(title);
        setSelectedDescription(description);
        setIsModalOpen((prev) => !prev);
    };

    const handleSubmit = (title: string, description: string) => {
        console.log("Task Updated:", { title, description });
        setIsModalOpen(false);
    };

    return (
        <div className={`${styles[`main_${theme}`]} ${styles.main}`}>
            {/* Modal Component */}
            <Modal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                initialTitle={selectedTitle}
                initialDescription={selectedDescription}
                onSubmit={handleSubmit}
            />

            <div className={styles.upperSection}>
                <div className={styles.tasksection}>
                    <button className={styles.assigntaskbtn} onClick={() => handleModalToggle()}>
                        Assign new task
                    </button>
                </div>

                <div className={styles.accountbox}>
                    <div className={styles.profilebox}>
                        <div className={styles.avatarbox}>
                            <img src={guest_img.src} alt="avatar" />
                        </div>
                        <div className={styles.userbox}>
                            <p className={styles.profilename}>John Doe</p>
                            <p className={styles.signout}>Sign out</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className={`${styles[`main_content_${theme}`]} ${styles.main_content}`}>
                {/* Task Card */}
                <div className={styles.taskcard}>
                    <div className={styles.taskhead}>
                        <p className={styles.tasktitle}>Task Title</p>
                    </div>
                    <div className={styles.taskbody}>
                        <p className={styles.taskdesc}>
                            This is a sample task description.
                        </p>
                        <div className={styles.timebox}>
                            <p className={styles.createddate}>Created at: 2023-07-20</p>
                            <p className={styles.deadline}>Deadline: 2023-07-20</p>
                        </div>
                    </div>
                    <div className={styles.taskfooter}>
                        <div className={styles.cardbtn_container}>
                            <button
                                className={styles.editcardbtn}
                                onClick={() => handleModalToggle("Task Title", "This is a sample task description.")}>
                                Edit
                            </button>
                        </div>
                        <div className={styles.cardbtn_container}>
                            <button className={styles.editcardbtn}>Mark as done</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
