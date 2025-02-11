import styles from '@/styles/admin_dashboard.module.css'
import ThemeContext from '@/Theme/Themestate';
import { useContext } from 'react';

const Admin_dashboard: React.FC = () => {
    const data = useContext(ThemeContext);
    const { theme } = data || {};
    // const theme = 'dark';

    return (
        <div className={`${styles[`main_${theme}`]} ${styles.main}`}>
            <div className={styles.userRow}>
                <div className={styles.userbox}>
                    <p className={styles.username}>John doae</p>
                </div>

                <div className={styles.taskcard}>

                    <div className={styles.taskhead}>
                        <p className={styles.tasktitle}>Task Title</p>
                    </div>

                    <div className={styles.taskbody}>
                        <p className={styles.taskdesc}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Voluptates, doloremque.
                        </p>

                        <div className={styles.timebox}>
                            <p className={styles.createddate}>created at: 2023-07-20</p>
                            <p className={styles.deadline}>Deadline: 2023-07-20</p>
                        </div>
                    </div>

                    <div className={styles.taskfooter}>
                        <div className={styles.cardbtn_container}>
                            <button className={styles.editcardbtn}>Edit</button>
                        </div>

                        <div className={styles.cardbtn_container}>
                            <button className={styles.editcardbtn}>Delete</button>
                        </div>
                    </div>

                </div>
           

            </div>

            <div className={styles.userRow}>
                <div className={styles.userbox}>
                    <p className={styles.username}>John doae</p>
                </div>

                <div className={styles.taskcard}>

                    <div className={styles.taskhead}>
                        <p className={styles.tasktitle}>Task Title</p>
                    </div>

                    <div className={styles.taskbody}>
                        <p className={styles.taskdesc}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Voluptates, doloremque.
                        </p>

                        <div className={styles.timebox}>
                            <p className={styles.createddate}>created at: 2023-07-20</p>
                            <p className={styles.deadline}>Deadline: 2023-07-20</p>
                        </div>
                    </div>

                    <div className={styles.taskfooter}>
                        <div className={styles.cardbtn_container}>
                            <button className={styles.editcardbtn}>Edit</button>
                        </div>

                        <div className={styles.cardbtn_container}>
                            <button className={styles.editcardbtn}>Delete</button>
                        </div>
                    </div>

                </div>
           

            </div>

            <div className={styles.userRow}>
                <div className={styles.userbox}>
                    <p className={styles.username}>John doae</p>
                </div>

                <div className={styles.taskcard}>

                    <div className={styles.taskhead}>
                        <p className={styles.tasktitle}>Task Title</p>
                    </div>

                    <div className={styles.taskbody}>
                        <p className={styles.taskdesc}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Voluptates, doloremque.
                        </p>

                        <div className={styles.timebox}>
                            <p className={styles.createddate}>created at: 2023-07-20</p>
                            <p className={styles.deadline}>Deadline: 2023-07-20</p>
                        </div>
                    </div>

                    <div className={styles.taskfooter}>
                        <div className={styles.cardbtn_container}>
                            <button className={styles.editcardbtn}>Edit</button>
                        </div>

                        <div className={styles.cardbtn_container}>
                            <button className={styles.editcardbtn}>Delete</button>
                        </div>
                    </div>

                </div>
           

            </div>

        </div>
    )
}

export default Admin_dashboard; 