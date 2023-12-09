import { Prebook, PrebookSchema } from "@/schemas/prebook";
import { getClient } from "./configs/supabaseConfig";
import { ErrorNotFound } from "@/schemas/errors";

const prebookTable = 'prebooks';

export async function fetchPrebook(prebookId: number) {
    const supaClient = getClient();

    const { data, error } = await supaClient.from('prebooks').select().eq("id", `${prebookId}`)


    if (error) {
        console.error("Supa error:", error)
    }

    console.log(data)
    if (!data || data.length <= 0) {
        throw new ErrorNotFound(`Prebook with id ${prebookId} does not exist.`)
    }

    const prebookData = data[0] as PrebookSchema;

    return new Prebook(prebookData.id, prebookData.bookerId, prebookData.deliveryDate, prebookData.vehicleTypeId)
}