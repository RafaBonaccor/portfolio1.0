// mock-experience.ts

import { Experience } from '../experience/experience';

export const EXPERIENCE: Experience[] = [
  {
    id: 1,
    company: 'Company One',
    yearsOfWork: 3,
    description: 'Worked on various projects.',
    logo: 'assets/company-one-logo.png',
    projects: ['Project A', 'Project B', 'Project C'],
    technologies: ['Angular', 'TypeScript', 'Node.js']
  },
  {
    id: 2,
    company: 'Company Two',
    yearsOfWork: 2,
    description: 'Developed multiple applications.',
    logo: 'assets/company-two-logo.png',
    projects: ['Project X', 'Project Y'],
    technologies: ['React', 'JavaScript', 'Express.js']
  },
  {
    id: 3, 
    company: '01s Sistemi', 
    yearsOfWork: 1, 
    description: 'IT and system integration.', 
    logo: 'assets/logos/01s-sistemi.png' ,
    projects: ['Project X', 'Project Y'],
    technologies: ['React', 'JavaScript', 'Express.js']
  },
  // Aggiungi altre esperienze qui
];
