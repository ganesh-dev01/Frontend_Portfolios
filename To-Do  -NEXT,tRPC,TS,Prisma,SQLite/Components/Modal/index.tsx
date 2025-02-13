import { useContext, useState } from "react";
import styles from "@/styles/Component_styles/modal.module.css";
import ThemeContext from "@/Theme/Themestate";

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    initialTitle: string;
    initialDescription: string;
    onSubmit: (title: string, description: string) => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, initialTitle, initialDescription, onSubmit }) => {
    const [title, setTitle] = useState(initialTitle);
    const [description, setDescription] = useState(initialDescription);

    if (!isOpen) return null;

    const data = useContext(ThemeContext);
    const { theme } = data || {};



    return (
        <div className={styles[`modalOverlay_${theme}`]}>
            <div className={styles.modalContent}>
                <button className={styles.closeButton} onClick={onClose}>×</button>
                <h2 className={styles.modalTitle}>Task</h2>

                <label className={styles.modalLabel}>Title</label>
                <input
                    type="text"
                    className={styles.modalInput}
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />

                <label className={styles.modalLabel}>Description</label>
                <textarea
                    className={styles.modalTextarea}
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />

                <button className={styles.submitButton} onClick={() => onSubmit(title, description)}>
                    Submit
                </button>
            </div>
        </div>
    );
};

export default Modal;
