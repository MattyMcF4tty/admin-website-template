import { supabase } from '../lib/supabase';
import { Vehicle, VehicleSchema } from '../schemas/vehicle';

const vehicleTable = process.env.NEXT_PUBLIC_VEHICLES_TABLE!;

/**
 * Returns all vehicles in table. Supabase limits to 1000.
 * @returns {Promise<Vehicle[]>} - Returns an array of Vehicle classes
 */
export const getVehicles = async (): Promise<Vehicle[]> => {
  const { data, error } = await supabase.from(vehicleTable).select('*');

  if (error) {
    throw new Error(error.message);
  }

  if (!data) {
    return [];
  }

  const formattedVehicles = data.map((vehicleData: VehicleSchema) => {
    return new Vehicle(vehicleData);
  });

  return formattedVehicles;
};
