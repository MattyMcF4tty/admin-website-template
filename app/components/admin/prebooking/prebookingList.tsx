'use client';

import { Prebook, PrebookSchema } from '@/schemas/prebook'
import { schemaToPrebook } from '@/utils/database/prebook';
import React from 'react'

interface PrebookingListProps {
  prebookingData: PrebookSchema[]
}

const PrebookingList = ({prebookingData}: PrebookingListProps) => {
  const prebooks = prebookingData.map((data) => {
    return schemaToPrebook(data)
  })

  var i = 0;
  while (i < 30) {
    prebooks.push(prebooks[0])
    i++
  }
  
  return (
<div className='w-full h-[calc(100vh-8rem)] border-2'>
  SEARCH

  {/* Wrap table in a div to control scrolling */}
  <div className="h-full">
    <table className='rounded-md w-full'>
      <thead className='sticky top-0 bg-company-color-primary'>
        <tr>
          <th>Id</th>
          <th>customerId</th>
        </tr>
      </thead>
      <div>
        <tbody className='bg-white'>
          {prebooks.map((prebook, index) => (
            <tr key={index}>
              <td>
                {prebook.id}
              </td>
              <td>
                {prebook.customerId}
              </td>
            </tr>
          ))}
        </tbody>
      </div>
    </table>
  </div>
</div>

  )
}

export default PrebookingList