export interface Project {
  title: string;
  description: string;
  link?: string;
  tags: string[];
}

export interface Experience {
  company: string;
  role: string;
  duration: string;
  description: string;
}

export interface Education {
  school: string;
  degree: string;
  duration: string;
}

export interface PortfolioData {
  name: string;
  role: string;
  bio: string;
  email: string;
  phone?: string;
  github?: string;
  linkedin?: string;
  whatsapp?: string;
  skills: string[];
  projects: Project[];
  experience: Experience[];
  education: Education[];
  template: string;
  slug: string;
  userId: string;
  createdAt: any;
}
