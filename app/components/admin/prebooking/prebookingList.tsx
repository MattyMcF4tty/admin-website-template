'use client';

import { Prebook, PrebookSchema } from '@/schemas/prebook'
import { schemaToPrebook } from '@/utils/database/prebook';
import React from 'react'

interface PrebookingListProps {
  prebookingData: PrebookSchema[],
  updateDate: Date
}

const PrebookingList = ({prebookingData, updateDate}: PrebookingListProps) => {
  const prebooks = prebookingData.map((data) => {
    return schemaToPrebook(data)
  })

  var i = 0;
  while (i < 20) {
    prebooks.push(prebooks[0])
    i++
  }
  
  return (
    <div className='w-full h-full overflow-y-auto'>
      SEARCH

      {/* Enclose table in a div for scrollable content */}
        <table className='w-full bg-white relative'>
          <thead>
            <tr>
              <th className='bg-company-color-primary sticky top-0'>Id</th>
              <th className='bg-company-color-primary sticky top-0'>customerId</th>
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
      <p>Updated at {updateDate.getHours()}:{updateDate.getMinutes()}:{updateDate.getSeconds()}</p>

    </div>
  );
};

export default PrebookingList