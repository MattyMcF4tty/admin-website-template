import { supabase } from '@/lib/supabase';
import { VehicleTypeSchema } from '@/schemas/vehicleType';

const vehicleTypeTable = process.env.NEXT_PUBLIC_VEHICLE_TYPES_TABLE!;

/**
 * Returns all vehicle types in table. Supabase limits to 1000.
 * @returns {Promise<VehicleTypeSchema[]>} - Returns an array of vehicle types
 */
export const getVehicleTypes = async (): Promise<VehicleTypeSchema[]> => {
  const { data, error } = await supabase.from(vehicleTypeTable).select('*').order('id');

  if (error) {
    throw new Error(error.message);
  }

  if (!data) {
    return [];
  }

  return data;
};
