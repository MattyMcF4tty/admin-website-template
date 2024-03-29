import React from 'react'


const AdminNavbar = () => {
  return (
    <div className='absolute w-screen bg-white h-12 flex flex-row justify-between shadow-lg border-b-2 border-company-color-primary'>
      {/* Logo */}
      <div className='flex flex-row items-center'>
        <img src="/company-logo.png" alt="Company Logo" className='h-full'/>
        <div className='flex flex-col'>
          <p className='text-sm text-black font-semibold'>{process.env.COMPANY_NAME}</p>            
          <p className='text-xs text-black font-semibold'>Admin</p>
        </div>
      </div>
      {/* User */}
    </div>
  )
}

export default AdminNavbar