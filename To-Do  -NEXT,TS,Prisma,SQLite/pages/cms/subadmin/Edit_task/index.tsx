import { ThemeContext } from '@/Theme/Themestate';
import { useContext, useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import styles from '@/styles/admin_pages/admin_edittask.module.css';

interface Task {
    id: string;
    title: string;
    description: string;
    createdAt: string;
    deadline: string;
}

interface User {
    id: string;
    fullName: string;
    email: string;
    tasks: Task[];
}

interface Permissions {
    view: boolean;
    edit: boolean;
    delete: boolean;
}

const SubAdminEditTask = () => {
    const { theme } = useContext(ThemeContext);
    const { data: session } = useSession();
    const [users, setUsers] = useState<User[]>([]);
    const [permissions, setPermissions] = useState<Permissions>({ view: false, edit: false, delete: false });
    const [isAuthorized, setIsAuthorized] = useState(false);
    const [editingTask, setEditingTask] = useState<Task | null>(null);

    useEffect(() => {
        if (session?.user?.email) {
            fetchPermissions(session.user.email);
            fetchUsers();
        }
    }, [session]);

    const fetchPermissions = async (email: string) => {
        try {
            const response = await fetch(`/api/user?email=${email}`);
            const data = await response.json();

            if (response.ok) {
                const user = data.find((user: User) => user.email === email);
                if (user) {
                    setPermissions({
                        view: user.accessRights.includes('view'),
                        edit: user.accessRights.includes('edit'),
                        delete: user.accessRights.includes('delete')
                    });
                    setIsAuthorized(true);
                } else {
                    console.error('Sub-admin not found');
                }
            } else {
                console.error('Failed to fetch permissions:', data.message);
            }
        } catch (error) {
            console.error('Error fetching permissions:', error);
        }
    };

    const fetchUsers = async () => {
        try {
            const response = await fetch('/api/user?email=admin@example.com');
            const data = await response.json();
            if (response.ok) {
                setUsers(data);
            } else {
                console.error('Failed to fetch users:', data.message);
            }
        } catch (error) {
            console.error('Error fetching users:', error);
        }
    };

    const handleEditClick = (task: Task) => {
        setEditingTask({
            ...task,
            deadline: task.deadline ? new Date(task.deadline).toISOString().split('T')[0] : ''
        });
    };


    const handleSaveClick = async () => {
        if (editingTask && session?.user?.email) {
            try {
                const response = await fetch(`/api/users/${editingTask.id}?email=${session.user.email}`, {
                    method: 'PUT',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        email: session.user.email,
                        title: editingTask.title,
                        description: editingTask.description,
                        deadline: new Date(editingTask.deadline).toISOString()
                    })
                });
                if (response.ok) {
                    const updatedTask = await response.json();
                    setUsers(users.map(user => ({
                        ...user,
                        tasks: user.tasks.map(task => task.id === updatedTask.id ? updatedTask : task)
                    })));
                    setEditingTask(null);
                } else {
                    console.error('Failed to update task');
                }
            } catch (error) {
                console.error('Error updating task:', error);
            }
        }
    };

    const handleDeleteClick = async (taskId: string) => {
        try {
          const response = await fetch(`/api/users/${taskId}?email=admin@example.com`, { method: 'DELETE' });
          if (response.ok) {
            setUsers(users.map(user => ({
              ...user,
              tasks: user.tasks.filter(task => task.id !== taskId)
            })));
          } else {
            console.error('Failed to delete task');
          }
        } catch (error) {
          console.error('Error deleting task:', error);
        }
      };


    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        if (editingTask) {
            setEditingTask({ ...editingTask, [e.target.name]: e.target.value });
        }
    };

    const closeModal = () => {
        setEditingTask(null);
    };

    if (!isAuthorized) {
        return <div>You need appropriate permissions to view this page.</div>;
    }

    return (
        <div className={`${styles[`main_${theme}`]} ${styles.main}`}>
            <h4 className={styles.pageTitle}>Edit Tasks</h4>
            {users.map(user => (
                <div key={user.id} className={styles.userSection}>
                    <h5 className={styles.userHeader}>{user.fullName} ({user.email})</h5>
                    <div className={styles.taskContainer}>
                        {user.tasks.map(task => (
                            <div key={task.id} className={styles.taskCard}>
                                <h6 className={styles.taskTitle}>{task.title}</h6>
                                <p className={styles.taskDescription}>{task.description}</p>
                                <p className={styles.taskMeta}>Created At: {new Date(task.createdAt).toLocaleDateString()}</p>
                                <p className={styles.taskMeta}>Deadline: {new Date(task.deadline).toLocaleDateString()}</p>
                                <div className={styles.taskActions}>
                                    {permissions.edit ? (
                                        <button className={styles.editButton} onClick={() => handleEditClick(task)}>Edit</button>
                                    ) : (
                                        <span>No Edit Access</span>
                                    )}
                                    {permissions.delete ? (
                                        <button className={styles.deleteButton} onClick={() => handleDeleteClick(task.id)}>Delete</button>
                                    ) : (
                                        <span>No Delete Access</span>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ))}

            {editingTask && (
                <div className={styles.modal}>
                    <div className={styles.modalContent}>
                        <div className={styles.modalHeader}>
                            <h5 className={styles.modalTitle}>Edit Task</h5>
                            <button className={styles.closeButton} onClick={closeModal}>&times;</button>
                        </div>
                        <div className={styles.modalBody}>
                            <input
                                className={styles.inputField}
                                type="text"
                                name="title"
                                value={editingTask.title}
                                onChange={handleInputChange}
                            />
                            <textarea
                                className={styles.inputField}
                                name="description"
                                value={editingTask.description}
                                onChange={handleInputChange}
                            />
                            <input
                                className={styles.inputField}
                                type="date"
                                name="deadline"
                                value={editingTask.deadline}
                                onChange={handleInputChange}
                            />
                            <button className={styles.saveButton} onClick={handleSaveClick}>Save</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default SubAdminEditTask;