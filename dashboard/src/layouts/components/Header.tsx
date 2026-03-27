const Header = ({ className = "" }: { className?: string }) => {
  return (
    <header className={`${className} border-b border-gray-200 py-4 px-20`}>
      Header
    </header>
  );
};

export default Header;
