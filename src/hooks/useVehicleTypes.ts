import { supabase } from '../lib/supabase';
import { VehicleType } from '../schemas/vehicleType';

export const useVehicleTypes = () => {
  const getVehicleImage = (typeId: number) => {
    const { data } = supabase.storage
      .from(process.env.NEXT_PUBLIC_VEHICLE_TYPE_BUCKET!)
      .getPublicUrl(`${typeId}/image.png`);

    return data.publicUrl;
  };

  const getVehicleType = async (typeId: number) => {
    const { data, error } = await supabase
      .from(process.env.NEXT_PUBLIC_VEHICLE_TYPES_TABLE!)
      .select('*')
      .eq('id', `${typeId}`);

    if (error) {
      throw new Error(error.message);
    }

    const vehicletype: VehicleType = data[0];

    return vehicletype;
  };

  return {
    getVehicleImage,
    getVehicleType,
  };
};
