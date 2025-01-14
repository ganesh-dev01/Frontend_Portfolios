import { ExperienceProps } from "@/typescript/interfaces";
import { createSlice } from "@reduxjs/toolkit";




const initialState: ExperienceProps = {
    exp: [
        {
            company_name: "Webskitters Academy — React Developer Trainee",
            start_date: "June 2024",
            end_date: "Present",
            company_location: "Kolkata, West Bengal, India · On-site",
            description: `Completed intensive training in advanced JavaScript and React development 
            through a specialized bootcamp program.`,
        },
        {
            company_name: "Pattern Drive Pvt Ltd — Frontend Developer (Apprenticeship)",
            start_date: "March 2024",
            end_date: "May 2024",
            company_location: "Kolkata, West Bengal, India · On-site",
            description: `Gained practical experience in frontend development, contributing to projects at
             Pattern Drive Private Limited during a three-month apprenticeship`,
        },
    ]
};


const ExperienceSlice = createSlice({
    name: "experience",
    initialState,
    reducers: {},
});

let ExpReducers = ExperienceSlice.reducer;

export default ExpReducers;
