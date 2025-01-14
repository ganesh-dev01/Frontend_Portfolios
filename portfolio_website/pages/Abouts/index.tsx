import React from "react";
import styles from '@/styles/Abouts.module.css';
import { useSelector } from "react-redux";
import icon1 from '@/assets/Icons/inter_icon.png';
import icon2 from '@/assets/Icons/trainee_icon.png';
import icon3 from '@/assets/Icons/college_icon.png';
import icon4 from '@/assets/Icons/school_icon.png';

const Abouts: React.FC = () => {
    let Exp_data = useSelector<any>((state: any) => state.Exp.exp);

    let Edu_data = useSelector<any>((state: any) => state.Edu.edu);

    return (
        <div className="page">

            <div className="container-fluid abouts_bdy_container" id="abouts_pg">

                <div className="row">
                    <div className="col-12 text-center">
                        <p className={styles.abouts_haedline}>Abouts</p>
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



                </div>
            </div>
        </div>
    );
};

export default Abouts;
