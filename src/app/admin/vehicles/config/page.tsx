import { VehicleTypeSchema } from '@/src/schemas/vehicleType';
import { NextPage } from 'next';
import VehicleTypeConfig from './components/vehicleTypeConfig';
import { fetchTable } from '@/src/lib/utils/database/database';
import ContentBox from '@/src/components/ui/ContentBox';
import { useVehicleTypes } from '@/src/hooks/useVehicleTypes';

export const revalidate = 0;

const VehicleConfigPage: NextPage = async () => {
  const { getVehicleTypes } = useVehicleTypes();
  const vehicleTypes = await getVehicleTypes();

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
        {vehicleTypes.map((type) => (
          <div key={type.id} className="mb-2">
            <VehicleTypeConfig type={type} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default VehicleConfigPage;
