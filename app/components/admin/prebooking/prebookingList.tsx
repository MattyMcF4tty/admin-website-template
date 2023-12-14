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
    <div className='w-full h-full'>
      SEARCH

      {/* Enclose table in a div for scrollable content */}
      <table className='w-full max-h-2 overflow-y-scroll bg-white'>
        <thead className='bg-company-color-primary'>
          <tr>
            <th>Id</th>
            <th>customerId</th>
          </tr>
        </thead>
        <tbody>
          {prebooks.map((prebook, index) => (
            <tr key={index}>
              <td>{prebook.id}</td>
              <td>{prebook.customerId}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PrebookingList