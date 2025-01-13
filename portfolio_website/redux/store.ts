import { configureStore } from "@reduxjs/toolkit";
import ExpReducers from "./ExperienceSlice";
import EduReducers from "./EducationSlice";

const store = configureStore({
    reducer: {
        Exp: ExpReducers,
        Edu: EduReducers
    }
})

export default store;