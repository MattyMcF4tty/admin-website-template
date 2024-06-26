'use client';

import { useVehicleTypes } from '@/hooks/useVehicleTypes';
import { Vehicle } from '@/schemas/vehicle';
import { VehicleType } from '@/schemas/vehicleType';
import { getVehicles } from '@/utils/vehicles';
import Link from 'next/link';
import React, { FC, useEffect, useState } from 'react';

interface VehicleTableProps {}

const VehicleTable: FC<VehicleTableProps> = ({}) => {
  const [vehicles, setVehicles] = useState<Vehicle[] | null>(null);

  useEffect(() => {
    const init = async () => {
      setVehicles(await getVehicles());
    };

    init();
  }, []);

  return (
    <div className="w-full h-full">
      {/* Table Head */}
      <div className="w-full border-b border-company-color-primary flex flex-row">
        <p className="w-[3.2%] text-center">ID</p>
        <p className="w-[7.9%] text-center">Numberplate</p>
        <p className="w-[14.2%] text-center">Type</p>
        <p className="w-[20.4%] text-center">Location</p>
        <p className="w-[8.7%] text-center">Range</p>
        <p className="w-[12.3%] text-center">Last trip</p>
        <p className="w-[12.3%] text-center">State</p>
        <p className="w-[21%] text-center">Tags</p>
      </div>

      {/* Table Body */}
      {!vehicles ? (
        <div>Loading</div>
      ) : (
        vehicles.map((vehicle) => <TableRow key={vehicle.id} vehicle={vehicle} />)
      )}
    </div>
  );
};

export default VehicleTable;

/* Table head */
const TableRow = ({ vehicle }: { vehicle: Vehicle }) => {
  const { getVehicleType } = useVehicleTypes();
  const [vehicleType, setVehicletype] = useState<VehicleType | null>(null);

  useEffect(() => {
    const init = async () => {
      setVehicletype(await getVehicleType(vehicle.type));
    };

    init();
  }, []);

  const handleUpdate = () => {};

  return (
    <Link
      href={`${vehicle.id}`}
      className="flex flex-row border-b h-[44px] items-center hover:bg-slate-50"
    >
      <p className="w-[3.2%] text-center">{vehicle.id}</p>
      <p className="w-[7.9%] text-center">{vehicle.numberPlate}</p>
      <p className="w-[14.2%] text-center">
        {vehicleType ? `${vehicleType.brand} ${vehicleType.model}` : 'Loading'}
      </p>
      <p className="w-[20.4%] text-center">Location</p>
      <p className="w-[8.7%] text-center">{vehicle.fuelPercentage}</p>
      <p className="w-[12.3%] text-center">Last trip</p>
      <div className="w-[12.3%] text-center">
        <select
          className="bg-teal-500 h-[90%] w-[90%] rounded-sm z-30"
          defaultValue={vehicle.state}
          value={vehicle.state}
        >
          <option value="reposition">reposition</option>
        </select>
      </div>
      <p className="w-[21%] text-center">Tags</p>
    </Link>
  );
};
