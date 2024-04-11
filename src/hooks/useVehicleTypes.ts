import { supabase } from '../lib/supabase';
import { VehicleType, VehicleTypeSchema } from '../schemas/vehicleType';

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

  const getVehicleTypes = async (): Promise<VehicleType[]> => {
    const { data, error } = await supabase
      .from(process.env.NEXT_PUBLIC_VEHICLE_TYPES_TABLE!)
      .select('*');

    if (error) {
      throw new Error(error.message);
    }

    if (!data) {
      return [];
    }

    const formattedVehicleTypes = data.map((vehicleData: VehicleTypeSchema) => {
      const newVehicleType = new VehicleType(vehicleData);
      return newVehicleType;
    });

    return formattedVehicleTypes;
  };

  return {
    getVehicleImage,
    getVehicleType,
    getVehicleTypes,
  };
};
