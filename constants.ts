
import { Skill, Experience, Education } from './types';

export const PROFILE = {
  name: 'Nilofer Rani',
  title: 'B.E. ECE Engineer | CAFM Administrator | UI/UX Designer',
  email: 'niloferranithamas@gmail.com',
  phone: '+974 7148 7137',
  location: 'Doha, Qatar',
  portfolioUrl: window.location.origin + window.location.pathname,
  resumeUrl: '#', 
  linkedin: 'https://linkedin.com/in/nilofer-rani', // Placeholder
  whatsapp: 'https://wa.me/97471487137',
  summary: `Gold-driven and collaborative Web Designer and CAFM professional with a Bachelor's in ECE. I possess extensive experience in UI/UX design (wireframing, prototyping, user testing) and Facilities Management systems. I focus on creating intuitive, visually appealing websites that drive business growth while maintaining operational data accuracy and efficiency in complex CAFM environments.`,
  systemInstruction: `You are Nilofer Rani's personal AI assistant. Your goal is to represent Nilofer to potential employers or clients. 
  You should speak professionally, helpfully, and use the following verified information:
  - Education: B.E. in ECE (2017-2020) from Global Institute of Engineering and Technology, and Diploma in ECE (2015-2017).
  - Current Role: CAFM Administrator at Globaliz Trading and Contracting, Doha (2024-2025).
  - Past Roles: Web & UI/UX Designer at Mad Creative Art (2021-2023), Document Controller at Darling Digital World (2020).
  - Technical Expertise: CAFM Systems, UI/UX (Figma, Adobe XD, Photoshop, Illustrator, InVision, Webflow, Zeplin), Web Development (HTML/CSS), Programming (C/C++), Office suites (MS Word, Excel, PowerPoint, Tally Prime).
  - Certifications: Diploma in Computer Application (DCA), Diploma in Graphics and Automation (DCGA).
  - Languages: Tamil, English, Hindi, Urdu.
  - Vibe: Professional, tech-savvy, meticulous, and collaborative.
  When someone asks for a link, provide her portfolio link: ${window.location.origin + window.location.pathname} or her email. 
  If asked about personal details, mention she is from India (Vellore) and now based in Doha. Keep responses concise and inviting.`
};

export const SKILLS: Skill[] = [
  // CAFM & Admin
  { name: 'CAFM Administration', category: 'CAFM', level: 98 },
  { name: 'Daily Working Reports', category: 'CAFM', level: 95 },
  { name: 'Data Accuracy & Maintenance', category: 'CAFM', level: 94 },
  { name: 'Document Control', category: 'CAFM', level: 92 },
  
  // Design
  { name: 'UI/UX (Figma, Adobe XD)', category: 'Design', level: 96 },
  { name: 'Photoshop & Illustrator', category: 'Design', level: 94 },
  { name: 'Wireframing & Prototyping', category: 'Design', level: 95 },
  { name: 'Webflow & Responsive Design', category: 'Design', level: 88 },
  { name: 'HTML5 & CSS3', category: 'Design', level: 90 },
  
  // Technical
  { name: 'C / C++', category: 'Technical', level: 82 },
  { name: 'MS Office (Excel Expert)', category: 'Technical', level: 98 },
  { name: 'Tally Prime', category: 'Technical', level: 90 },
  { name: 'Graphics & Automation', category: 'Technical', level: 92 },
  
  // Soft Skills
  { name: 'Communication', category: 'Soft Skills', level: 95 },
  { name: 'Problem-Solving', category: 'Soft Skills', level: 92 },
  { name: 'Attention to Detail', category: 'Soft Skills', level: 99 },
  { name: 'Critical Thinking', category: 'Soft Skills', level: 94 },
  { name: 'Collaboration & Teamwork', category: 'Soft Skills', level: 96 },
];

export const EXPERIENCES: Experience[] = [
  {
    role: 'CAFM Administrator',
    company: 'Globaliz Trading and Contracting',
    location: 'Doha, Qatar',
    period: '2024 - 2025',
    description: [
      'Leading CAFM system administration, ensuring 100% operational data accuracy.',
      'Maintaining daily working reports and streamlining documentation workflows.',
      'Coordinating with facility teams to optimize operational reporting and efficiency.',
      'Analysing design choices for internal systems to impact user experience and business goals.'
    ]
  },
  {
    role: 'Web & Graphic Designer & UI/UX Designer',
    company: 'Mad Creative Art',
    location: 'Vellore, Tamil Nadu, India',
    period: '2021 - 2023',
    description: [
      'Developed intuitive and visually appealing websites using Figma, Adobe XD, and Webflow.',
      'Created professional graphic assets using Photoshop and Illustrator for diverse clients.',
      'Conducted user testing and prototyping to ensure optimal user journeys.',
      'Acted as Document Controller, maintaining precise project records and design versions.'
    ]
  },
  {
    role: 'Document Controller and Supervisor',
    company: 'Darling Digital World',
    location: 'Vellore, Tamil Nadu, India',
    period: '2020 - 2020',
    description: [
      'Supervised daily wording reports and managed high-volume document flows.',
      'Ensured precision and quality in all document interactions and database entries.',
      'Maintained a positive attitude and resilience in a fast-paced environment.'
    ]
  }
];

export const EDUCATIONS: Education[] = [
  {
    degree: 'Bachelors of Engineering in ECE',
    institution: 'Global Institute of Engineering and Technology',
    location: 'Melvisharam, Vellore, India',
    period: '2017 - 2020'
  },
  {
    degree: 'Diploma in ECE',
    institution: 'Sri Venkateswara Polytechnic College',
    location: 'Vellore, Tamil Nadu, India',
    period: '2015 - 2017'
  }
];

export const LANGUAGES = ['Tamil', 'English', 'Hindi', 'Urdu'];
