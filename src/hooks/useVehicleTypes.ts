'use client';

import { useState } from 'react';
import { supabase } from '@/lib/supabase';
import { VehicleTypeSchema } from '@/schemas/vehicleType';
import { getVehicleTypes } from '@/utils/vehicleTypes';

export const useVehicleTypes = () => {
  const [vehicleTypes, setVehicleTypes] = useState<VehicleTypeSchema[]>([]);
  const [loadingVehicleTypes, setLoadingVehicleTypes] = useState<boolean>(false);

  const useGetVehicleImage = (typeId: number) => {
    const { data } = supabase.storage
      .from(process.env.NEXT_PUBLIC_VEHICLE_TYPE_BUCKET!)
      .getPublicUrl(`${typeId}/image.png`);

    return data.publicUrl;
  };

  const useGetVehicleType = async (typeId: number) => {
    const { data, error } = await supabase
      .from(process.env.NEXT_PUBLIC_VEHICLE_TYPES_TABLE!)
      .select('*')
      .eq('id', `${typeId}`);

    if (error) {
      throw new Error(error.message);
    }

    const vehicletype: VehicleTypeSchema = data[0];

    return vehicletype;
  };

  const useGetVehicleTypes = async () => {
    setLoadingVehicleTypes(true);
    setVehicleTypes(await getVehicleTypes());
    setLoadingVehicleTypes(false);
  };

  return {
    useGetVehicleImage,
    useGetVehicleType,
    useGetVehicleTypes,
    vehicleTypes,
    loadingVehicleTypes,
  };
};
