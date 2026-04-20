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
  /** Cover image; omit when `videoUrl` is used alone */
  imageUrl?: string;
  /** When set, shown instead of the cover image (e.g. hero loop) */
  videoUrl?: string;
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

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  company: string;
  /** Public URL (e.g. /avatars/name.png in `public/avatars/`) */
  photoUrl?: string;
  /** e.g. LinkedIn relationship line */
  relationship?: string;
  /** Logical grouping for dropdown (e.g. Relo Metrics / Blu / BRAVET) */
  org?: string;
}

export interface PortfolioContent {
  title: string;
  bio: string;
  philosophy: string;
  skills: Skill[];
  caseStudies: CaseStudy[];
  /** Client list by company name shown in case studies */
  companyClients?: Record<string, string[]>;
  testimonials: Testimonial[];
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
    /** Label shown above the monospace stack line */
    stackLabel: string;
    stack: string;
    items: { title: string; desc: string }[];
    curation: string;
    execution: string;
  };
  ui: {
    home: string;
    work: string;
    skills: string;
    about: string;
    prd: string;
    contact: string;
    viewProjects: string;
    caseStudiesTitle: string;
    caseStudiesDesc: string;
    clientsTitle: string;
    testimonialsTitle: string;
    testimonialsDesc: string;
    problem: string;
    solution: string;
    impact: string;
    careerTitle: string;
    educationTitle: string;
    certificationsTitle: string;
    footerTitle: string;
    footerDesc: string;
    downloadResumeDocx: string;
    experienceBadge: string;
    aiBadge: string;
    builtWithAi: string;
  };
}

export interface PortfolioData {
  name: string;
  email: string;
  linkedin: string;
  github: string;
  /** Resume .docx in /public — served as static file */
  resumeDocx: { href: string; downloadAs: string };
  languages: {
    [key: string]: PortfolioContent;
  };
}
