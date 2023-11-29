import { Prebook, PrebookSchema } from "@/schemas/prebook";
import { GetClient } from "./configs/supabaseConfig";

const prebookTable = 'prebooks';

async function GetPrebook(prebookId: number) {
    const supaClient = GetClient();

    const tableData = (await supaClient.from(prebookTable).select().eq("id", prebookId)).data;

    if (!tableData || tableData.length <= 0) {
        return null
    }

    const prebookData = tableData[0] as PrebookSchema;
    const prebook = new Prebook(prebookData.id, prebookData.bookerId, prebookData.deliveryDate, prebookData.vehicleTypeId)
}