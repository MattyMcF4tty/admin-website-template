import PrebookingList from '@/src/app/admin/prebooking/list/components/prebookingList';
import { NextPage } from 'next'
import React, { cache } from 'react'

export const revalidate = 10

const PrebookingsListPage:NextPage = cache(async() => {
  const pageUpdateDate = new Date();

  return (
    <div>

      <div className='h-[70vh]'>
        <PrebookingList/>
      </div>
    </div>
  )
})

export default PrebookingsListPage;