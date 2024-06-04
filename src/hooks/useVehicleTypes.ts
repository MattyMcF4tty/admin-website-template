import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import { VehicleTypeSchema } from '@/schemas/vehicleType';

const vehicleTypeTable = process.env.NEXT_PUBLIC_VEHICLE_TYPES_TABLE!;

export const useVehicleTypes = () => {
  const [vehicleTypes, setVehicleTypes] = useState<VehicleTypeSchema[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchVehicleTypes = async () => {
      setLoading(true);
      const { data, error } = await supabase.from(vehicleTypeTable).select('*').order('id');

      if (error) {
        throw new Error(error.message);
      }

      if (data) {
        setVehicleTypes(data);
      }

      setLoading(false);
    };
    fetchVehicleTypes();
  }, []);

  const getVehicleImage = (typeId: number) => {
    const { data } = supabase.storage
      .from(process.env.NEXT_PUBLIC_VEHICLE_TYPE_BUCKET!)
      .getPublicUrl(`${typeId}/image.png`);

    return data.publicUrl;
  };

  return {
    getVehicleImage,
    vehicleTypes,
    loading,
  };
};
