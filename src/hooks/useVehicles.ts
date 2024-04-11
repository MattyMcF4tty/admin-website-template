import { supabase } from '../lib/supabase';
import { Vehicle, VehicleSchema } from '../schemas/vehicle';

export const useVehicles = () => {
  const getVehicles = async (): Promise<Vehicle[]> => {
    const { data, error } = await supabase
      .from(process.env.NEXT_PUBLIC_VEHICLES_TABLE!)
      .select('*');

    if (error) {
      throw new Error(error.message);
    }

    if (!data) {
      return [];
    }

    const formattedVehicles = data.map((vehicleData: VehicleSchema) => {
      const newVehicle = new Vehicle(vehicleData);
      return newVehicle;
    });

    return formattedVehicles;
  };

  const getVehicle = async (id: number): Promise<Vehicle> => {
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
  };
};
