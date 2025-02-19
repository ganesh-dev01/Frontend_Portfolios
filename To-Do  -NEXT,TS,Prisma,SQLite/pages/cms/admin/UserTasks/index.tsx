import { ThemeContext } from '@/Theme/Themestate';
import { useContext, useEffect, useState } from 'react';
import styles from '@/styles/admin_pages/user_tasks.module.css';

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

const UserTasks = () => {
  const { theme } = useContext(ThemeContext);
  const [users, setUsers] = useState<User[]>([]);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const adminStatus = localStorage.getItem("isAdmin") === "true";
    setIsAdmin(adminStatus);

    if (adminStatus) {
      fetchUsers();
    } else {
      console.error("Unauthorized access");
    }
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await fetch('/api/users?email=admin@example.com');
      const data = await response.json();

      console.log('test-data: ', data);

      if (response.ok) {
        setUsers(data);
      } else {
        console.error('Failed to fetch users:', data.message);
      }
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  if (!isAdmin) {
    return <div>You need to be an admin to view this page.</div>;
  }

  return (
    <div className={`${styles[`main_${theme}`]} ${styles.main}`}>
      <h4 className={styles.pageTitle}>User Tasks</h4>
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
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default UserTasks;