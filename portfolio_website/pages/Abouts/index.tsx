import React from "react";
import styles from '@/styles/Abouts.module.css'
import { useSelector } from "react-redux";

let Exp_data = useSelector<any, any>((state) => state.Exp.exp);


const Abouts: React.FC = () => {

    console.log(Exp_data[0]?.company_name || "No Data");

    return (
        <div>

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

                                </div>

                                {/* Timeline Icons */}
                                <div className="col-2">
                                    <div className="road_box">
                                        <div className="round">
                                            <img src="./Assets/Icons/trainee_icon.png" alt="Trainee Icon" className="round_icon" />
                                        </div>
                                        <div className="line line_1"></div>
                                        <div className="round">
                                            <img src="./Assets/Icons/inter_icon.png" alt="Internship Icon" className="round_icon" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Education Section */}
                        <div className="col-lg-6 col-md-12 Education">
                            <div className="row">
                                {/* Timeline Icons */}
                                <div className="col-2 pt_4">
                                    <div className="road_box">
                                        <div className="round">
                                            <img src="./Assets/Icons/college_icon.png" alt="College Icon" className="round_icon" />
                                        </div>
                                        <div className="line line_1"></div>
                                        <div className="round">
                                            <img src="./Assets/Icons/school_icon.png" alt="School Icon" className="round_icon" />
                                        </div>
                                        <div className="line line_2"></div>
                                        <div className="round">
                                            <img src="./Assets/Icons/school_icon.png" alt="School Icon" className="round_icon" />
                                        </div>
                                    </div>
                                </div>

                                {/* Education Items */}
                                <div className="col-10">
                                    <div className="content content_1">
                                        <div className="arrow"></div>
                                        <div className="details">
                                            <p className="inst_nm">
                                                Dinabandhu Andrews Institute of Technology & Management, Kolkata — BCA
                                            </p>
                                            <p className="cmplt_time">August 2022 - June 2024</p>
                                            <p className="marks">Completed with 8.43CGPA.</p>
                                        </div>
                                    </div>
                                    <div className="content content_2">
                                        <div className="arrow"></div>
                                        <div className="details">
                                            <p className="inst_nm">Naktala High School, Kolkata — 10+2 standard</p>
                                            <p className="cmplt_time">January 2020 - February 2022</p>
                                            <p className="marks">Passed with 74%</p>
                                        </div>
                                    </div>
                                    <div className="content content_3">
                                        <div className="arrow"></div>
                                        <div className="details">
                                            <p className="inst_nm">Naktala High School, Kolkata — 10th standard</p>
                                            <p className="cmplt_time">January 2013 - December 2019</p>
                                            <p className="marks">Passed with 64%</p>
                                        </div>
                                    </div>
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
