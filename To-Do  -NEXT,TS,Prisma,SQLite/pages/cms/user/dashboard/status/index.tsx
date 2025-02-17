import { useState, useContext } from "react";
import styles from "@/styles/user_pages/status.module.css";
import { ThemeContext } from "@/Theme/Themestate";

const UserStatus = () => {
  let { theme } = useContext(ThemeContext);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedTask, setSelectedTask] = useState<string | null>(null);

  const dummyData = [
    { title: "Task 1", description: "Pending task", createdAt: "2025-02-17", deadline: "2025-02-20", status: "Pending" },
    { title: "Task 2", description: "Ongoing task", createdAt: "2025-02-16", deadline: "2025-02-19", status: "In-progress" },
    { title: "Task 3", description: "Completed task", createdAt: "2025-02-15", deadline: "2025-02-18", status: "Completed" },
  ];

  const handleDeleteClick = (taskTitle: string) => {
    setSelectedTask(taskTitle);
    setModalOpen(true);
  };

  const confirmDelete = () => {
    console.log(`Deleting task: ${selectedTask}`);
    setModalOpen(false);
    setSelectedTask(null);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedTask(null);
  };

  const renderTable = (status: string) => (
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
        {dummyData.filter((task) => task.status === status).map((task, index) => (
          <tr key={index}>
            <td>{task.title}</td>
            <td>{task.description}</td>
            <td>{task.createdAt}</td>
            <td>{task.deadline}</td>
            <td>
              <button className={styles.actionBtn} onClick={() => handleDeleteClick(task.title)}>
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
        {renderTable("Pending")}
      </div>

      <div className={styles.section}>
        <h5 className={styles.status_hd}>In-progress</h5>
        {renderTable("In-progress")}
      </div>

      <div className={styles.section}>
        <h5 className={styles.status_hd}>Completed</h5>
        {renderTable("Completed")}
      </div>

      {/* Confirmation Modal */}
      {modalOpen && (
        <div className={styles.modalOverlay}>
          <div className={styles.modal}>
            <p>Are you sure you want to delete "{selectedTask}"?</p>
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
