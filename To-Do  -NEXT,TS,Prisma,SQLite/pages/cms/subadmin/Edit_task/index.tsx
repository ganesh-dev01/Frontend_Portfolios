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

    useEffect(() => {
        if (session?.user?.email) {
            fetchPermissions(session.user.email);
            fetchUsers();
        }
    }, [session]);

    const fetchPermissions = async (email: string) => {
        try {
            const response = await fetch(`/api/user?email=${email}`);

            console.log('email-test-', email);

            const data = await response.json();

            console.log('data-test-', data);
            
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

    const handleEditClick = (taskId: string) => {
        // Implement edit task functionality here
    };

    const handleDeleteClick = async (taskId: string) => {
        try {
            const response = await fetch(`/api/tasks/${taskId}`, { method: 'DELETE' });
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
                                    {permissions.edit && (
                                        <button className={styles.editButton} onClick={() => handleEditClick(task.id)}>Edit</button>
                                    )}
                                    {permissions.delete && (
                                        <button className={styles.deleteButton} onClick={() => handleDeleteClick(task.id)}>Delete</button>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default SubAdminEditTask;