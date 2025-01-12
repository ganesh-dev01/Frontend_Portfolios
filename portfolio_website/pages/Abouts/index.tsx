import React from "react";
import styles from '@/styles/Abouts.module.css'

const Abouts: React.FC = () => {
    return (
        <div>
            <div className="container-fluid abouts_bdy_container" id="abouts_pg">
             
                <div className="row">
                    <div className="col-12 text-center">
                        <p className="abouts_haedline">Abouts</p>
                    </div>
                </div>

                <div className="container about_main_box">
                    {/* Experience and Education Headings */}
                    <div className="row text-center">
                        <div className="col-lg-6 col-md-12">
                            <p className="Experience_hd">Experience</p>
                        </div>
                        <div className="col-6">
                            <p className="Education_hd">Education</p>
                        </div>
                    </div>

                    {/* Experience Section */}
                    <div className="row">
                        <div className="col-lg-6 col-md-12 Experience">
                            <div className="row">
                                <div className="col-10">
                                    {/* Experience Item 1 */}
                                    <div className="content content_1">
                                        <div className="arrow"></div>
                                        <div className="details">
                                            <p className="company_nm">Webskitters Academy — React JS Bootcamp</p>
                                            <p className="st_ed_time">June 2024 - Present</p>
                                            <p className="company_lc">Kolkata, West Bengal, India · On-site</p>
                                            <p className="wrk_detail">
                                                Completed intensive training in advanced JavaScript and React development through a specialized
                                                bootcamp program.
                                            </p>
                                        </div>
                                    </div>
                                    {/* Experience Item 2 */}
                                    <div className="content content_2">
                                        <div className="arrow"></div>
                                        <div className="details">
                                            <p className="company_nm">Pattern Drive Pvt Ltd — Frontend Developer (Apprenticeship)</p>
                                            <p className="st_ed_time">March 2024 - May 2024</p>
                                            <p className="company_lc">Kolkata, West Bengal, India · On-site</p>
                                            <p className="wrk_detail">
                                                Gained practical experience in frontend development, contributing to projects at Pattern Drive
                                                Private Limited during a three-month apprenticeship.
                                            </p>
                                        </div>
                                    </div>
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

                    {/* Development Process */}
                    <div className="row">
                        <div className="col-12 text-center">
                            <p className="dev_prs_hd">My development process</p>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-12">
                            <div className="dev_prs_main">
                                <div className="pr pr1">
                                    <img src="./Assets/Icons/concept_icon.png" alt="Concept" className="pr_icon" />
                                    <p className="pr_text">Concept</p>
                                </div>
                                <div className="pr_line"></div>
                                <div className="pr pr2">
                                    <img src="./Assets/Icons/design_icon.png" alt="Design" className="pr_icon" />
                                    <p className="pr_text">Design</p>
                                </div>
                                <div className="pr_line"></div>
                                <div className="pr pr3">
                                    <img src="./Assets/Icons/coding_icon.png" alt="Coding" className="pr_icon" />
                                    <p className="pr_text">Coding</p>
                                </div>
                                <div className="pr_line"></div>
                                <div className="pr pr4">
                                    <img src="./Assets/Icons/server_icon.png" alt="Deployment" className="pr_icon" />
                                    <p className="pr_text">Deployment</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Skills */}
                    <div className="row">
                        <div className="col-12 text-center">
                            <p className="skill_hd">My skills and proficiencies</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="skill_main">
                                {/* Add skills dynamically if needed */}
                                <div className="skill_box">
                                    <img src="./Assets/Icons/js_icon.png" alt="Javascript" className="skill_icon" />
                                    <p className="skill_text">Javascript</p>
                                </div>
                                <div className="skill_box">
                                    <img src="./Assets/Icons/typescript_icon.png" alt="Typescript" className="skill_icon" />
                                    <p className="skill_text">Typescript</p>
                                </div>
                                <div className="skill_box">
                                    <img src="./Assets/Icons/react_icon.png" alt="React" className="skill_icon" />
                                    <p className="skill_text">React</p>
                                </div>
                                <div className="skill_box">
                                    <img src="./Assets/Icons/redux_icon.png" alt="Redux" className="skill_icon" />
                                    <p className="skill_text">Redux</p>
                                </div>
                                <div className="skill_box">
                                    <img src="./Assets/Icons/nextjs_icon.png" alt="Next.js" className="skill_icon" />
                                    <p className="skill_text">Next.js</p>
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
