import React from 'react'
import AdminSidebarDropdown from './adminSidebarDropdown'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const AdminSidebar = () => {
  return (
    <div className='absolute flex-col h-screen bg-white w-48 shadow-lg mt-12'>

      {/* Buttons */}
      <div className='absolute w-full top-10'>
        {/* Prebooking */}
        <div className='w-full px-2 mb-1' id='prebooking'>
          <AdminSidebarDropdown text='Prebooking' pages={['List', 'Config']}/>
        </div>

        {/* Vehicles */}
        <div className='w-full px-2 mb-1' id='vehicles'>
          <AdminSidebarDropdown text='Vehicles' pages={['List', 'Config',]}/>
        </div>

        {/* Social */}
        <div className='w-full px-2 mb-1' id='social'>
          <AdminSidebarDropdown text='Social' pages={['Townsquare', 'Email',]}/>
        </div>

        {/* Damage */}
        <div className='w-full px-2 mb-1' id='damage'>
          <AdminSidebarDropdown text='Damage' pages={['Overview']}/>
        </div>
      </div>

    </div>
  )
}

export default AdminSidebar