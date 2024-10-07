import React, { useState } from 'react';
import Sidebar from '../components/sidebar'; // Your Sidebar component
import RightSidebar from '../components/RightSidebar'; // New RightSidebar component
import Header from '../components/Header'; // Your Header component

const Layout = ({ children }) => {
  const [visibleRight, setVisibleRight] = useState(false);
  const [rightContent, setRightContent] = useState(null);

  const openRightSidebar = (content) => {
    setRightContent(content);
    setVisibleRight(true);
  };

  const closeRightSidebar = () => {
    setVisibleRight(false);
    setRightContent(null);
  };

  return (
    <div className="flex h-screen">
      <Sidebar openRightSidebar={openRightSidebar} /> {/* Pass function to Sidebar */}
      <div className={`flex-grow transition-all duration-300 ${visibleRight ? 'ml-72' : 'ml-0'} p-8`}>
      <Header />
        <main className="flex-grow p-6 overflow-y-auto">
          {children}
        </main>
      </div>

      {/* Right Sidebar */}
      <RightSidebar visible={visibleRight} content={rightContent} close={closeRightSidebar} />
    </div>
  );
};

export default Layout;
