export interface PfProject {
    title: string;
    description: string;
    img_url: string;
    img_webp_url: string;
    prj_url: string;
    demo_url: string;
    stack: string[];
}

export interface Experience {
    title: string;
    company: string;
    year: string;
    description: string;
}

export interface Education {
    title: string;
    year: string;
    at: string;
}

export interface Course {
    title: string;
    year: string;
    at: string;
}

export interface PortfolioData {
    projects: PfProject[];
    experience: Experience[];
    education: Education[];
    courses: Course[];
}
