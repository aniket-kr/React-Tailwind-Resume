interface ProjectInfo {
  title: string;
  description: string;
  link?: string;
  knowledgeGained: string[]; // bullet points
}

interface EducationInfo {
  institute: string;
  degree: string;
  startYear: number;
  endYear: number | 'Present';
  grade?: string;
  achievements?: string[]; // bullet points
}

interface Certificate {
  title: string;
  started: string;
  expires?: string;
  link?: string;
}

interface Data {
  shortPitch: string;
  education: EducationInfo[];
  projects: ProjectInfo[];
  certifications: Certificate[];
  interests: string[];
}

const data: Data = {
  shortPitch:
    'Do exercitation duis velit id et velit. Id exercitation dolor consectetur ut adipisicing. Enim excepteur nisi aute Lorem eiusmod laborum ad ea consequat sunt nulla culpa sit. Laboris cupidatat voluptate duis aute cupidatat proident reprehenderit velit. Qui tempor fugiat quis labore sint eu Lorem aute esse ex reprehenderit.',
  education: [
    {
      institute: 'D.A.V. International School, Kharghar',
      degree: 'Class X, CBSE',
      startYear: 2017,
      endYear: 2018,
      grade: '91%',
    },
    {
      institute: 'D.A.V. International School, Kharghar',
      degree: 'Class XII (PCM), CBSE',
      startYear: 2018,
      endYear: 2020,
      grade: '94.60%',
      achievements: [
        'Was part of the Student Council.',
        'Helped organize a plantation drive to save the environment.',
      ],
    },
    {
      institute: 'MIT Academy of Engineering, Pune',
      degree: 'B.Tech (Computer Engineering)',
      startYear: 2020,
      endYear: 'Present',
      achievements: [
        'Veniam anim aliqua elit nostrud commodo officia nulla aliqua.',
      ],
    },
  ],
  projects: [
    {
      title: 'React Resume',
      description:
        'This resume was designed as a React application using React and Tailwind CSS. Find the source code at the GitHub Page',
      knowledgeGained: [
        'Separating data layer from the view layer.',
        'Creating custom components to reuse styles.',
        'Worked extensively with TypeScript types.',
      ],
    },
  ],
  certifications: [],
  interests: [],
};

export default data;
