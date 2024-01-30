import { ErrorInternalServerError } from "@/src/schemas/errors";
import getClient from "./configs/supabaseConfig";
import { VehicleType } from "@/src/schemas/vehicleType";


export async function fetchTable(tableName: string) {
    const supabaseClient = getClient();

    const { data, error } = await supabaseClient
        .from(tableName)
        .select()
        
    if (error) {
        throw new ErrorInternalServerError(error.message);
    }

    return data;
}

export async function updateRow(tableName:string, rowId:number, updateData:object) {
    const supabaseClient = getClient();


    const { error } = await supabaseClient
    .from(tableName)
    .update(updateData)
    .eq('id', String(rowId))
    if (error) {
        throw new ErrorInternalServerError(error.message);
    }

    return true

}

export async function fetchTableIds(tableName: string) {
    const supabaseClient = getClient();

    const { data, error } = await supabaseClient.from(tableName).select('id')
    if (error) {
        throw new ErrorInternalServerError(error.message);
    }

    if (!data) {
        return [];
    }

    return data.map((data) => {
        return data.id as number
    })
}

export async function fetchRow(tableName:string, column:string, value:string) {
    const supabaseClient = getClient();

    const {data, error} = await supabaseClient.from(tableName).select().eq(column, value).limit(1).single();
    if (error) {
        throw new ErrorInternalServerError(error.message);
    }

    return data;
}