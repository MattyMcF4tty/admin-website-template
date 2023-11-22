import React from 'react'

const AdminSidebar = () => {
  return (
    <nav className='fixed z-100 h-screen bg-company-color-primary w-28'>
      <div className='flex flex-row items-center'>
        <img src="/company-logo.png" alt="Company Logo"  className='w-2/5'/>
        <p className='text-sm text-white font-semibold'>Admin</p>
      </div>
    </nav>
  )
}

export default AdminSidebar