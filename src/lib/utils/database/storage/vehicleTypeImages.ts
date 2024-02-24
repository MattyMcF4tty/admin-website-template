import getClient from "../configs/supabaseConfig";

const bucketName = process.env.NEXT_PUBLIC_VEHICLE_TYPE_IMAGE_BUCKET as string

export async function fetchVehicleTypeImage(id:number) {
    const supaClient = getClient();

    const fileData = supaClient.storage.from(bucketName).getPublicUrl(String(id));

    return fileData.data.publicUrl;
}