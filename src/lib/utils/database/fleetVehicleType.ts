import { ErrorInternalServerError } from "@/src/schemas/errors";
import getClient from "./configs/supabaseConfig";
import { VehicleTypeSchema } from "@/src/schemas/vehicleType";
import { fetchRow, updateRow } from "./database";

const tableName = 'fleetVehicleTypes'

export async function fetchVehicleType(id:number) {
    const type = await fetchRow(tableName, 'id', String(id)) as VehicleTypeSchema;

    return type;
}

export async function patchVehicleType(data:VehicleTypeSchema) {
    const success = await updateRow(tableName, Number(data.id), data);

    return success;
}