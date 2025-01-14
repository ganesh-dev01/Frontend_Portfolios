import { ExperienceProps } from "@/typescript/interfaces";
import { createSlice } from "@reduxjs/toolkit";




const initialState: ExperienceProps = {
    exp: [
        {
            company_name: "Test Company 1",
            start_date: "Jan 2020",
            end_date: "Dec 2022",
            company_location: "City A",
            description: "Worked on developing scalable web applications.",
        },
        {
            company_name: "Test Company 2",
            start_date: "Jan 2020",
            end_date: "Dec 2022",
            company_location: "City B",
            description: "Focused on frontend development using React and TypeScript.",
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
