import data from 'components/Sidebar/data';
import SectionHeader from 'components/Sidebar/SectionHeader';
import TechnologyItem from 'components/Sidebar/TechnologiesSection/TechnologyItem';

const TechnologiesSection = () => {
  return (
    <div className="mb-[-0.25rem]">
      <SectionHeader label="Technologies" />
      {data.technologies.map((item) => (
        <TechnologyItem key={item.name} item={item} />
      ))}
    </div>
  );
};

export default TechnologiesSection;
