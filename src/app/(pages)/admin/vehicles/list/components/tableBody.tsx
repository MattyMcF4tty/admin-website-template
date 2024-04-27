'use client';

import { useVehicleStates } from '@/hooks/useVehicleStates';
import { useVehicleTypes } from '@/hooks/useVehicleTypes';
import { useVehicles } from '@/hooks/useVehicles';
import Link from 'next/link';
import React, { FC, useEffect } from 'react';

interface TableBodyProps {}

const TableBody: FC<TableBodyProps> = () => {
  const { vehicles, loadingVehicles, useGetVehicles, useUpdateVehicles } = useVehicles();
  const { vehicleTypes, loadingVehicleTypes, useGetVehicleTypes } = useVehicleTypes();
  const { vehicleStates, loadingVehicleStates, useGetVehicleStates } = useVehicleStates();
  const isLoading = loadingVehicles || loadingVehicleStates || loadingVehicleTypes;

  useEffect(() => {
    const init = async () => {
      await useGetVehicles();
      await useGetVehicleTypes();
      await useGetVehicleStates();
    };

    init();
  }, []);

  if (!isLoading) {
    return (
      <tbody className="">
        {vehicles.map((vehicle) => (
          <tr key={vehicle.id} className="border-b h-[44px] hover:bg-slate-50 hover:font-medium">
            <td className="h-full align-middle text-center">
              <Link href={`${vehicle.id}`}>{vehicle.id}</Link>
            </td>

            <td className="h-full align-middle text-center">
              <Link href={`${vehicle.id}`}>{vehicle.numberPlate}</Link>
            </td>

            <td className="h-full align-middle text-center">
              <Link href={`config`}>
                {vehicleTypes[vehicle.type - 1]?.brand} {vehicleTypes[vehicle.type - 1]?.model}
              </Link>
            </td>

            <td className="h-full align-middle text-center">Location</td>

            <td className="h-full align-middle text-center">{vehicle.fuelPercentage}%</td>

            <td className="h-full align-middle text-center">Last trip</td>

            <td className="h-full align-middle text-center">
              <div className="flex text-center justify-center items-center">
                {vehicleStates ? (
                  <select
                    name="stateSelect"
                    id="stateSelect"
                    style={{ backgroundColor: vehicleStates[vehicle.state - 1].color }}
                    className="h-[90%] w-[90%] rounded-sm focus:outline-none text-center appearance-none"
                    defaultValue={vehicle.state}
                    onChange={(e) => {
                      let updatedVehicle = { ...vehicle, state: Number(e.target.value) };

                      useUpdateVehicles([updatedVehicle]);
                    }}
                  >
                    {vehicleStates.map((state) => (
                      <option
                        key={state.id}
                        style={{ backgroundColor: 'white' }}
                        id={state.name}
                        value={state.id}
                        className=""
                      >
                        {state.name}
                      </option>
                    ))}
                  </select>
                ) : (
                  <p>Loading</p>
                )}
              </div>
            </td>

            <td className="h-full align-middle text-center">Tags</td>
          </tr>
        ))}
      </tbody>
    );
  } else {
    <div>loading</div>;
  }
};

export default TableBody;
