'use client';

import { useFetchRealtimeData } from '@/src/hooks/databaseHooks';
import { fetchPagedPrebooks } from '@/src/utils/database/prebook';

import React, { useState } from 'react'


const PrebookingList = () => {
  const prebooks = await fetchPagedPrebooks(1, 20, 'delivered_date', 'asc')
  const livePrebook = useFetchRealtimeData('prebooks')

  
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