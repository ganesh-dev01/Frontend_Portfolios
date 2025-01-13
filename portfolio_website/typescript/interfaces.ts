interface Experience {
    company_name: string;
    time_period: string;
    company_location: string;
    description: string;
}


export interface ExperienceProps {
    exp: Experience[];
}

interface Education {
    institute_name: string,
    duration: string,
    marks: string
}

export interface EducationProps {
    edu: Education[]
}

