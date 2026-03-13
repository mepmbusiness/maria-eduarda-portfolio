export interface CaseStudy {
  id: string;
  title: string;
  company: string;
  role: string;
  period: string;
  description: string;
  problem: string;
  solution: string;
  impact: string[];
  tags: string[];
  imageUrl: string;
}

export interface Skill {
  category: string;
  items: string[];
}

export interface Education {
  degree: string;
  institution: string;
  year: string;
}

export interface Certification {
  name: string;
  issuer: string;
  year: string;
}

export interface CareerStep {
  role: string;
  company: string;
  period: string;
  description: string;
}

export interface PortfolioContent {
  title: string;
  bio: string;
  philosophy: string;
  skills: Skill[];
  caseStudies: CaseStudy[];
  education: Education[];
  certifications: Certification[];
  careerPath: CareerStep[];
  prdGenerator: {
    title: string;
    subtitle: string;
    placeholder: string;
    generate: string;
    example: string;
    loading: string;
    copy: string;
    copied: string;
    empty: string;
    outputTitle: string;
    examples: string[];
  };
  aiProcess: {
    badge: string;
    title: string;
    description: string;
    items: { title: string; desc: string }[];
    curation: string;
    execution: string;
  };
  ui: {
    work: string;
    skills: string;
    about: string;
    prd: string;
    contact: string;
    viewProjects: string;
    caseStudiesTitle: string;
    caseStudiesDesc: string;
    problem: string;
    solution: string;
    impact: string;
    careerTitle: string;
    educationTitle: string;
    certificationsTitle: string;
    footerTitle: string;
    footerDesc: string;
    experienceBadge: string;
    aiBadge: string;
    builtWithAi: string;
  };
}

export interface PortfolioData {
  name: string;
  email: string;
  linkedin: string;
  languages: {
    [key: string]: PortfolioContent;
  };
}
