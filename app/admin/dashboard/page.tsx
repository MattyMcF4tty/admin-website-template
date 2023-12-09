import { fetchPrebook } from '@/utils/database/prebook'
import { NextPage } from 'next'
import React, {useState} from 'react'

export const dynamic = 'auto',
  dynamicParams = 'auto',
  revalidate = 10,
  fetchCache = 'auto',
  runtime = 'nodejs',
  preferredRegion = 'auto'


const DashboardPage:NextPage = async () => {
  try {
    const prebook = await fetchPrebook(1);
  } catch (error:any) {
    console.error(error.message)
  }

  return (
    <div>
      DashboardPage
      <p>{new Date().toLocaleTimeString()}</p>
    </div>
  )
}

export default DashboardPage