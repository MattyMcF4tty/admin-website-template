import { SupabaseClient, createClient } from "@supabase/supabase-js";


var supabaseClient: SupabaseClient;

export function getClient() {
    if (!supabaseClient) {
        const url = process.env.SUPABASE_URL as string;
        const key = process.env.SUPABASE_ANON_KEY as string;

        supabaseClient = createClient(url, key);
        console.log('Created supabaseClient')
    }

    return supabaseClient;
}