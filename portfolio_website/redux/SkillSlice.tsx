import { SkillProps } from "@/typescript/interfaces";
import { createSlice } from "@reduxjs/toolkit";


let initialState: SkillProps = {
    skill: [
        {
            id: 1,
            icon: '/assets/icons/nextjs_icon.png',
            skill_name: 'NEXT JS'
        },
        {
            id: 2,
            icon: '/assets/icons/react_icon.png',
            skill_name: 'React'
        },
        {
            id: 3,
            icon: '/assets/icons/redux_icon.png',
            skill_name: 'Redux'
        },
        {
            id: 4,
            icon: '/assets/icons/tantstack_icon.png',
            skill_name: 'TanStack Query'
        },
        {
            id: 5,
            icon: '/assets/icons/reactnative_icon.png',
            skill_name: 'React Native'
        },
        {
            id: 6,
            icon: '/assets/icons/typescript_icon.png',
            skill_name: 'TypeScript'
        },
        {
            id: 7,
            icon: '/assets/icons/js_icon.png',
            skill_name: 'JavaScript'
        },
        {
            id: 8,
            icon: '/assets/icons/materialUI_icon.png',
            skill_name: 'Material UI'
        },
        {
            id: 9,
            icon: '/assets/icons/tailwind_icon.png',
            skill_name: 'Tailwind'
        },
        {
            id: 10,
            icon: '/assets/icons/sass_icon.png',
            skill_name: 'Sass'
        },
        {
            id: 11,
            icon: '/assets/icons/git_icon.png',
            skill_name: 'Git'
        },
        {
            id: 12,
            icon: '/assets/icons/html_icon.png',
            skill_name: 'HTML'
        },
        {
            id: 13,
            icon: '/assets/icons/css_icon.png',
            skill_name: 'CSS'
        },
        {
            id: 14,
            icon: '/assets/icons/bootstrap_icon.png',
            skill_name: 'Bootstrap'
        }

    ]
}



const SkillSlice = createSlice({
    name: 'skill',

    initialState,

    reducers: {}
})

let skillReducer = SkillSlice.reducer;

export default skillReducer;

