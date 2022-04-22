import data from 'components/Sidebar/data';

interface LanguageItemProps {
  item: typeof data.languages[0];
}

const LanguageItem = ({ item }: LanguageItemProps) => {
  return (
    <span
      className="rounded-full bg-cream text-darkBlue text-xs py-1 px-2
        shadow-darkBlue shadow-md"
    >
      {item}
    </span>
  );
};

export default LanguageItem;
