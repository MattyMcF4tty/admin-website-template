import { useState } from 'react';
import { supabase } from '../lib/supabase';
import { Vehicle, VehicleSchema } from '../schemas/vehicle';
import { getVehicle, getVehicles, updateVehicle } from '@/utils/vehicles';

export const useVehicles = () => {
  const [vehicles, setVehicles] = useState<Vehicle[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  /**
   *
   */
  const useGetVehicles = async () => {
    setIsLoading(true);
    setVehicles(await getVehicles());
    setIsLoading(false);
  };

  /**
   *
   */
  const useCountVehicles = async () => {
    setIsLoading(true);

    setIsLoading(false);
  };

  /**
   *
   * @param updatedVehicles
   */
  const useUpdateVehicles = async (updatedVehicles: Vehicle[]) => {
    setIsLoading(true);
    for (const updatedVehicle of updatedVehicles) {
      await updateVehicle(updatedVehicle);
    }
    setIsLoading(false);
  };

  return {
    useGetVehicles,
    vehicles,
    isLoading,
  };
};
