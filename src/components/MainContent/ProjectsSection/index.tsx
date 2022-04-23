import data from 'components/MainContent/data';
import ProjectItem from 'components/MainContent/ProjectsSection/ProjectItem';
import SectionHeader from 'components/MainContent/SectionHeader';

const ProjectsSection = () => {
  return (
    <div>
      <SectionHeader label="Projects" />
      {data.projects.map((project) => (
        <ProjectItem key={project.title} item={project} />
      ))}
    </div>
  );
};

export default ProjectsSection;
