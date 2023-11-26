import { faChartLine, faSliders } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'
import React from 'react'
import SidebarButton from './adminSidebarButton'

const AdminSidebar = () => {
  return (
    <div className='flex-col z-90 h-full bg-white w-48 shadow-lg'>
      <div className='w-full pt-10'>
      {/* Prebooking */}
        <div className='w-full' id='prebooking'>
          <SidebarButton text='Dashboard' href='dashboard' icon={faChartLine} />
          <SidebarButton text='Config' href='config' icon={faSliders} />
        </div>
      </div>

    </div>
  )
}

export default AdminSidebar