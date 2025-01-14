import { EducationProps } from "@/typescript/interfaces";
import { createSlice } from "@reduxjs/toolkit";


let initialState: EducationProps = {
    edu: [
        {
            institute_name: 'test1',
            start_date: 'test1',
            end_date: 'test2',
            marks: 'test3'
        },
        {
            institute_name: 'test1',
            start_date: 'test1',
            end_date: 'test2',
            marks: 'test3'
        },
        {
            institute_name: 'test1',
            start_date: 'test1',
            end_date: 'test2',
            marks: 'test3'
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