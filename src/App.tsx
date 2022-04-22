import Sidebar from 'components/Sidebar';

const App = () => {
  return (
    <div className="aspect-[1/1.4142] border-2 h-[297mm] flex">
      <Sidebar />
      <div className="flex-grow"></div>
    </div>
  );
};

export default App;
