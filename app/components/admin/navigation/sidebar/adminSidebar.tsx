import { faChartLine, faReceipt } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'
import React from 'react'
import SidebarButton from './adminSidebarButton'
import AdminSidebarDropdown from './adminSidebarDropdown'

const AdminSidebar = () => {
  return (
    <div className='flex-col z-90 h-full bg-white w-48 shadow-lg relative'>
      {/* Buttons */}
      <div className='absolute w-full top-10'>
      {/* Prebooking */}
        <div className='w-full px-2' id='prebooking'>
          <AdminSidebarDropdown text='Prebooking' pages={['List', 'Config']}/>
        </div>
      </div>

    </div>
  )
}

export default AdminSidebar