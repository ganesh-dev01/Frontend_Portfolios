import { ThemeContext } from '@/Theme/Themestate';
import { useContext, useEffect, useState } from 'react';
import { IoMdAddCircle, IoMdClose } from 'react-icons/io';
import { FaTable, FaThLarge } from 'react-icons/fa';
import { signOut, useSession } from "next-auth/react";
import styles from '@/styles/user_pages/dashboard.module.css';
import { useRouter } from 'next/router';

interface Task {
    id: string;
    title: string;
    description: string;
    createdAt: string;
    deadline: string;
    status: 'PENDING' | 'IN_PROGRESS' | 'COMPLETED';
}

const UserDashboard: React.FC = () => {
    let { theme } = useContext(ThemeContext);
    const [view, setView] = useState<'table' | 'card'>('table');
    const [tasks, setTasks] = useState<Task[]>([]);
    const [taskFormData, setTaskFormData] = useState({ title: '', description: '', deadline: '' });
    const [showModal, setShowModal] = useState(false);
    const [editingTask, setEditingTask] = useState<Task | null>(null);

    const { data: session, status } = useSession();
    const router = useRouter();

    useEffect(() => {
        if (status === "unauthenticated") {
            router.push("/auth/signin");
        } else {
            fetchTasks();
        }
    }, [status, router]);

    const fetchTasks = async () => {
        try {
            const response = await fetch('/api/tasks');
            const data = await response.json();
            if (response.ok) {
                setTasks(data);
            } else {
                console.error('Failed to fetch tasks:', data.message);
            }
        } catch (error) {
            console.error('Error fetching tasks:', error);
        }
    };

    const handleAddTask = async () => {
        console.log("Submitting task data:", taskFormData);  // Log the form data before submitting
        try {
            const method = editingTask ? 'PUT' : 'POST';
            const url = editingTask ? `/api/tasks/${editingTask.id}` : '/api/tasks';

            const response = await fetch(url, {
                method,
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    title: taskFormData.title,
                    description: taskFormData.description,
                    deadline: new Date(taskFormData.deadline).toISOString(),
                }),
            });

            const data = await response.json();

            if (response.ok) {
                if (editingTask) {
                    // Update task
                    setTasks(tasks.map(task => (task.id === editingTask.id ? data : task)));
                } else {
                    // Add new task
                    setTasks([...tasks, data]);
                }

                // Reset form and close modal
                setTaskFormData({ title: '', description: '', deadline: '' });
                setEditingTask(null);
                setShowModal(false);
            } else {
                console.error('Failed to save task:', data.message);
            }
        } catch (error) {
            console.error('Error saving task:', error);
        }
    };

    const handleEditTask = (task: Task) => {
        console.log('Editing task:', task);
        setTaskFormData({
            title: task.title,
            description: task.description,
            deadline: new Date(task.deadline).toISOString().split('T')[0],
        });
        setEditingTask(task);
        setShowModal(true);
    };

    const handleDeleteTask = async (taskId: string) => {
        try {
            const response = await fetch(`/api/tasks/${taskId}`, { method: 'DELETE' });
            if (response.ok) {
                setTasks(tasks.filter(task => task.id !== taskId));
            } else {
                console.error('Failed to delete task');
            }
        } catch (error) {
            console.error('Error deleting task:', error);
        }
    };

    const handleStatusChange = async (task: Task, newStatus: 'PENDING' | 'IN_PROGRESS' | 'COMPLETED') => {
        try {
            if (task.status === newStatus) return;

            const updatedTask = { ...task, status: newStatus };

            setTasks(tasks.map(t => (t.id === task.id ? updatedTask : t)));

            const response = await fetch(`/api/tasks/${task.id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ status: newStatus }),
            });

            if (!response.ok) {
                console.error('Failed to update task status');
            }
        } catch (error) {
            console.error('Error updating task status:', error);
        }
    };

    return (
        <div className={`${styles[`main_${theme}`]} ${styles.main}`}>
            {showModal && (
                <div className={styles[`modal_${theme}`]}>
                    <div className={styles.close_btn} onClick={() => setShowModal(false)}>
                        <IoMdClose />
                    </div>
                    <div className={styles.modal_content}>
                        <h2 className={styles.modal_heading}>{editingTask ? 'Edit Task' : 'Add New Task'}</h2>
                        <label className={styles.modal_label}>Title</label>
                        <input
                            type="text"
                            className={styles.modal_input}
                            value={taskFormData.title}
                            onChange={(e) => setTaskFormData({ ...taskFormData, title: e.target.value })}
                            placeholder="Enter task title"
                        />
                        <label className={styles.modal_label}>Description</label>
                        <textarea
                            className={styles.modal_textarea}
                            value={taskFormData.description}
                            onChange={(e) => setTaskFormData({ ...taskFormData, description: e.target.value })}
                            placeholder="Enter task description"
                        />
                        <label className={styles.modal_label}>Deadline</label>
                        <input
                            type="date"
                            className={styles.modal_input}
                            value={taskFormData.deadline}
                            onChange={(e) => setTaskFormData({ ...taskFormData, deadline: e.target.value })}
                        />
                        <button className={styles.modal_button} onClick={handleAddTask}>Submit</button>
                    </div>
                </div>
            )}

            <div className={styles.header}>
                <button className={styles.addtaskbtn} onClick={() => setShowModal(true)}>
                    <IoMdAddCircle /> Add new task
                </button>
            </div>

            <div className={styles.navbar}>
                <button className={`${styles.navbtn} ${view === 'table' ? styles.active : ''}`} onClick={() => setView('table')}>
                    <FaTable /> Table View
                </button>
                <button className={`${styles.navbtn} ${view === 'card' ? styles.active : ''}`} onClick={() => setView('card')}>
                    <FaThLarge /> Card View
                </button>
            </div>

            <div className={styles.body}>
                {view === 'table' ? (
                    <div className={styles.table_container}>
                        <table className={styles.task_table}>
                            <thead>
                                <tr>
                                    <th>Title</th>
                                    <th>Description</th>
                                    <th>Created At</th>
                                    <th>Deadline</th>
                                    <th>Action</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {tasks.map((task) => (
                                    <tr key={task.id}>
                                        <td>{task.title}</td>
                                        <td>{task.description}</td>
                                        <td>{new Date(task.createdAt).toLocaleDateString()}</td>
                                        <td>{new Date(task.deadline).toLocaleDateString()}</td>
                                        <td>
                                            <button className={styles.edit_btn} onClick={() => handleEditTask(task)}>Edit</button>
                                            <button className={styles.delete_btn} onClick={() => handleDeleteTask(task.id)}>Delete</button>
                                        </td>
                                        <td>
                                            <label>
                                                <input
                                                    type="radio"
                                                    name={`status-${task.id}`}
                                                    checked={task.status === 'PENDING'}
                                                    onChange={() => handleStatusChange(task, 'PENDING')}
                                                /> Pending
                                            </label>
                                            <label>
                                                <input
                                                    type="radio"
                                                    name={`status-${task.id}`}
                                                    checked={task.status === 'IN_PROGRESS'}
                                                    onChange={() => handleStatusChange(task, 'IN_PROGRESS')}
                                                /> In Progress
                                            </label>
                                            <label>
                                                <input
                                                    type="radio"
                                                    name={`status-${task.id}`}
                                                    checked={task.status === 'COMPLETED'}
                                                    onChange={() => handleStatusChange(task, 'COMPLETED')}
                                                /> Completed
                                            </label>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                ) : (
                    <h4>No card view implemented yet</h4>
                )}
            </div>
        </div>
    );
};

export default UserDashboard;