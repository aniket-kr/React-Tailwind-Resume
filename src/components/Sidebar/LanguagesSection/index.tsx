import data from 'components/Sidebar/data';
import LanguageItem from 'components/Sidebar/LanguagesSection/LanguageItem';
import SectionHeader from 'components/Sidebar/SectionHeader';

const LanguagesSection = () => {
  return (
    <div>
      <SectionHeader label="Languages & Tools" />
      <div className="mt-2 px-2 flex flex-wrap gap-3">
        {data.languages.map((lang) => (
          <LanguageItem key={lang} item={lang} />
        ))}
      </div>
    </div>
  );
};

export default LanguagesSection;
