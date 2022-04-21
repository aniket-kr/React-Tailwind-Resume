export interface PersonalInfo {
  label: string;
  value: string;
}

export interface Data {
  name: string;
  title: string;
  personalInfo: PersonalInfo[];
}

const data: Data = {
  name: 'Aniket Kumar',
  title: 'Web Developer Intern',
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
      value: 'https://www.linkedin.com/in/aniket-kr-2002',
    },
    {
      label: 'GitHub',
      value: 'https://github.com/aniket-kr',
    },
  ],
};

export default data;
