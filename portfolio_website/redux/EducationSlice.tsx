import { EducationProps } from "@/typescript/interfaces";
import { createSlice } from "@reduxjs/toolkit";


let initialState: EducationProps = {
    edu: [
        {
            institute_name: 'test1',
            duration: 'test2',
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