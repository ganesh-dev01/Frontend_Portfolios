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

