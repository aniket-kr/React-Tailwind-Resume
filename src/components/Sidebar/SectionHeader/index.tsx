interface SectionHeaderProps {
  label: string;
}

const SectionHeader = ({ label }: SectionHeaderProps) => {
  return (
    <h3 className="px-2 py-1 bg-darkBlue text-cream font-semibold mt-4 text-lg">
      {label}
    </h3>
  );
};

export default SectionHeader;
