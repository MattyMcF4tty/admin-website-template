'use client';

import { Vehicle } from '@/src/schemas/vehicle'
import React, { FC } from 'react'

interface VehicleTableProps {
}

const VehicleTable: FC<VehicleTableProps> = ({}) => {
/*     const vehicleData = await fetchAllVehicles();
    const vehicles = vehicleData.map((vehicleData) => {
      const vehicle = new Vehicle(vehicleData);
      return vehicle;
    })

    useFetch */

    return (
        <div className='w-full h-full'>

            {/* Table Head */}
            <div className='w-full border-b border-company-color-primary flex flex-row'>
                <p className='w-[3.2%] text-center'>ID</p>
                <p className='w-[7.9%] text-center'>Numberplate</p>
                <p className='w-[14.2%] text-center'>Type</p>
                <p className='w-[20.4%] text-center'>Location</p>
                <p className='w-[8.7%] text-center'>Range</p>
                <p className='w-[12.3%] text-center'>Last trip</p>
                <p className='w-[12.3%] text-center'>State</p>
                <p className='w-[21%] text-center'>Tags</p>
            </div>

            {/* Table Body */}
{/*             {data.map((Vehicle) => (
                <div key={Vehicle.id} className='flex flex-row'>
                    <p className='w-[3.2%] text-center'>{Vehicle.id}</p>
                    <p className='w-[7.9%] text-center'>{Vehicle.numberPlate}</p>
                    <p className='w-[14.2%] text-center'>{Vehicle.type}</p>
                    <p className='w-[20.4%] text-center'>Location</p>
                    <p className='w-[8.7%] text-center'>{Vehicle.fuelPercentage}</p>
                    <p className='w-[12.3%] text-center'>Last trip</p>
                    <p className='w-[12.3%] text-center'>{Vehicle.state}</p>
                    <p className='w-[21%] text-center'>Tags</p>
                </div>
            ))} */}
        </div>
    )
}

export default VehicleTable