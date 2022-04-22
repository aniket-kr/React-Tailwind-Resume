import data from 'components/MainContent/data';

interface EducationItemProps {
  item: typeof data.education[0];
}

const EducationItem = ({ item }: EducationItemProps) => {
  return (
    <>
      <div className="flex justify-between mt-4">
        <h4 className="text-mattBlack text-lg font-semibold">{item.degree}</h4>
        <span className="italic text-mattBlack">
          {item.startYear} - {item.endYear}
        </span>
      </div>
      <div className="flex justify-between mb-1">
        <h5 className="text-mattBlack">{item.institute}</h5>
        <span className="text-mattBlack">{item.grade ?? ''}</span>
      </div>
      <ul className="list-disc list-inside">
        {item.achievements?.map((item) => (
          <li className="text-mattBlack">{item}</li>
        ))}
      </ul>
    </>
  );
};

export default EducationItem;
