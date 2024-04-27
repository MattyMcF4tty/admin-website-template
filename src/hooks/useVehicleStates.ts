'use client';

import { useState } from 'react';
import { getVehicleStates } from '@/utils/vehicleStates';
import { VehicleStateSchema } from '@/schemas/vehicleState';

export const useVehicleStates = () => {
  const [vehicleStates, setVehicleStates] = useState<VehicleStateSchema[]>([]);
  const [loadingVehicleStates, setLoadingVehicleStates] = useState<boolean>(false);

  const useGetVehicleStates = async () => {
    setLoadingVehicleStates(true);
    setVehicleStates(await getVehicleStates());
    setLoadingVehicleStates(false);
  };

  return {
    vehicleStates,
    loadingVehicleStates,
    useGetVehicleStates,
  };
};
