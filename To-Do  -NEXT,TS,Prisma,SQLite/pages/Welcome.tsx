import styles from '@/styles/welcome.module.css';
import { ThemeContext } from '@/Theme/Themestate';
import { useRouter } from 'next/router';
import { useContext } from 'react';

const Welcome: React.FC = () => {
    const router = useRouter();
    const data = useContext(ThemeContext);
    let { theme } = data;
    ;
    return (
        <div className={`${styles[`main_${theme}`]} ${styles.main}`}>
            <div className={styles.content}>
                <h1 className={styles.title}>Welcome to Your To-Do List</h1>
                <p className={styles.subtitle}>
                    Organize your tasks efficiently and boost your productivity.
                </p>
                <button className={styles.startButton} onClick={() => router.push('/auth/signin')}>
                    Get Started
                </button>
            </div>
        </div>
    );
}

export default Welcome;
