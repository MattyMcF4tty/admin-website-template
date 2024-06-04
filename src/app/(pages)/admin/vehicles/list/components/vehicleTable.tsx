'use client';

import React, { FC } from 'react';
import TableHead from './tableHead';
import TableBody from './tableBody';
import TableFooter from './tableFooter';
import { useVehicles } from '@/hooks/useVehicles';

interface VehicleTableProps {
  vehiclesPerPage: number;
}

const VehicleTable: FC<VehicleTableProps> = ({ vehiclesPerPage }) => {
  const { vehicles, loading, goToPage, updateVehicle, totalPages } = useVehicles(vehiclesPerPage);

  return (
    <table className="relative w-full h-full">
      <TableHead />
      <TableBody vehicles={vehicles} loading={loading} onVehicleUpdate={updateVehicle} />
      <TableFooter loading={loading} onPageChange={goToPage} totalPages={totalPages} />
    </table>
  );
};

export default VehicleTable;
