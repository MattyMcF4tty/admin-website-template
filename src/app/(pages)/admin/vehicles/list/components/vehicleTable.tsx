import React, { FC } from 'react';
import TableHead from './tableHead';
import TableBody from './tableBody';
import TableFooter from './tableFooter';

interface VehicleTableProps {}

const VehicleTable: FC<VehicleTableProps> = ({}) => {
  return (
    <table className="w-full h-full">
      <TableHead />
      <TableBody />
      <TableFooter />
    </table>
  );
};

export default VehicleTable;
