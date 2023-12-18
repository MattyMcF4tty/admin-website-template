import PrebookingList from '@/app/components/admin/prebooking/prebookingList';
import { fetchAllPrebooks } from '@/utils/database/prebook'
import { NextPage } from 'next'
import React, { cache } from 'react'

export const revalidate = 10

const PrebookingsListPage:NextPage = cache(async() => {
  const prebookings = (await fetchAllPrebooks()).map((prebook) => {
    return prebook.toPlainObject()
  });
  const pageUpdateDate = new Date();

  return (
    <div>

      <div className='h-[70vh]'>
        <PrebookingList prebookingData={prebookings} updateDate={pageUpdateDate}/>
      </div>
    </div>
  )
})

export default PrebookingsListPage;