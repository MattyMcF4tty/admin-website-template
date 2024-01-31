import { fetchVehicleType } from '@/src/utils/database/fleetVehicleType';
import { fetchVehicle } from '@/src/utils/database/fleetVehicles'
import { fetchVehicleTypeImage } from '@/src/utils/database/storage/vehicleTypeImages';
import { NextPage } from 'next'
import React from 'react'

const VehiclePage = async ({params}: {params: { id: string}}) => {
  const id = Number(params.id);
  const vehicle = await fetchVehicle(id)
  const vehicleType = await fetchVehicleType(vehicle.type)
  const vehicleImageUrl = await fetchVehicleTypeImage(vehicle.type);

  return (
    <div>
      <img src={vehicleImageUrl} alt="Image of vehicle type" />
      {vehicleType.brand} {vehicleType.model}
    </div>
  )
}

export default VehiclePage