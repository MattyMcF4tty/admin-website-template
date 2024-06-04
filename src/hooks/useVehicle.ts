import { supabase } from '@/lib/supabase';
import { VehicleSchema } from '@/schemas/vehicle';
import React, { useEffect, useState } from 'react';

const vehicleTable = process.env.NEXT_PUBLIC_VEHICLES_TABLE!;

const useVehicle = (id: number) => {
  const [vehicle, setVehicle] = useState<VehicleSchema | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchVehicle = async () => {
      setLoading(true);
      const { data, error } = await supabase.from(vehicleTable).select('*').eq('id', `${id}`);

      if (error) {
        throw new Error(error.message);
      }

      if (data) {
        setVehicle(data[0]);
      }
      setLoading(false);
    };
    fetchVehicle();
  }, []);

  return {
    vehicle,
    loading,
  };
};

export default useVehicle;
