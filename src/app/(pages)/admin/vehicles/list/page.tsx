import { NextPage } from 'next';
import React from 'react';
import ContentBox from '@/components/ui/contentBox';
import VehicleTable from './components/vehicleTable';

const VehicleListPage: NextPage = () => {
  return (
    <div className="h-full">
      <ContentBox className="h-full overflow-y-auto">
        <VehicleTable />
      </ContentBox>
    </div>
  );
};

export default VehicleListPage;
