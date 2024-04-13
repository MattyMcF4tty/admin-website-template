import React from 'react';
import AdminSidebarDropdown from './adminSidebarDropdown';

const AdminSidebar = () => {
  return (
    <div className="absolute flex-col h-screen bg-white w-48 shadow-lg mt-12">
      {/* Buttons */}
      <div className="absolute w-full top-10">
        {/* Vehicles */}
        <div className="w-full px-2 mb-1" id="vehicles">
          <AdminSidebarDropdown text="Vehicles" pages={['List', 'Config']} />
        </div>

        {/* Damage */}
        <div className="w-full px-2 mb-1" id="damage">
          <AdminSidebarDropdown text="Damage" pages={['Overview']} />
        </div>
      </div>
    </div>
  );
};

export default AdminSidebar;
