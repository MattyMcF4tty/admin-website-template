/* !!!! Not quite sure how to use this !!!! */

/* import { useState } from 'react';
import { supabase } from '../lib/supabase';
import { Vehicle, VehicleSchema } from '../schemas/vehicle';
import { fetchVehicles } from '../utils/vehicles';

export const useVehicles = () => {
  const [vehicles, setVehicles] = useState<Vehicle[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const getVehicles = async () => {
    setIsLoading(true);
    setVehicles(await fetchVehicles());
    setIsLoading(false);
  };

  const getVehicle = async (id: number): Promise<Vehicle> => {
    setIsLoading(true);
    

    const { data, error } = await supabase
      .from(process.env.NEXT_PUBLIC_VEHICLES_TABLE!)
      .select('*')
      .eq('id', `${id}`);

    if (error) {
      throw new Error(error.message);
    }

    // Assuming data[0] exists since we checked data.length
    const vehicleData: VehicleSchema = data[0];
    return new Vehicle(vehicleData);
  };

  return {
    getVehicles,
    getVehicle,
    vehicles,
    isLoading,
  };
};
 */
