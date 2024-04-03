import ContentBox from '@/src/components/ui/ContentBox'
import { NextPage } from 'next'
import React from 'react'
import VehicleTable from './components/VehicleTable'

const VehicleListPage: NextPage = () => {

  return (
    <div>
      VehicleListPage
      <ContentBox>
        <VehicleTable/>
      </ContentBox>
    </div>
  )
}

export default VehicleListPage