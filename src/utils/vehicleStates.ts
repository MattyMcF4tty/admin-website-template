import { supabase } from '@/lib/supabase';
import { VehicleStateSchema } from '@/schemas/vehicleState';

const vehicleStatesTable = process.env.NEXT_PUBLIC_VEHICLE_STATES_TABLE!;

/**
 *
 * @returns Returns and array of all vehicle states from database in order by id;
 */
export const getVehicleStates = async () => {
  const { data, error } = await supabase.from(vehicleStatesTable).select('*').order('id');

  if (error) {
    throw new Error(error.message);
  }

  if (!data) {
    return [];
  }

  return data;
};
