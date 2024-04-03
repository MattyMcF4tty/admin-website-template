import { ErrorInternalServerError, ErrorNotFound } from '@/src/schemas/errors';
import { Prebook, PrebookSchema } from '@/src/schemas/prebook';
import { cache } from 'react';
import CreateSupabaseClient from './configs/supabaseConfig';

const prebookTable = 'prebooks';

function mapDataToPrebookSchema(serverData: any): PrebookSchema {
  return {
    id: serverData.id,
    customerId: serverData.customer_id,
    scheduledDeliveryDate: new Date(serverData.scheduled_delivery_date),
    bookedVehicleTypeId: serverData.vehicle_type,

    delivererId: serverData.deliverer_id,
    deliveredDate: serverData.delivered_date ? new Date(serverData.delivered_date) : null,
    deliveredVehicleId: serverData.delivered_vehicle_id,

    createdAt: serverData.created_at ? new Date(serverData.created_at) : null,
  };
}

export function schemaToPrebook(prebookSchema: PrebookSchema) {
  return new Prebook(
    prebookSchema.id,
    prebookSchema.customerId,
    prebookSchema.scheduledDeliveryDate,
    prebookSchema.bookedVehicleTypeId,
    prebookSchema.delivererId,
    prebookSchema.deliveredDate,
    prebookSchema.deliveredVehicleId,
    prebookSchema.createdAt
  );
}

/**
 * This functions fetches all data of a specific prebook, based on provided id.
 * @param prebookId The id of the specific prebook of which you want to fetch.
 * @returns An object of type Prebook.
 */
export async function fetchPrebook(prebookId: number) {
  const supaClient = CreateSupabaseClient();

  const { data, error } = await supaClient.from(prebookTable).select().eq('id', `${prebookId}`);

  if (error) {
    console.error('Supa error:', error);
  }

  if (!data || data.length <= 0) {
    throw new ErrorNotFound(`Prebook with id ${prebookId} does not exist.`);
  }

  const prebookData = mapDataToPrebookSchema(data[0]);

  return schemaToPrebook(prebookData);
}

/**
 *
 * @param pageIndex Current page index
 * @param limit How many prebooks are fetched per page.
 * @param column What column you want to query from. Default is id.
 * @param sort What order the query should be, asc for ascending, des for descending. Default is asc.
 * @returns Returns an array of Prebook objects.
 */
export const fetchPagedPrebooks = async (
  pageIndex: number,
  limit: number,
  column: string = 'id',
  sort: 'asc' | 'des' = 'asc'
) => {
  const supaClient = CreateSupabaseClient();

  // We specify how large the query should be.
  let query = supaClient
    .from(prebookTable)
    .select()
    .range(pageIndex * limit, (pageIndex + 1) * limit - 1);

  // We specify what column we want to query and what order it should be fetched in.
  query = query.order(column, { ascending: sort === 'asc' });

  const { data, error } = await query;

  if (error) {
    throw new ErrorInternalServerError(error.message);
  }

  if (!data || data.length <= 0) {
    return [];
  }

  const prebookingData = data as PrebookSchema[];

  const prebooks = prebookingData.map((data) => {
    const prebookData = mapDataToPrebookSchema(data);

    return schemaToPrebook(prebookData);
  });

  console.log('Fetched ' + prebooks.length + ' prebooks.');
  return prebooks;
};
