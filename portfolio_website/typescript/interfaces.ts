import { Interface } from "readline/promises";

interface Experience {
    company_name: string;
    start_date: string,
    end_date: string,
    company_location: string;
    description: string;
}


export interface ExperienceProps {
    exp: Experience[];
}

interface Education {
    institute_name: string,
    start_date: string,
    end_date: string,
    marks: string
}

export interface EducationProps {
    edu: Education[]
}


interface Skill {
    id: number,
    icon: unknown,
    skill_name: string
}

export interface SkillProps {
    skill: Skill[]
}

interface Project {
    title: string,
    img: string,
    tech: string,
    desc: string,
    live: string,
    code: string
}

export interface ProjectProps {
    project: Project[]
}