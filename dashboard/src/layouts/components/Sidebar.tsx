const Sidebar = ({ className = "" }: { className?: string }) => {
  return (
    <aside className={`${className} border-r border-gray-200 py-12 px-8`}>
      Sidebar
    </aside>
  );
};

export default Sidebar;
