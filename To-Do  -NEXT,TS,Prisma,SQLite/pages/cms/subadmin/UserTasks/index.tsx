import { ThemeContext } from '@/Theme/Themestate';
import { useContext } from 'react';
import styles from '@/styles/admin_pages/user_tasks.module.css';

const UserTasks = () => {
    let { theme } = useContext(ThemeContext);

    // Sample data for users and their tasks
    const users = [
        {
            id: 1,
            name: "John Doe",
            email: "john@example.com",
            tasks: [
                { title: "Task 1", description: "Complete the report", createdAt: "2024-02-17", deadline: "2024-02-20" },
                { title: "Task 2", description: "Fix UI bugs", createdAt: "2024-02-15", deadline: "2024-02-22" }
            ]
        },
        {
            id: 2,
            name: "Jane Smith",
            email: "jane@example.com",
            tasks: [
                { title: "Design Logo", description: "Create a logo for the website", createdAt: "2024-02-10", deadline: "2024-02-18" }
            ]
        }
    ];

    return (
        <div className={`${styles[`main_${theme}`]} ${styles.main}`}>
            <h4 className={styles.pageTitle}>User Tasks</h4>
            {users.map(user => (
                <div key={user.id} className={styles.userSection}>
                    <h5 className={styles.userHeader}>{user.name} ({user.email})</h5>
                    <div className={styles.taskContainer}>
                        {user.tasks.map((task, index) => (
                            <div key={index} className={styles.taskCard}>
                                <h6 className={styles.taskTitle}>{task.title}</h6>
                                <p className={styles.taskDescription}>{task.description}</p>
                                <p className={styles.taskMeta}>Created At: {task.createdAt}</p>
                                <p className={styles.taskMeta}>Deadline: {task.deadline}</p>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default UserTasks;
