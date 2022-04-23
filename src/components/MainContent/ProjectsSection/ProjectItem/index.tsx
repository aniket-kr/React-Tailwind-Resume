import data from 'components/MainContent/data';

interface ProjectItemProps {
  item: typeof data.projects[0];
}

const ProjectItem = ({ item }: ProjectItemProps) => {
  return <div>{item.title}</div>;
};

export default ProjectItem;
