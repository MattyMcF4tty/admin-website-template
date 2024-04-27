'use client';

import { useState } from 'react';
import { VehicleSchema } from '../schemas/vehicle';
import { countVehicles, getVehicles, updateVehicle } from '@/utils/vehicles';
import { supabase } from '@/lib/supabase';

export const useVehicles = () => {
  const [vehicles, setVehicles] = useState<VehicleSchema[]>([]);
  const [loadingVehicles, setLoadingVehicles] = useState<boolean>(false);

  /**
   *
   */
  const useGetVehicles = async () => {
    setLoadingVehicles(true);
    setVehicles(await getVehicles());
    setLoadingVehicles(false);
  };

  /**
   *
   * @param updatedVehicles
   */
  const useUpdateVehicles = async (updatedVehicles: VehicleSchema[]) => {
    for (const updatedVehicle of updatedVehicles) {
      await updateVehicle(updatedVehicle);
      setVehicles((prevVehicles) =>
        prevVehicles.map((v) => (v.id === updatedVehicle.id ? updatedVehicle : v))
      );
    }
  };

  const useCountVehicles = async () => {
    const vehicleCount = await countVehicles();
    return vehicleCount;
  };

  return {
    useGetVehicles,
    useUpdateVehicles,
    useCountVehicles,
    vehicles,
    loadingVehicles,
  };
};
