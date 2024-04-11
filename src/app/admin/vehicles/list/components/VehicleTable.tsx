'use client';

import { useVehicleTypes } from '@/src/hooks/useVehicleTypes';
import { useVehicles } from '@/src/hooks/useVehicles';
import { Vehicle } from '@/src/schemas/vehicle';
import { VehicleType } from '@/src/schemas/vehicleType';
import Link from 'next/link';
import React, { FC, useEffect, useState } from 'react';

interface VehicleTableProps {}

const VehicleTable: FC<VehicleTableProps> = ({}) => {
  const { getVehicles } = useVehicles();
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
      {!vehicles ? <div>Loading</div> : vehicles.map((vehicle) => <TableRow vehicle={vehicle} />)}
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
  return (
    <Link
      href={`${vehicle.id}`}
      key={vehicle.id}
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
      <p className="w-[12.3%] text-center">{vehicle.state}</p>
      <p className="w-[21%] text-center">Tags</p>
    </Link>
  );
};
