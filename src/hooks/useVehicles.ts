import { useEffect, useState } from 'react';
import { VehicleSchema } from '../schemas/vehicle';
import { supabase } from '@/lib/supabase';

const vehicleTable = process.env.NEXT_PUBLIC_VEHICLES_TABLE!;

/**
 *
 * @param perPage - Specifies how many vehicles will be on each page. Default is 20.
 * @returns An array of vehicles.
 */
export const useVehicles = (perPage: number = 20) => {
  const [vehicles, setVehicles] = useState<VehicleSchema[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);

  //Fetch data on initializtion
  useEffect(() => {
    const fetchVehicles = async () => {
      setLoading(true);
      const { data, error, count } = await supabase
        .from(vehicleTable)
        .select('*', { count: 'exact' })
        .range((currentPage - 1) * perPage, currentPage * perPage - 1)
        .order('id');

      if (error) {
        throw new Error(error.message);
      }

      if (data) {
        setVehicles(data);
      }

      if (count) {
        setTotalPages(Math.ceil(count / perPage));
      }

      setLoading(false);
    };
    fetchVehicles();
  }, [currentPage, perPage]);

  const updateVehicle = async (updatedVehicle: VehicleSchema) => {
    try {
      console.log('updating vehicle');
      const { error } = await supabase
        .from(vehicleTable)
        .update(updatedVehicle)
        .eq('id', `${updatedVehicle.id}`);

      if (error) {
        throw new Error(error.message);
      }

      // Update the local vehicles array
      setVehicles((prevVehicles) =>
        prevVehicles.map((vehicle) =>
          vehicle.id === updatedVehicle.id ? { ...vehicle, ...updatedVehicle } : vehicle
        )
      );
    } catch (error) {
      // Handle error appropriately
      console.error('Error updating vehicle:', error);
    }
  };

  const goToPage = (page: number) => {
    setCurrentPage(page);
  };

  return {
    goToPage,
    updateVehicle,
    vehicles,
    loading,
    totalPages,
  };
};
