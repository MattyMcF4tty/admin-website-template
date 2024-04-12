'use client';

import { useEffect, useState } from 'react';
import ContentBox from '../ui/contentBox';

const VehicleTypeList = () => {
  const [types, setTypes] = useState(null);

  return (
    <div className="w-full">
      <VehicleCard />
    </div>
  );
};

export default VehicleTypeList;

const VehicleCard = () => {
  return <ContentBox>car</ContentBox>;
};
