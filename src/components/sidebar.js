import React, { useState, useEffect } from 'react';
import RightSidebar from './RightSidebar'; 
import { MdMenuOpen } from "react-icons/md";
import { IoHomeOutline } from "react-icons/io5";
import { FaProductHunt, FaSearch, FaEnvelope, FaPhone } from "react-icons/fa"; 
import { TbReportSearch } from "react-icons/tb";
import { IoLogoBuffer } from "react-icons/io";
import { CiSettings } from "react-icons/ci";
import { MdOutlineDashboard } from "react-icons/md";
import { useTranslation } from 'react-i18next';



export default function Sidebar({ setIsOpen }) {
  const [open, setOpen] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [rightSidebarVisible, setRightSidebarVisible] = useState(false);
  const [activePage, setActivePage] = useState('');
  const [addInstanceVisible, setAddInstanceVisible] = useState(false); 
  const { t } = useTranslation();

  


  const handleToggle = () => {
    setOpen(prev => !prev);
  };

  const handleInstanceClick = () => {
    setActivePage('instances');
    setRightSidebarVisible(true);
    setAddInstanceVisible(false); 
  };

  const handleAddInstanceClick = () => {
    setAddInstanceVisible(true); 
    setRightSidebarVisible(false); 
  };

  useEffect(() => {
    const handleResize = () => {
      setOpen(window.innerWidth >= 768);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const closeSidebar = () => {
    setRightSidebarVisible(false);
    setActivePage('');
    setAddInstanceVisible(false);
  };
  const menuItems = [
    { icon: <IoHomeOutline size={30} />, label: t('sidebar.home') }, 
    { icon: <FaProductHunt size={30} />, label: t('sidebar.instances'), id: 'instances' }, 
    { icon: <MdOutlineDashboard size={30} />, label: t('sidebar.dashboard') }, 
    { icon: <CiSettings size={30} />, label: t('sidebar.settings') }, 
    { icon: <IoLogoBuffer size={30} />, label: t('sidebar.logs') }, 
    { icon: <TbReportSearch size={30} />, label: t('sidebar.report') } 
  
  ];

  return (
    <div className="relative flex">
      <nav className={`shadow-md h-screen p-2 flex flex-col duration-500 bg-slate-800 text-white ${open ? 'w-63' : 'w-20'}`}>
        
        {/* Header: Logo and Menu Toggle */}
        <div className='flex items-center justify-between h-20 px-3 py-2'>
          {/* Center the logo */}
          <div className="flex items-center justify-center w-full">
            <img src="https://iconape.com/wp-content/files/jr/374167/png/374167.png" alt="Logo" className={`${open ? 'w-10' : 'w-10'} rounded-md`} />
          </div>
          <MdMenuOpen size={34} className={`duration-500 cursor-pointer ${!open && 'rotate-180'}`} onClick={handleToggle} />
        </div>

        {/* Centered Search Icon */}
        <div className="flex items-center justify-center w-full py-4">
          {open ? (
            <div className="flex items-center w-full rounded-md bg-slate-700">
              <FaSearch size={20} className="mx-2 text-white" />
              <input 
                type="text" 
                placeholder={t  ("search")} 
                value={searchTerm} 
                onChange={(e) => setSearchTerm(e.target.value)} 
                className="w-full p-2 text-white bg-transparent outline-none"
              />
            </div>
          ) : (
            <FaSearch size={20} className="text-white" onClick={() => alert('Search clicked!')} />
          )}
        </div>

        {/* Navigation Menu */}
<ul className="flex-1 mt-4">
  {menuItems.map((item, index) => (
    <li 
      key={index} 
      className="relative flex items-start justify-start px-3 py-4 my-2 duration-300 rounded-md cursor-pointer hover:bg-blue-800 group"
      onClick={item.label === t('sidebar.instances') ? handleInstanceClick : () => setActivePage(item.label.toLowerCase())}
    >
      <div className="mr-2">{item.icon}</div> {/* Added margin to space out icon and label */}
      {open && <div>{item.label}</div>}
    </li>
  ))}
</ul>

<div className="flex items-center p-4 mx-2 my-2 mb-4 rounded-lg bg-slate-700 border-cyan-900">
          {open ? (
            <div className="flex flex-col items-center w-full space-y-3">
              <div className="flex items-center space-x-3">
                <img src="https://cdn1.iconfinder.com/data/icons/user-pictures/101/malecostume-512.png" alt="Profile" className="w-12 h-12 rounded-full" />
                <div>
                  <p className="text-sm font-semibold text-white">{t('creatorName')}</p>
                  <p className="text-xs text-gray-400">{t('creatorRole')}</p>
                </div>
              </div>

              <div className="flex space-x-2">
                <button className="flex items-center px-4 py-2 text-sm text-white bg-blue-500 rounded-lg hover:bg-blue-600">
                  <FaEnvelope className="w-4 h-4 mr-2" />
                  E-Mail
                </button>
                <button className="flex items-center px-4 py-2 text-sm text-white bg-gray-500 rounded-lg hover:bg-gray-600">
                  <FaPhone className="w-4 h-4 mr-2" />
                  Call
                </button>
              </div>
            </div>
          ) : (
            <img src="https://cdn1.iconfinder.com/data/icons/user-pictures/101/malecostume-512.png" alt="Profile" className="w-12 h-12 rounded-full" />
          )}
        </div>
      </nav>

      <RightSidebar visible={rightSidebarVisible} close={closeSidebar} />

      {rightSidebarVisible && activePage === 'instances' && (
        <div className="fixed inset-0 z-40 filter backdrop-blur-xl" />
      )}
    </div>
  );
}
