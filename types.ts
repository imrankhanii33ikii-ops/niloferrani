
export interface Skill {
  name: string;
  category: 'CAFM' | 'Design' | 'Technical' | 'Soft Skills';
  level: number; // 0-100
}

export interface Experience {
  role: string;
  company: string;
  location: string;
  period: string;
  description: string[];
}

export interface Education {
  degree: string;
  institution: string;
  location: string;
  period: string;
}

export interface Message {
  role: 'user' | 'assistant';
  content: string;
}
