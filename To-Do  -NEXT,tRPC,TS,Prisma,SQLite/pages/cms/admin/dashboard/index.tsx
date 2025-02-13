import { useState, useEffect, useContext } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import styles from '@/styles/admin_dashboard.module.css';
import ThemeContext from '@/Theme/Themestate';
import Modal from '@/Components/Modal/index';
import ConfirmBox from '@/Components/ConfirmBox/index';
import Signout_ConfirmBox from '@/Components/Signout_ConfirmBox';

interface Task {
    id: string;
    title: string;
    description: string;
    createdAt: string;
    userEmail: string;
    userName: string;
}

const Admin_dashboard: React.FC = () => {
    const router = useRouter();
    const data = useContext(ThemeContext);
    const { theme } = data || {};

    const [tasks, setTasks] = useState<Task[]>([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isConfirmOpen, setIsConfirmOpen] = useState(false);
    const [isSignoutOpen, setIsSignoutOpen] = useState(false);
    const [selectedTask, setSelectedTask] = useState<Task | null>(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        checkAuth();
        fetchTasks();
    }, []);

    // ✅ Admin Authentication Check
    const checkAuth = async () => {
        const token = localStorage.getItem('admin_token');
        if (!token) {
            router.push('/auth/admin/154154541');
        } else {
            setIsAuthenticated(true);
        }
    };

    const fetchTasks = async () => {
        const res = await axios.get('/api/tasks');
        setTasks(res.data);
    };

    const openModal = (task: Task) => {
        setSelectedTask(task);
        setIsModalOpen(true);
    };

    const openConfirmBox = (task: Task) => {
        setSelectedTask(task);
        setIsConfirmOpen(true);
    };

    const closeModal = () => setIsModalOpen(false);
    const closeConfirmBox = () => setIsConfirmOpen(false);
    const closeSignoutModal = () => setIsSignoutOpen(false);

    const handleUpdate = async (title: string, description: string) => {
        if (selectedTask) {
            await axios.put(`/api/tasks/${selectedTask.id}`, { title, description });
            fetchTasks();
        }
        setIsModalOpen(false);
    };

    const handleDelete = async () => {
        if (selectedTask) {
            await axios.delete(`/api/tasks/${selectedTask.id}`);
            fetchTasks();
        }
        setIsConfirmOpen(false);
    };

 
    const handleSignout = () => {
        setIsSignoutOpen(true);
    };

    const confirmSignout = () => {
        localStorage.removeItem('admin_token');
        router.push('/auth/admin/154154541');
    };

    if (!isAuthenticated) {
        return null;
    }

    return (
        <div className={`${styles[`main_${theme}`]} ${styles.main}`}>

            <div className={styles.signoutContainer}>
                <button className={styles.signoutButton} onClick={handleSignout}>Sign Out</button>
            </div>

            <div className={styles.headingcontainer}>
                <h4 className={styles.heading}>User Tasks</h4>
            </div>

            {tasks.map(task => (
                <div key={task.id} className={styles.userRow}>
                    <div className={styles.userbox}>
                        <p className={styles.username}>user: {task.userEmail}</p>
                    </div>
                    <div className={styles.taskcard}>
                        <div className={styles.taskhead}>
                            <p className={styles.tasktitle}>{task.title}</p>
                        </div>
                        <div className={styles.taskbody}>
                            <p className={styles.taskdesc}>{task.description}</p>
                            <div className={styles.timebox}>
                                <p className={styles.createddate}>Created at: {new Date(task.createdAt).toLocaleDateString()}</p>
                            </div>
                        </div>
                        <div className={styles.taskfooter}>
                            <div className={styles.cardbtn_container}>
                                <button className={styles.editcardbtn} onClick={() => openModal(task)}>Edit</button>
                            </div>
                            <div className={styles.cardbtn_container}>
                                <button className={styles.editcardbtn} onClick={() => openConfirmBox(task)}>Delete</button>
                            </div>
                        </div>
                    </div>
                </div>
            ))}

            {/* Signout Confirmation Modal */}
            {isSignoutOpen && (
                <Signout_ConfirmBox
                    isOpen={isSignoutOpen}
                    onClose={closeSignoutModal}
                    onConfirm={confirmSignout}
                />
            )}

            {/* Modal Component */}
            {isModalOpen && selectedTask && (
                <Modal
                    isOpen={isModalOpen}
                    onClose={closeModal}
                    initialTitle={selectedTask.title}
                    initialDescription={selectedTask.description}
                    onSubmit={handleUpdate}
                />
            )}

            {/* Confirm Box Component */}
            {isConfirmOpen && selectedTask && (
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
