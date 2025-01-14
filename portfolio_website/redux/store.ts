import { configureStore } from "@reduxjs/toolkit";
import ExpReducers from "./ExperienceSlice";
import EduReducers from "./EducationSlice";
import skillReducer from "./SkillSlice";

const store = configureStore({
    reducer: {
        Exp: ExpReducers,
        Edu: EduReducers,
        Skill: skillReducer,
    }
})

export default store;