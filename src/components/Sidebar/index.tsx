import data from 'components/Sidebar/data';
import PersonalInfoSection from 'components/Sidebar/PersonalInfoSection';
import SkillsSection from 'components/Sidebar/SkillsSection';
import TechnologiesSection from 'components/Sidebar/TechnologiesSection';

const Sidebar = () => {
  return (
    <div className="w-[35%] bg-midnightBlue h-full flex flex-col py-3">
      <h1 className="text-3xl text-cream font-extrabold px-2">{data.name}</h1>
      <h2 className="text-lg px-2 text-cream">{data.jobTitle}</h2>

      <PersonalInfoSection />
      <SkillsSection />
      <TechnologiesSection />
    </div>
  );
};

export default Sidebar;
