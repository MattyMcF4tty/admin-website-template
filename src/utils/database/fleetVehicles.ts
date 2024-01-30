import { fetchRow, fetchTable } from "./database";

const tableName = process.env.NEXT_PUBLIC_VEHICLE_TABLE as string;

export async function fetchVehicle(id:number) {
    const vehicle = await fetchRow(tableName, 'id', String(id)) as VehicleSchema;

    return vehicle;
}

export async function fetchAllVehicles() {
    const vehicles = await fetchTable(tableName) as VehicleSchema[]

    return vehicles;
}