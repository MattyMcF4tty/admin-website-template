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
  
  return (
    <div className='w-full h-full'>
      SEARCH

      <table className='rounded-md'>
        <thead>
          <tr className='bg-company-color-primary '>
            <th className='rounde'>Id</th>
            <th>customerId</th>
          </tr>
        </thead>
        <tbody className='rounded-b-md bg-white'>
          {prebooks.map((prebook) => (
            <tr key={prebook.id} className='bg-opacity-0'>
              <td className='border-collapse: separate'>
                {prebook.id}
              </td>
              <td className='border-collapse: separate'>
                {prebook.customerId}
              </td>
            </tr>
          ))}        
        </tbody>
      </table>
    </div>
  )
}

export default PrebookingList