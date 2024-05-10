import React, { FC } from 'react';

interface TableHeadProps {}

const TableHead: FC<TableHeadProps> = ({}) => {
  return (
    <thead className="sticky top-0 bg-white">
      <tr className="w-full">
        <th className="w-[3.2%] text-center">ID</th>
        <th className="w-[7.9%] text-center">Numberplate</th>
        <th className="w-[14.2%] text-center">Type</th>
        <th className="w-[20.4%] text-center">Location</th>
        <th className="w-[8.7%] text-center">Range</th>
        <th className="w-[12.3%] text-center">Last trip</th>
        <th className="w-[12.3%] text-center">State</th>
        <th className="w-[21%] text-center">Tags</th>
      </tr>
      <tr>
        <td colSpan={8} className="bg-company-color-primary h-[1px]" />
      </tr>
    </thead>
  );
};

export default TableHead;
