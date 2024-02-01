'use client';

import { useRealtimeVehicles } from '@/src/hooks/fleetVehiclesHook';
import { VehicleTypeSchema } from '@/src/schemas/vehicleType';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import SearchBar from './searchBar';
import { VehicleSchema } from '@/src/schemas/vehicle';

const VehicleList = () => {
    const {data, loading} = useRealtimeVehicles();
    const [lastUpdate, setLastUpdate] = useState('');

    /* Update timestamp */
    useEffect(() => {

        const updateTimestamp = () => {
            const now = new Date();
            const formattedTime = `${now.getHours() < 10 ? `0${now.getHours()}` : now.getHours()}:${now.getMinutes() < 10 ? `0${now.getMinutes()}` : now.getMinutes()}:${now.getSeconds() < 10 ? `0${now.getSeconds()}` : now.getSeconds()}`;
            setLastUpdate(formattedTime);
        };

        updateTimestamp();

    }, [data]);

  return (
    <div>
        {loading ? (
            <div>
                loading
            </div>
        ) : (
            <div>
                <SearchBar/>
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
            </div>
        )}
        <p className='text-xs italic'>
            Updated: {lastUpdate}
        </p>
    </div>
  )
}

export default VehicleList



const VehicleRow = ({vehicle}: {vehicle: VehicleSchema}) => {
    const [loadedType, setLoadedType] = useState<string | null>(null);
    const [isUpdated, setIsUpdated] = useState(false);
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

    /* Higlight vehicle when updated */
    useEffect(() => {
        setIsUpdated(true)
        setTimeout(() => setIsUpdated(false), 1000)
    }, [vehicle])

    return (
        <tr className={`
        ${isUpdated ? 'bg-orange-300 duration-400' : 'even:bg-slate-200 duration-150'}
        hover:cursor-pointer hover:text-white hover:bg-company-color-secondary
        transition ease-in-out`}
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