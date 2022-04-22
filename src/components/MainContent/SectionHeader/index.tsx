interface SectionHeaderProps {
  label: string;
}

const SectionHeader = ({ label }: SectionHeaderProps) => {
  return (
    <div className="border-y-2 mt-5 mb-3 py-1 font-extrabold text-2xl text-midnightBlue">
      {label}
    </div>
  );
};

export default SectionHeader;
