import styles from '@/styles/LoadingIndicator.module.css';

const LoadingIndicator = () => {
    return (
        <div className={styles.loadingOverlay}>
            <div className={styles.spinner}></div>
        </div>
    );
};

export default LoadingIndicator;