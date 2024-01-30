import { NextPage } from 'next'
import React from 'react'
import VehicleList from './components/vehicleList'

const VehicleListPage:NextPage = () => {
  return (
    <div>
      VehicleLists
      <div>
        <VehicleList/>
      </div>
    </div>
  )
}

export default VehicleListPage