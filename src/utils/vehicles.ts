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

/**
 * Fetches a specific vehicle from the database based on its id
 * @param id - The id of the vehicle.
 * @returns {Promise<Vehicle | null>} - Returns single Vehicle or null if no vehicle was found.
 */
export const getVehicle = async (id: number): Promise<Vehicle> => {
  const { data, error } = await supabase
    .from(process.env.NEXT_PUBLIC_VEHICLES_TABLE!)
    .select('*')
    .eq('id', `${id}`);

  if (error) {
    throw new Error(error.message);
  }

  const vehicleData: VehicleSchema = data[0];
  return new Vehicle(vehicleData);
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
