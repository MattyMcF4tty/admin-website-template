'use client';

import { useRealtimeVehicles } from '@/src/hooks/fleetVehiclesHook';
import React from 'react'

const VehicleList = () => {
    const {data, loading} = useRealtimeVehicles();
  return (
    <div>
        {loading ? (
            <div>
                loading
            </div>
        ) : (
            <div>
                {data.map((vehicle) => (
                    <div key={vehicle.id} className='flex flex-row'>
                        <p>
                            {vehicle.id}
                        </p>
                        <p>
                            {String(vehicle.fuelPercentage)}
                        </p>
                    </div>
                ))}
            </div>
        )}
    </div>
  )
}

export default VehicleList