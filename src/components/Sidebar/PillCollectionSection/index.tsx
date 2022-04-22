import data from 'components/Sidebar/data';
import PillItem from 'components/Sidebar/PillCollectionSection/PillItem';
import SectionHeader from 'components/Sidebar/SectionHeader';

interface PillCollectionSectionProps {
  label: string;
  items: typeof data.languages;
}

const PillCollectionSection = ({
  label,
  items,
}: PillCollectionSectionProps) => {
  return (
    <div>
      <SectionHeader label={label} />
      <div className="mt-3 px-2 flex flex-wrap gap-3">
        {items.map((item) => (
          <PillItem key={item} item={item} />
        ))}
      </div>
    </div>
  );
};

export default PillCollectionSection;
