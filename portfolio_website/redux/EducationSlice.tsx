import { EducationProps } from "@/typescript/interfaces";
import { createSlice } from "@reduxjs/toolkit";


let initialState: EducationProps = {
    edu: [
        {
            institute_name: "Dinabandhu Andrews Institute of Technology & Management, Kolkata — BCA",
            start_date: 'August 2022',
            end_date: 'June 2024',
            marks: 'Completed with 8.43CGPA.'
        },
        {
            institute_name: "Naktala High School, Kolkata — 10+2 standard",
            start_date: 'Complete, January 2020',
            end_date: 'February 2022',
            marks: 'Passed with 74%'
        },
        {
            institute_name: "Naktala High School, Kolkata — 10+2 standard",
            start_date: 'Complete, January 2013',
            end_date: 'December 2019',
            marks: 'Passed with 64%'
        }

    ]
}

const EducationSlice = createSlice({
    name: 'Education',

    initialState,

    reducers: {}

})

let EduReducers = EducationSlice.reducer;

export default EduReducers;