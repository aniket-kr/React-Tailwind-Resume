import data from 'components/MainContent/data';
import EducationSection from 'components/MainContent/EducationSection';
import ProjectsSection from 'components/MainContent/ProjectsSection';

const MainContent = () => {
  return (
    <div className="flex-grow px-4 py-10">
      <p className="text-justify text-mattBlack">{data.shortPitch}</p>
      <EducationSection />
      <ProjectsSection />
    </div>
  );
};

export default MainContent;
