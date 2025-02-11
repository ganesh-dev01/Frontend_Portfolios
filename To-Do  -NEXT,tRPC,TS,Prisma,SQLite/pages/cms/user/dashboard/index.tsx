import ThemeContext from '@/Theme/Themestate';
import { useContext, useState } from 'react';
import guest_img from '@/public/guest.jpg'
import styles from '@/styles/user_dashboard.module.css';

const Dashboard: React.FC = () => {
    const data = useContext(ThemeContext);
    // const { theme } = data || {};
    const theme='dark';

    const [taskbox, setTaskbox] = useState(false);

    const handleTaskbox = () => {
       (!taskbox)? setTaskbox(true) : setTaskbox(false);
    }

    return (
        <div className={`${styles[`main_${theme}`]} ${styles.main}`}>
            <div className={styles.upperSection}>

                {
                    (taskbox) ?
                        (
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
                                    <p className={styles.liftupbtn} onClick={handleTaskbox}>^ Lift up</p>
                                    <button className={styles.addbtn}>Add Task</button>
                                </div>

                            </div>
                        ):
                        
                        (
                            <div className={styles.tasksection}>
                                <button className={styles.assigntaskbtn}
                                    onClick={ handleTaskbox}>Assign new task</button>
                            </div>
                        )
                }

                <div className={styles.accountbox}>
                    <div className={styles.profilebox}>

                        <div className={styles.avatarbox}>
                            <img src={guest_img.src} alt="avatar" />
                        </div>
                        <div className={styles.userbox}>
                            <p className={styles.profilename}>John Doe</p>
                            <p className={styles.signout}>Sign out</p>
                        </div>
                    </div>
                </div>
            </div>


            <div className={`${styles[`main_content_${theme}`]} ${styles.main_content}`}>

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
                            <button className={styles.editcardbtn}>Mark as done</button>
                        </div>
                    </div>

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
                            <button className={styles.editcardbtn}>Mark as done</button>
                        </div>
                    </div>

                </div>

            </div>


        </div>
    )
}

export default Dashboard;   