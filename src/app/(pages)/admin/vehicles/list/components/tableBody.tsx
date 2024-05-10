'use client';

import { useVehicleStates } from '@/hooks/useVehicleStates';
import { useVehicleTypes } from '@/hooks/useVehicleTypes';
import { VehicleSchema } from '@/schemas/vehicle';
import Link from 'next/link';
import React, { FC } from 'react';

interface TableBodyProps {
  vehicles: VehicleSchema[];
  loading: boolean;
  onVehicleUpdate: (updatedVehicle: VehicleSchema) => void;
}

const TableBody: FC<TableBodyProps> = ({ vehicles, loading: loadingVehicles, onVehicleUpdate }) => {
  const { vehicleTypes, loading: loadingTypes } = useVehicleTypes();
  const { vehicleStates, loading: loadingStates } = useVehicleStates();
  const loading = loadingVehicles || loadingStates || loadingTypes;

  // Handler for select change
  const handleStateChange = (vehicle: VehicleSchema, newState: number) => {
    let updatedVehicle = { ...vehicle, state: newState };
    onVehicleUpdate(updatedVehicle);
  };

  return (
    <tbody className="">
      {!loading ? (
        vehicles.map((vehicle) => (
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
                <select
                  name="stateSelect"
                  id="stateSelect"
                  style={{
                    backgroundColor: vehicleStates[vehicle.state - 1].color,
                    color: vehicleStates[vehicle.state - 1].textColor,
                  }}
                  className="h-[90%] w-[90%] rounded-sm focus:outline-none text-center appearance-none"
                  defaultValue={vehicle.state}
                  onChange={(e) => handleStateChange(vehicle, Number(e.target.value))}
                >
                  {vehicleStates.map((state) => (
                    <option
                      key={state.id}
                      style={{ backgroundColor: 'white', color: 'black' }}
                      id={state.name}
                      value={state.id}
                      className=""
                    >
                      {state.name}
                    </option>
                  ))}
                </select>
              </div>
            </td>
            <td className="h-full align-middle text-center">Tags</td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan={8} className="text-center">
            ...Loading Vehicles
          </td>
        </tr>
      )}
    </tbody>
  );
};

export default TableBody;
