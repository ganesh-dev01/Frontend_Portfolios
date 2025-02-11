import ThemeContext from '@/Theme/Themestate';
import { useContext } from 'react';
import styles from '@/styles/user_dashboard.module.css';

const Dashboard: React.FC = () => {
    const data = useContext(ThemeContext);
    const { theme } = data || {};

    return (
        <div className={`${styles[`main_${theme}`]} ${styles.main}`}>

            <div className={styles.upperNav}>
                <div className={styles.taskbox}>

                </div>
                <div className={styles.accountbox}>

                </div>
            </div>

        </div>
    )
}

export default Dashboard;   