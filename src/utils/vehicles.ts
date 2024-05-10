import { supabase } from '../lib/supabase';
import { VehicleSchema } from '../schemas/vehicle';

const vehicleTable = process.env.NEXT_PUBLIC_VEHICLES_TABLE!;

/**
 * Returns all vehicles in table, optionally limited by a specified count.
 * Supabase has a default limit to 1000 if not specified.
 * @param {number | null} [limit=null] - Maximum number of vehicles to return. If null, no explicit limit is set.
 * @returns {Promise<VehicleSchema[]>} - Returns an array of vehicles
 */
export const getVehicles = async (limit: number | null = null): Promise<VehicleSchema[]> => {
  let query = supabase.from(vehicleTable).select('*').order('id');

  if (limit) {
    query = query.limit(limit);
  }

  const { data, error } = await query;

  if (error) {
    throw new Error(error.message);
  }

  if (!data) {
    return [];
  }

  return data;
};

/**
 * Fetches a specific vehicle from the database based on its id
 * @param id - The id of the vehicle.
 * @returns {Promise<Vehicle | null>} - Returns single Vehicle or null if no vehicle was found.
 */
export const getVehicle = async (id: number): Promise<VehicleSchema | null> => {
  const { data, error } = await supabase
    .from(process.env.NEXT_PUBLIC_VEHICLES_TABLE!)
    .select('*')
    .eq('id', `${id}`);

  if (error) {
    throw new Error(error.message);
  }

  return data[0];
};

/**
 * Deletes specific vehicle based on provided id.
 * @param id - The id of vehicle.
 * @returns - Returns nothing if successfull and throws error if unsuccessful.
 */
export const deleteVehicle = async (id: number) => {
  const { error } = await supabase.from(vehicleTable).delete().eq('id', `${id}`);

  if (error) {
    throw new Error(error.message);
  }
};

/**
 * Takes ID from updated vehicle object and updates vehicle cells in database to match.
 * @param updatedVehicle - The updated vehicle object.
 */
export const updateVehicle = async (vehicleData: VehicleSchema) => {
  console.log('updating vehicle');

  const { error } = await supabase
    .from(vehicleTable)
    .update(vehicleData)
    .eq('id', `${vehicleData.id}`);

  if (error) {
    throw new Error(error.message);
  }
};

export const countVehicles = async (): Promise<number> => {
  const { count, error } = await supabase.from(vehicleTable).select('*', { count: 'exact' });

  if (error) {
    throw new Error(error.message);
  }

  return count || NaN;
};

export const queryVehicles = async (
  col: string | undefined, // Column to search within
  search: string | undefined, // Search term for the 'col'
  filterCol: string | undefined, // Column to apply filter on
  ascending: boolean | undefined // Boolean for sort order, true for ascending
): Promise<VehicleSchema[]> => {
  let query = supabase.from(vehicleTable).select('*');

  if (search && col) {
    query = query.ilike(col, search);
  }

  if (filterCol) {
    query = query.order(filterCol, { ascending: ascending || false });
  }

  const { data, error } = await query;

  if (error) {
    throw new Error(error.message);
  }

  return data;
};
