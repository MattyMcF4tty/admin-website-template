'use client';

import { useRealtimeVehicles } from '@/src/hooks/fleetVehiclesHook';
import { VehicleTypeSchema } from '@/src/schemas/vehicleType';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import Link from 'next/link';

const VehicleList = () => {
    const {data, loading} = useRealtimeVehicles();
  return (
    <div>
        {loading ? (
            <div>
                loading
            </div>
        ) : (
            <table className='w-full'>
                <thead className='bg-company-color-primary text-white'>
                    <tr className='font-thin'>
                        <th className='w-1/12 font-medium'>
                            ID
                        </th>
                        <th className='w-6/12 font-medium'>
                            Type
                        </th>
                        <th className='w-1/12 font-medium'>
                            Fuel
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((vehicle) => (
                        <VehicleRow key={vehicle.id} vehicle={vehicle}/>
                    ))}
                </tbody>
            </table>
        )}
    </div>
  )
}

export default VehicleList



const VehicleRow = ({vehicle}: {vehicle: VehicleSchema}) => {
    const [loadedType, setLoadedType] = useState<string | null>(null);
    const router = useRouter();

    useEffect(() => {
        fetch(`/api/vehicleType?id=${vehicle.type}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        })
        .then(response => response.json())
        .then((data) => {
            console.log(data.message)
            const type = data.type as VehicleTypeSchema;
            
            setLoadedType(`${type.brand} ${type.model}`)
        })
    }, [vehicle.type])

    return (
        <tr className='even:bg-slate-200 
        hover:bg-company-color-secondary hover:cursor-pointer duration-100 hover:text-white'
        onClick={() => router.push(`${vehicle.id}`)}
        >
            <td className='text-center'>
                {String(vehicle.id)}
            </td>
            <td className='border-x border-slate-700'>
                {loadedType ? (
                    loadedType
                ) : (
                    <FontAwesomeIcon icon={faSpinner} spin className='text-company-color-primary'/>
                )}
            </td>
            <td>
                {vehicle.fuelPercentage}%
            </td>
        </tr>
    )
}