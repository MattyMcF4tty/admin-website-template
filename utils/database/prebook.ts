import { Prebook, PrebookSchema } from "@/schemas/prebook";
import { getClient } from "./configs/supabaseConfig";
import { ErrorNotFound } from "@/schemas/errors";
import { cache } from "react";

const prebookTable = 'prebooks';

function mapServerDataToPrebookSchema(serverData: any): PrebookSchema {
    return {
        id: serverData.id,
        customerId: serverData.customer_id,
        scheduledDeliveryDate: new Date(serverData.scheduled_delivery_date),
        bookedVehicleTypeId: serverData.vehicle_type,

        delivererId: serverData.deliverer_id,
        deliveredDate: serverData.delivered_date ? new Date(serverData.delivered_date) : null,
        deliveredVehicleId: serverData.delivered_vehicle_id,

        createdAt: serverData.created_at ? new Date(serverData.created_at) : null
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

export async function fetchPrebook(prebookId: number) {
    const supaClient = getClient();

    const { data, error } = await supaClient.from(prebookTable).select().eq("id", `${prebookId}`)


    if (error) {
        console.error("Supa error:", error)
    }

    if (!data || data.length <= 0) {
        throw new ErrorNotFound(`Prebook with id ${prebookId} does not exist.`)
    }

    const prebookData = mapServerDataToPrebookSchema(data[0]);

    return schemaToPrebook(prebookData)
}

export const fetchAllPrebooks = async() => {
    const supaClient = getClient();

    const { data, error } = await supaClient.from(prebookTable).select().gte('id', '0')

    if (error) {
        console.error("Supa error:", error)
    }

    if (!data || data.length <= 0) {
        throw new ErrorNotFound(`No prebooks where found in database.`)
    }

    const prebookingData = data as PrebookSchema[];

    
    const prebooks = prebookingData.map((data) => {
        const prebookData = mapServerDataToPrebookSchema(data);

        return schemaToPrebook(prebookData);   
    })

    console.log('Fetched ' + prebooks.length + ' prebooks.')
    return prebooks;
}