'use client';

import ContentBox from '@/components/ui/contentBox';
import { useState } from 'react';

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
