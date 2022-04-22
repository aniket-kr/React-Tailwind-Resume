import data from 'components/Sidebar/data';
import SectionHeader from 'components/Sidebar/SectionHeader';

const SkillsSection = () => {
  return (
    <>
      <SectionHeader label="Skills" />
      <div className="flex flex-col px-2 pt-2 gap-1">
        {data.skills.map((skill) => (
          <p key={skill} className="text-cream text-sm">
            {skill}
          </p>
        ))}
      </div>
    </>
  );
};

export default SkillsSection;
