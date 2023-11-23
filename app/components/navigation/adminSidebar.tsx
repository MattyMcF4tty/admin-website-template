import { faChartLine, faSliders } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'
import React from 'react'
import SideNavButton from '../buttons/sideNavButton'

const AdminSidebar = () => {
  return (
    <nav className='fixed flex-col z-90 h-screen bg-white w-48 shadow-lg'>
      <div className='w-full mt-10'>
        <SideNavButton text='Dashboard' href='dashboard' icon={faChartLine} />
        <SideNavButton text='Config' href='config' icon={faSliders} />
      </div>

    </nav>
  )
}

export default AdminSidebar