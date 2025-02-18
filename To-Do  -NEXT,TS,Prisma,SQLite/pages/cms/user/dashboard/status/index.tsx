import { useState, useContext, useEffect } from "react";
import styles from "@/styles/user_pages/status.module.css";
import { ThemeContext } from "@/Theme/Themestate";

interface Task {
  id: string;
  title: string;
  description: string;
  createdAt: string;
  deadline: string;
  status: 'PENDING' | 'IN_PROGRESS' | 'COMPLETED';
}

const UserStatus = () => {
  let { theme } = useContext(ThemeContext);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedTask, setSelectedTask] = useState<string | null>(null);
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    fetchTasks();
  }, []);

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

  const handleDeleteClick = (taskId: string) => {
    setSelectedTask(taskId);
    setModalOpen(true);
  };

  const confirmDelete = async () => {
    try {
      const response = await fetch(`/api/tasks/${selectedTask}`, { method: 'DELETE' });
      if (response.ok) {
        setTasks(tasks.filter(task => task.id !== selectedTask));
        setModalOpen(false);
        setSelectedTask(null);
      } else {
        console.error('Failed to delete task');
      }
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedTask(null);
  };

  const renderTable = (status: 'PENDING' | 'IN_PROGRESS' | 'COMPLETED') => (
    <table className={styles.table}>
      <thead>
        <tr>
          <th>Title</th>
          <th>Description</th>
          <th>Created At</th>
          <th>Deadline</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {tasks.filter((task) => task.status === status).map((task) => (
          <tr key={task.id}>
            <td>{task.title}</td>
            <td>{task.description}</td>
            <td>{new Date(task.createdAt).toLocaleDateString()}</td>
            <td>{new Date(task.deadline).toLocaleDateString()}</td>
            <td>
              <button className={styles.actionBtn} onClick={() => handleDeleteClick(task.id)}>
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );

  return (
    <div className={`${styles[`main_${theme}`]} ${styles.main}`}>
      <h4>To-Do Status</h4>

      <div className={styles.section}>
        <h5 className={styles.status_hd}>Pending</h5>
        {renderTable('PENDING')}
      </div>

      <div className={styles.section}>
        <h5 className={styles.status_hd}>In-progress</h5>
        {renderTable('IN_PROGRESS')}
      </div>

      <div className={styles.section}>
        <h5 className={styles.status_hd}>Completed</h5>
        {renderTable('COMPLETED')}
      </div>

      {/* Confirmation Modal */}
      {modalOpen && (
        <div className={styles.modalOverlay}>
          <div className={styles.modal}>
            <p>Are you sure you want to delete this task?</p>
            <div className={styles.modalActions}>
              <button className={styles.confirmBtn} onClick={confirmDelete}>Yes</button>
              <button className={styles.cancelBtn} onClick={closeModal}>No</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserStatus;