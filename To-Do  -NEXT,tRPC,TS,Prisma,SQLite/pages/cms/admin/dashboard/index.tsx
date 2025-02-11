import { useState } from 'react';
import styles from '@/styles/admin_dashboard.module.css';
import ThemeContext from '@/Theme/Themestate';
import { useContext } from 'react';
import Modal from '@/Components/Modal/index';
import ConfirmBox from '@/Components/ConfirmBox/index';

const Admin_dashboard: React.FC = () => {
    const data = useContext(ThemeContext);
    const { theme } = data || {};

    // Modal states
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedTask, setSelectedTask] = useState({ title: '', description: '' });

    // ConfirmBox state
    const [isConfirmOpen, setIsConfirmOpen] = useState(false);

    // Open Modal with Task Data
    const openModal = (title: string, description: string) => {
        setSelectedTask({ title, description });
        setIsModalOpen(true);
    };

    // Open Confirm Box
    const openConfirmBox = () => setIsConfirmOpen(true);

    // Close Modal & Confirm Box
    const closeModal = () => setIsModalOpen(false);
    const closeConfirmBox = () => setIsConfirmOpen(false);

    // Handle Delete Confirmation
    const handleDelete = () => {
        console.log('Task Deleted!');
        closeConfirmBox();
    };

    return (
        <div className={`${styles[`main_${theme}`]} ${styles.main}`}>
            <div className={styles.userRow}>
                <div className={styles.userbox}>
                    <p className={styles.username}>John Doe</p>
                </div>

                <div className={styles.taskcard}>
                    <div className={styles.taskhead}>
                        <p className={styles.tasktitle}>Task Title</p>
                    </div>

                    <div className={styles.taskbody}>
                        <p className={styles.taskdesc}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Voluptates, doloremque.
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
                                onClick={() => openModal('Task Title', 'Lorem ipsum dolor sit amet consectetur.')}
                            >
                                Edit
                            </button>
                        </div>

                        <div className={styles.cardbtn_container}>
                            <button className={styles.editcardbtn} onClick={openConfirmBox}>
                                Delete
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Modal Component */}
            {isModalOpen && (
                <Modal
                    isOpen={isModalOpen}
                    onClose={closeModal}
                    initialTitle={selectedTask.title}
                    initialDescription={selectedTask.description}
                    onSubmit={() => console.log('Updated Task!')}
                />
            )}

            {/* Confirm Box Component */}
            {isConfirmOpen && (
                <ConfirmBox
                    isOpen={isConfirmOpen}
                    onClose={closeConfirmBox}
                    onConfirm={handleDelete}
                />
            )}
        </div>
    );
};

export default Admin_dashboard;
