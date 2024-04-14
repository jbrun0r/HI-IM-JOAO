export interface Project {
  class: string;
  projectName: string;
  projectStacks: string;
  img: string;
  link: string;
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string;
  tasks: string;
  skills: string[];
}

export interface AcademicEducation {
  degree: string;
  university: string;
  period: string;
}
