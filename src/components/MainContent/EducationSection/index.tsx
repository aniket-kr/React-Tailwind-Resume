import data from 'components/MainContent/data';
import EducationItem from 'components/MainContent/EducationSection/EducationItem';
import SectionHeader from 'components/MainContent/SectionHeader';

const EducationSection = () => {
  return (
    <>
      <SectionHeader label="Education" />
      {data.education
        .sort((recA, recB) => recB.startYear - recA.startYear)
        .map((rec) => (
          <EducationItem key={rec.institute} item={rec} />
        ))}
    </>
  );
};

export default EducationSection;
