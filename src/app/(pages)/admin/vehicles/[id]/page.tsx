import React from 'react';
import VehicleInfoBoard from '../../../../../components/infoboards/vehicleInfoBoard';
import { useVehicleTypes } from '@/hooks/useVehicleTypes';
import ContentBox from '@/components/ui/contentBox';
import { getVehicle } from '@/utils/vehicles';

export const revalidate = 0;

const VehiclePage = async ({ params }: { params: { id: string } }) => {
  const { getVehicleImage } = useVehicleTypes();

  const id = Number(params.id);
  const vehicle = await getVehicle(id);
  const imageUrl = getVehicleImage(vehicle.type);

  return (
    <div className="grid grid-cols-4 gap-6 h-[calc(100vh-6rem)]">
      {/* Info about vehicle */}
      <ContentBox className="col-span-1 col-start-1 bg-white p-4 rounded-md shadow-md flex items-center flex-col">
        <p className="w-full text-center text-xl font-semibold border-b h-[1.75rem]">Overview</p>
        <img src={imageUrl} alt="Image of vehicle type" className="rounded-md mb-2" />
        <h1 className="text-lg hover:text-xl duration-150 hover:cursor-pointer">
          {vehicle.numberPlate}
        </h1>
        <h2 className="text-xs hover:text-sm duration-150 hover:cursor-pointer mb-5 hover:mb-4">
          {vehicle.id}
        </h2>
        <label htmlFor="vehicleStatus" className="w-full text-center text-sm border-b">
          Status
        </label>
        <div id="vehicleStatus" className="w-full">
          <div className="my-2 rounded-md px-1">
            <label htmlFor="state" className="text-xs">
              State
            </label>
            <p id="state">{vehicle.state}</p>
          </div>

          <div className="my-2 rounded-md px-1">
            <label htmlFor="reserved" className="text-xs">
              Reserved
            </label>
            <p id="reserved">{vehicle.reserved ? 'Yes' : 'No'}</p>
          </div>

          <div className="my-2 rounded-md px-1">
            <label htmlFor="fuelPercentage" className="text-xs">
              Fuel Percentage
            </label>
            <p id="fuelPercentage">{vehicle.fuelPercentage}%</p>
          </div>
        </div>
      </ContentBox>

      <ContentBox className="col-span-3 col-start-2 bg-white rounded-md p-4 shadow-md flex flex-col">
        <VehicleInfoBoard />
        <div></div>
      </ContentBox>
    </div>
  );
};

export default VehiclePage;
