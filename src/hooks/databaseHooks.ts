import { useEffect, useState } from "react";
import getClient from "../utils/database/configs/supabaseConfig";
import { PrebookSchema } from "../schemas/prebook";
import { ErrorInternalServerError } from "../schemas/errors";


export function useFetchRealtimeData (tableName:string) {
    const normalizedTableName = tableName.toLowerCase();

    const [data, setData] = useState<PrebookSchema | null>(null);
    const [loading, setLoading] = useState(true);
    



    const supabase = getClient();
    useEffect(() => {
        const channel = supabase.channel(`realtime ${normalizedTableName}`).on('postgres_changes', {
            event:'INSERT', schema:'public', table: normalizedTableName
        }, (payload) => {
            if (payload.errors !== null) {
                let errorMsg = ''

                for (let index = 0; index < payload.errors.length; index++) {
                    const error = payload.errors[index];
                    if (index === 0) {
                        errorMsg = `- ${error}`
                    }
                    errorMsg = errorMsg+`\n- ${error}`
                }

                throw new ErrorInternalServerError(errorMsg);
            }

            setData(payload.new as PrebookSchema)
        }).subscribe()

        return () => {
            channel.unsubscribe();
        }
    }, [supabase]);

    return {data, loading};
}