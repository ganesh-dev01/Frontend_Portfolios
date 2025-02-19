import { ThemeContext } from '@/Theme/Themestate';
import { useContext, useEffect, useState } from 'react';
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

const AdminEditTask = () => {
  const { theme } = useContext(ThemeContext);
  const [users, setUsers] = useState<User[]>([]);
  const [editingTask, setEditingTask] = useState<Task | null>(null);
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

  const handleSaveClick = async () => {
    if (editingTask) {
      try {
        const response = await fetch(`/api/users/${editingTask.id}?email=admin@example.com`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (editingTask) {
      setEditingTask({ ...editingTask, [e.target.name]: e.target.value });
    }
  };

  const closeModal = () => {
    setEditingTask(null);
  };

  if (!isAdmin) {
    return <div>You need to be an admin to view this page.</div>;
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
                  <button className={styles.editButton} onClick={() => handleEditClick(task)}>Edit</button>
                  <button className={styles.deleteButton} onClick={() => handleDeleteClick(task.id)}>Delete</button>
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

export default AdminEditTask;