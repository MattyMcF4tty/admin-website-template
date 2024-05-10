'use client';

import { useEffect, useState } from 'react';
import { getVehicleStates } from '@/utils/vehicleStates';
import { VehicleStateSchema } from '@/schemas/vehicleState';
import { supabase } from '@/lib/supabase';

export const useVehicleStates = () => {
  const [vehicleStates, setVehicleStates] = useState<VehicleStateSchema[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const vehicleStatesTable = process.env.NEXT_PUBLIC_VEHICLE_STATES_TABLE!;

  useEffect(() => {
    const fetchVehicleStates = async () => {
      setLoading(true);
      const { data, error } = await supabase.from(vehicleStatesTable).select('*').order('id');

      if (error) {
        throw new Error(error.message);
      }

      if (data) {
        setVehicleStates(data);
      }

      setLoading(false);
    };
    fetchVehicleStates();
  }, []);

  return {
    vehicleStates,
    loading,
  };
};
