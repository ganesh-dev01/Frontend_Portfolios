import React from "react";
import styles from '@/styles/Abouts.module.css';
import { useSelector } from "react-redux";
import icon1 from '../../public/assets/Icons/inter_icon.png';
import icon2 from '../../public/assets/Icons/trainee_icon.png';
import icon3 from '../../public/assets/Icons/college_icon.png';
import icon4 from '../../public/assets/Icons/school_icon.png';

import icon5 from '../../public/assets/Icons/concept_icon.png';
import icon6 from '../../public/assets/Icons/design_icon.png';
import icon7 from '../../public/assets/Icons/coding_icon.png';
import icon8 from '../../public/assets/Icons/server_icon.png';

const Abouts: React.FC = () => {
    let Exp_data = useSelector<any>((state: any) => state.Exp.exp) as any;

    let Edu_data = useSelector<any>((state: any) => state.Edu.edu) as any;

    let Skill_data = useSelector<any>((state: any) => state.Skill.skill) as any;

    return (
        <div className="page" id='abouts_pg'>

            <div className={`container-fluid ${styles.abouts_bdy_container}`} id="abouts_pg">

                <div className="row">
                    <div className="col-12 text-center">
                        <p className={styles.abouts_haedline}>The Road I’ve Taken</p>
                    </div>
                </div>

                <div className={`${styles.about_main_box} container`}>

                    <div className="row text-center">
                        <div className="col-lg-6 col-md-12">
                            <p className={styles.Experience_hd}>Experience</p>
                        </div>
                        <div className="col-6">
                            <p className={styles.Education_hd}>Education</p>
                        </div>
                    </div>

                    <div className="row">

                        <div className={`col-lg-6 col-md-12 ${styles.Experience}`}>
                            <div className="row">
                                <div className="col-10">
                                    {Exp_data?.map((item: any, index: number) => (
                                        <div key={item.company_name} className={`${styles.content} ${styles[`content_${index + 1}`]}`}>
                                            <div className={styles.arrow}></div>
                                            <div className={styles.details}>
                                                <p className={styles.company_nm} style={{ color: '#ECDFCC' }}>{item.company_name}</p>
                                                <p className={styles.st_ed_time}>{item.start_date} - {item.end_date}</p>
                                                <p className={styles.company_lc}>{item.company_location}</p>
                                                <p className={styles.wrk_detail}>{item.description}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {/* Static Timeline */}
                                <div className="col-2">
                                    <div className={styles.road_box}>
                                        <div className={styles.round}>
                                            <img src={icon2.src} className={styles.round_icon} />
                                        </div>
                                        <div className={`${styles.line} ${styles.line_1}`}></div>
                                        <div className={styles.round}>
                                            <img src={icon1.src} className={styles.round_icon} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className={`text-center ${styles.mb_education_hd}`}>
                            <p className={`${styles.Education_hd} ${styles.Education_hd2}`}>Education</p>
                        </div>

                        <div className={`col-lg-6 col-md-12 ${styles.Education}`}>

                            <div className="row">


                                {/* Static Timeline */}

                                <div className="col-2 pt-4">

                                    <div className={styles.road_box}>
                                        <div className={styles.round}>
                                            <img src={icon3.src} className={styles.round_icon} />
                                        </div>
                                        <div className={`${styles.line} ${styles.line_1}`}></div>
                                        <div className={styles.round}>
                                            <img src={icon4.src} className={styles.round_icon} />
                                        </div>
                                        <div className={`${styles.line} ${styles.line_2}`}></div>
                                        <div className={styles.round}>
                                            <img src={icon4.src} className={styles.round_icon} />
                                        </div>
                                    </div>

                                </div>

                                <div className="col-10">

                                    {Edu_data?.map((item: any, index: number) => (
                                        <div key={item.institute_name} className={`${styles.content} ${styles[`content_${index + 1}`]}`}>
                                            <div className={styles.arrow}></div>
                                            <div className={styles.details}>
                                                <p className={styles.inst_nm} style={{ color: '#ECDFCC' }}>{item.institute_name}</p>
                                                <p className={styles.cmplt_time}>{item.start_date} - {item.end_date}</p>
                                                <p className={styles.marks}>{item.marks}</p>
                                            </div>
                                        </div>
                                    ))}

                                </div>
                            </div>
                        </div>


                    </div>

                    <div className="row">
                        <div className="col-12 text-center">
                            <p className={styles.dev_prs_hd}>My Workflow 👨‍💻</p>
                        </div>
                    </div>


                    <div className="row">
                        <div className="col-12">
                            <div className={styles.dev_prs_main}>
                                <div className={`${styles.pr} ${styles.pr1}`}>
                                    <img src={icon5.src} className={styles.pr_icon} />
                                    <p className={styles.pr_text}>Concept</p>
                                </div>
                                <div className={styles.pr_line}></div>
                                <div className={`${styles.pr} ${styles.pr2}`}>
                                    <img src={icon6.src} className={styles.pr_icon} />
                                    <p className={styles.pr_text}>Design</p>
                                </div>
                                <div className={styles.pr_line}></div>
                                <div className={`${styles.pr} ${styles.pr3}`}>
                                    <img src={icon7.src} className={styles.pr_icon} />
                                    <p className={styles.pr_text}>Coding</p>
                                </div>
                                <div className={styles.pr_line}></div>
                                <div className={`${styles.pr} ${styles.pr4}`}>
                                    <img src={icon8.src} className={styles.pr_icon} />
                                    <p className={styles.pr_text}>Deployment</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-12 text-center">
                            <p className={styles.skill_hd}>Areas of expertise</p>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-12">
                            <div className={styles.skill_main}>
                                {Skill_data?.map((item: any, index: number) => (
                                    <div key={item.id} className={styles.skill_box}>
                                        <img src={item.icon} className={styles.skill_icon} />
                                        <p className={styles.skill_text}>{item.skill_name}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>



                </div>
            </div>
        </div>
    );
};

export default Abouts;
