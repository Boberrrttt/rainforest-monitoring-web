
const Sidebar = () => {
    
    
    return (
      <div className="w-80 h-screen p-6 bg-[#2C6E49] flex flex-col justify-between">
        <div>
          <h1 className="font-bold text-3xl text-white mb-4">Rainforest</h1>
  
          {/* Separator Bar */}
          <div className="w-full h-[2px] bg-white bg-opacity-30 mb-6"></div>
  
          <nav className="space-y-4">
            <a href="#" className="flex items-center text-white hover:text-[#A3C9A8] transition-colors">
              <span className="mr-3 text-xl">📊</span> Dashboard
            </a>
            <a href="#" className="flex items-center text-white hover:text-[#A3C9A8] transition-colors">
              <span className="mr-3 text-xl">📜</span> History
            </a>
            <a href="#" className="flex items-center text-white hover:text-[#A3C9A8] transition-colors">
              <span className="mr-3 text-xl">🔔</span> Alerts
            </a>
            <a href="#" className="flex items-center text-white hover:text-[#A3C9A8] transition-colors">
              <span className="mr-3 text-xl">📡</span> Monitor
            </a>
          </nav>
        </div>
  
        <footer className="text-white text-sm">
          CPE 3B MicroTron
        </footer>
      </div>
    );
  };
  
  export default Sidebar;
  