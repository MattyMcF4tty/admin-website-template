
import React, { useState } from 'react'

const TownsquarePage = () => {
/*   const [currentRoom, setCurrentRoom] = useState('Operations');
 */
  return (
    <div className='h-[calc(100vh-6rem)]'>
      <nav className=''>
        <button className='bg-white p-1 rounded-t-md text-base'>
          Operations
        </button>
      </nav>
      <div className='bg-white h-[calc(100%-2rem)] rounded-b-md rounded-r-md shadow-md'>
        TownsquarePage

      </div>
    </div>
  )
}

export default TownsquarePage;