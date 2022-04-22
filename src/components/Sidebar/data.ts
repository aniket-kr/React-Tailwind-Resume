type Skill = string;
type SkillLevel = 1 | 2 | 3 | 4 | 5;
type Language = string;
type Tool = string;

interface PersonalInfo {
  label: string;
  value: string;
  link?: string;
}

interface Technology {
  name: string;
  level: SkillLevel;
}

export interface SidebarData {
  name: string;
  jobTitle: string;
  personalInfo: PersonalInfo[];
  skills: Skill[];
  technologies: Technology[];
  languages: Language[];
  tools: Tool[];
}

const data: SidebarData = {
  name: 'Aniket Kumar',
  jobTitle: 'Web Developer Intern',
  personalInfo: [
    {
      label: 'Phone',
      value: '+91 961-938-2015',
    },
    {
      label: 'E-mail',
      value: 'aniket24kr@gmail.com',
    },
    {
      label: 'LinkedIn',
      value: 'linkedin.com/in/aniket-kr-2002',
      link: 'https://www.linkedin.com/in/aniket-kr-2002',
    },
    {
      label: 'GitHub',
      value: 'github.com/aniket-kr',
      link: 'https://github.com/aniket-kr',
    },
  ],
  skills: [
    'Team Player',
    'Focused & Efficient',
    'Task Oriented',
    'Good Communicator',
    'Fluent English: Written & Verbal',
  ],
  technologies: [
    { name: 'React.js', level: 4 },
    { name: 'Express.js (and MERN)', level: 3 },
    { name: 'Django', level: 2 },
    { name: 'MongoDB/MySQL', level: 3 },
  ],
  languages: [
    'HTML5',
    'CSS3',
    'Python',
    'C++',
    'JavaScript',
    'Typescript',
    'Java',
  ],
  tools: [
    'npm',
    'React Router',
    'Redux',
    'Express',
    'git',
    'GitHub',
    'Passport.js',
    'Mongoose',
  ],
};

export default data;
