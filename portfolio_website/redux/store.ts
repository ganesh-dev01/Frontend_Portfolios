import { configureStore } from "@reduxjs/toolkit";
import ExpReducers from "./ExperienceSlice";
import EduReducers from "./EducationSlice";
import skillReducer from "./SkillSlice";
import projectReducer from "./ProjectSlice";

const store = configureStore({
    reducer: {
        Exp: ExpReducers,
        Edu: EduReducers,
        Skill: skillReducer,
        Project: projectReducer
    }
})

export default store;