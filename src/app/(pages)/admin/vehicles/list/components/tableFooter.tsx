'use client';

import { useVehicles } from '@/hooks/useVehicles';
import { countVehicles } from '@/utils/vehicles';
import React, { FC, useEffect, useState } from 'react';

interface TableFooterProps {}

const TableFooter: FC<TableFooterProps> = ({}) => {
  const { useCountVehicles } = useVehicles();
  const [vehicleCount, setVehicleCount] = useState<number>(NaN);

  useEffect(() => {
    const init = async () => {
      setVehicleCount(await useCountVehicles());
    };

    init();
  }, []);

  return (
    <tfoot>
      <tr>
        <td>{isNaN(vehicleCount) ? 'Loading...' : vehicleCount}</td>
      </tr>
    </tfoot>
  );
};

export default TableFooter;
