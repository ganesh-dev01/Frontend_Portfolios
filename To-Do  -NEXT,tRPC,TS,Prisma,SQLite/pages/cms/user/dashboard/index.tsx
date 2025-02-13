import { useContext, useState, useEffect } from 'react';
import { signOut, useSession } from "next-auth/react";
import { useRouter } from 'next/router';
import axios from 'axios';
import ThemeContext from '@/Theme/Themestate';
import Modal from '@/Components/Modal/index';
import ConfirmBox from '@/Components/ConfirmBox/index';
import guest_img from '@/public/guest.jpg';
import styles from '@/styles/user_dashboard.module.css';
import Signout_ConfirmBox from '@/Components/Signout_ConfirmBox';

interface Task {
    id: string;
    title: string;
    description: string;
    createdAt: string;
    deadline: string;
    isDone: boolean;
}

const Dashboard: React.FC = () => {
    const { data: session, status } = useSession();
    const router = useRouter();
    const themeData = useContext(ThemeContext);
    const theme = themeData?.theme;

    const [tasks, setTasks] = useState<Task[]>([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isSignoutConfirmOpen, setIsSignoutConfirmOpen] = useState(false);
    const [selectedTitle, setSelectedTitle] = useState("");
    const [selectedDescription, setSelectedDescription] = useState("");
    const [selectedTaskId, setSelectedTaskId] = useState<string | null>(null);
    const userEmail = session?.user?.email;

    // ✅ Authentication Check
    useEffect(() => {
        if (status === "unauthenticated") {
            router.push("/auth/signin");
        }
    }, [status, router]);

    // ✅ Fetch Tasks
    useEffect(() => {
        if (userEmail) {
            fetchTasks();
        }
    }, [userEmail]);

    const fetchTasks = async () => {
        const res = await axios.get(`/api/tasks?email=${userEmail}`);
        setTasks(res.data);
    };

    const handleModalToggle = (id: string | null = null, title: string = "", description: string = "") => {
        setSelectedTaskId(id);
        setSelectedTitle(title);
        setSelectedDescription(description);
        setIsModalOpen(prev => !prev);
    };

    const handleSubmit = async (title: string, description: string) => {
        if (selectedTaskId) {
            await axios.put(`/api/tasks/${selectedTaskId}`, { title, description });
        } else {
            await axios.post(`/api/tasks`, { title, description, userEmail });
        }
        fetchTasks();
        setIsModalOpen(false);
    };

    const handleMarkAsDone = async (id: string) => {
        await axios.patch(`/api/tasks/${id}`);
        fetchTasks();
    };

    const handleDelete = async (id: string) => {
        await axios.delete(`/api/tasks/${id}`);
        fetchTasks();
    };

    // ✅ Signout Confirmation
    const handleSignoutClick = () => {
        setIsSignoutConfirmOpen(true);
    };

    const confirmSignout = async () => {
        setIsSignoutConfirmOpen(false);
        await signOut({ callbackUrl: "/auth/signin" });
    };

    return (
        <div className={`${styles[`main_${theme}`]} ${styles.main}`}>

            {/* Task Modal */}
            <Modal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                initialTitle={selectedTitle}
                initialDescription={selectedDescription}
                onSubmit={handleSubmit}
            />

            {/* Signout Confirmation Modal */}
            <Signout_ConfirmBox
                isOpen={isSignoutConfirmOpen}
                message="Are you sure you want to sign out?"
                onConfirm={confirmSignout}
                onCancel={() => setIsSignoutConfirmOpen(false)}
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
                            <p className={styles.profilename}>{session?.user?.name || 'Guest'}</p>
                            <p className={styles.signout} onClick={handleSignoutClick}>Sign out</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className={`${styles[`main_content_${theme}`]} ${styles.main_content}`}>
                {/* Task List */}
                {tasks.map(task => (
                    <div key={task.id} className={styles.taskcard}>
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
                                <button className={styles.editcardbtn} onClick={() => handleModalToggle(task.id, task.title, task.description)}>
                                    Edit
                                </button>
                            </div>
                            <div className={styles.cardbtn_container}>
                                <button className={styles.donecardbtn} onClick={() => handleMarkAsDone(task.id)}>
                                    {task.isDone ? "Completed" : "Mark as done"}
                                </button>
                            </div>
                            <div className={styles.cardbtn_container}>
                                <button className={styles.deletecardbtn} onClick={() => handleDelete(task.id)}>
                                    Delete
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Dashboard;
