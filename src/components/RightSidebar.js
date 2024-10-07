import React from 'react';
import AddInstance from './AddInstance';

const RightSidebar = ({ visible, close }) => {
  return (
    <div className={`fixed top-0 right-0 z-50 h-full bg-white border-l border-gray-300 shadow-lg w-80 transition-transform transform ${visible ? 'translate-x-0' : 'translate-x-full'}`}>
      <button onClick={close} className="p-2 text-red-500 rounded-full hover:bg-red-100">Close</button>
      <div className="p-4">
        {visible && (
          <AddInstance 
            visibleRight={visible} 
            onClose={close} // Use the close function here to close the AddInstance
          />
        )}
      </div>
    </div>
  );
};

export default RightSidebar;
