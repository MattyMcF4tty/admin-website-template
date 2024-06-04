import { NextPage } from 'next';
import { useVehicleTypes } from '@/hooks/useVehicleTypes';
import VehicleTypeList from '@/app/(pages)/admin/vehicles/config/components/vehicleTypeList';
import ContentBox from '@/components/ui/contentBox';

export const revalidate = 0;

const VehicleConfigPage: NextPage = async () => {
  /*   const { vehicleTypes } = useVehicleTypes();
  await useGetVehicleTypes(); */

  return (
    <div>
      <ContentBox>
        <h1 className="font-bold text-lg underline underline-offset-[5px] mb-1">Vehicle Config</h1>
        <span>
          On this page, you can modify rules for each vehicle type or apply changes universally. Be
          aware, these changes are effective immediately, impacting how all vehicles operate. Please
          proceed with caution and ensure accuracy when setting new rules.
        </span>
      </ContentBox>

      {/* Type rules */}
      <div>
        {/*         {vehicleTypes.map((type) => (
          <div key={type.id} className="mb-2">
            <VehicleTypeList />
          </div>
        ))} */}
      </div>
    </div>
  );
};

export default VehicleConfigPage;
