import ThemeContext from '@/Theme/Themestate';
import { useContext } from 'react';
import styles from '@/styles/user_dashboard.module.css';

const Dashboard: React.FC = () => {
    const data = useContext(ThemeContext);
    const { theme } = data || {};
    // const theme='dark';

    return (
        <div className={`${styles[`main_${theme}`]} ${styles.main}`}>
            <div className={styles.upperSection}>

                <div className={styles.taskbox}>

                    <div className={styles.input_area}>
                        <label className={styles.inputlabel}>Tittle</label>
                        <input type="text" className={styles.taskinput} placeholder="Enter Task" />
                    </div>

                    <div className={styles.input_area}>
                        <label className={styles.inputlabel}>Description</label>
                        <textarea className={styles.description} placeholder="Enter Description"></textarea>
                    </div>
                    
                    <div className={styles.btn_area}>
                        <button className={styles.addbtn}>Add Task</button>
                    </div>

                </div>

                <div className={styles.accountbox}>

                </div>
            </div>

        </div>
    )
}

export default Dashboard;   