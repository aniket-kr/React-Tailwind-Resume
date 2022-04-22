import data from 'components/Sidebar/data';

interface InfoItemProps {
  info: typeof data.personalInfo[0];
}

const InfoItem = ({ info }: InfoItemProps) => {
  const baseClasses = 'px-2 text-cream text-sm';

  return (
    <div>
      <h4 className="px-2 text-cream font-semibold mb-[-0.3rem]">
        {info.label}
      </h4>
      {info.link ? (
        <a
          className={`${baseClasses} cursor-pointer`}
          href={info.link}
          target="_blank"
          rel="noreferrer"
        >
          {info.value}
        </a>
      ) : (
        <span className={baseClasses}>{info.value}</span>
      )}
    </div>
  );
};

export default InfoItem;
