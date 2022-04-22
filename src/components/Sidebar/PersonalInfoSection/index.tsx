import data from 'components/Sidebar/data';
import InfoItem from 'components/Sidebar/PersonalInfoSection/InfoItem';
import SectionHeader from 'components/Sidebar/SectionHeader';

const PersonalInfoSection = () => {
  return (
    <div className="flex flex-col gap-2">
      <SectionHeader label="Personal Info" />
      {data.personalInfo.map((info) => (
        <InfoItem info={info} key={info.label} />
      ))}
    </div>
  );
};

export default PersonalInfoSection;
