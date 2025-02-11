import styles from '@/styles/Component_styles/confirm.module.css';

interface ConfirmBoxProps {
    isOpen: boolean;
    onClose: () => void;
    onConfirm: () => void;
}

const ConfirmBox: React.FC<ConfirmBoxProps> = ({ isOpen, onClose, onConfirm }) => {
    if (!isOpen) return null;

    return (
        <div className={styles.confirmOverlay}>
            <div className={styles.confirmBox}>
                <p className={styles.confirmMessage}>Are you sure you want to delete?</p>
                <div className={styles.buttonContainer}>
                    <button className={styles.yesButton} onClick={onConfirm}>Yes</button>
                    <button className={styles.noButton} onClick={onClose}>No</button>
                </div>
            </div>
        </div>
    );
};

export default ConfirmBox;
