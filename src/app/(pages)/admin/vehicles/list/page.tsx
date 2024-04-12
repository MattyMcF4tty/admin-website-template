import { NextPage } from 'next';
import React from 'react';
import ContentBox from '@/components/ui/contentBox';
import VehicleTable from '@/components/tables/vehicleTable';

const VehicleListPage: NextPage = () => {
  return (
    <div>
      <ContentBox>
        <VehicleTable />
      </ContentBox>
    </div>
  );
};

export default VehicleListPage;
