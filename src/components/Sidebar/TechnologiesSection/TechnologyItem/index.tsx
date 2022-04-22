import data from 'components/Sidebar/data';

const getWidthClass = (level: number) => {
  switch (level) {
    case 1:
      return 'w-[20%]';
    case 2:
      return 'w-[40%]';
    case 3:
      return 'w-[60%]';
    case 4:
      return 'w-[80%]';
    default:
      return 'w-full';
  }
};

interface TechnologyItemProps {
  item: typeof data.technologies[0];
}

const TechnologyItem = ({ item }: TechnologyItemProps) => {
  const width = getWidthClass(item.level);
  return (
    <div className="px-2 my-3">
      <h4 className="text-sm text-cream mb-1">{item.name}</h4>
      <div className="h-1 bg-darkBlue">
        <div className={`relative top-0 left-0 h-1 bg-cream ${width}`} />
      </div>
    </div>
  );
};

export default TechnologyItem;
