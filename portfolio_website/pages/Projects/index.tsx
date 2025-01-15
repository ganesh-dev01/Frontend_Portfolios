import styles from '@/styles/Projects.module.css'
import { useSelector } from 'react-redux';
import addicon from '../../public/assets/Icons/add_icon.png';

const Projects: React.FC = () => {

    let project_data = useSelector((state: any) => state.Project.project) as any;

    return (
        <div className='page'>
            <div className={`container-fluid ${styles.project_bdy_container}`} id="projects_pg">

                <div className="row">
                    <div className="col-12 text-center">
                        <h2 className={styles.projet_headline}>What I’ve Built</h2>
                    </div>
                </div>

                <div className={`row ${styles.projects_row}`}>

                    {
                        project_data?.map((item: any, index: number) =>
                            <>
                                <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
                                    <div className={styles.project_card}>

                                        <div className={styles.icon_box}>
                                            <img src={item.img} className={styles.project_icon} />
                                        </div>

                                        <div className="row no-gutters">
                                            <div className="col-4">
                                                <p className={styles.title_hd}>Title:</p>
                                            </div>
                                            <div className="col-8">
                                                <p className={styles.title_text}>{item.title}</p>
                                            </div>
                                            <div className="col-4">
                                                <p className={styles.tech_hd}>Tech stack:</p>
                                            </div>
                                            <div className="col-8">
                                                <p className={styles.tech_text}>{item.tech}</p>
                                            </div>

                                            <div className="col-12">
                                                <p className={styles.desc_text}>{item.desc}</p>
                                            </div>
                                        </div>

                                        <div className={styles.overlay}>
                                            <a href={item.live} target="_blank">
                                                <button className={`${styles.btn} ${styles.btn_primary}`}>
                                                    View
                                                </button>
                                            </a>
                                            <a href={item.code}
                                                target="_blank">
                                                <button className={`${styles.btn} ${styles.btn_secondary}`}>
                                                    Code
                                                </button>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )
                    }

                    <div className={`col-lg-8 col-md-6 col-sm-12 text-center ${styles.coming_soon_container}`}>
                        <img src={addicon.src} className={styles.add_icon} alt="Add Icon" />
                        <p className={styles.coming_soon_text}>
                            More Exciting Projects 👨‍💻<br></br>
                            Are Being Added <br></br>
                            Soon!
                        </p>
                    </div>


                </div>


            </div >
        </div>
    )
}

export default Projects; 