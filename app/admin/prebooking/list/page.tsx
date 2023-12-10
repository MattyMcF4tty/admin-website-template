import PrebookingList from '@/app/components/admin/prebooking/prebookingList';
import { fetchAllPrebooks, fetchPrebook } from '@/utils/database/prebook'
import { NextPage } from 'next'
import React, { cache } from 'react'

export const revalidate = 10

const PrebookingsListPage:NextPage = cache(async() => {
  const prebookings = (await fetchAllPrebooks()).map((prebook) => {
    return prebook.toPlainObject()
  });

  return (
    <div>
      <PrebookingList prebookingData={prebookings}/>
      <p>Updated at {new Date().getHours()}:{new Date().getMinutes()}:{new Date().getSeconds()}</p>
    </div>
  )
})

export default PrebookingsListPage;