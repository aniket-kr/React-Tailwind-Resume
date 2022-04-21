import data from 'data';
import LanguagesSection from 'components/LanguagesSection';
import PersonalInfoSection from 'components/PersonalInfoSection';
import SkillsSection from 'components/SkillsSection';
import SoftwareSection from 'components/SoftwareSection';

const Sidebar = () => {
  return (
    <div className="w-1/3 bg-deepBlue px-3 py-2">
      <p className="text-2xl font-extrabold text-white">{data.name}</p>
      <p className="text-md text-white">{data.title}</p>
      <PersonalInfoSection />
      <SkillsSection />
      <SoftwareSection />
      <LanguagesSection />
    </div>
  );
};

export default Sidebar;
