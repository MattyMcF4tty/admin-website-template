import { SupabaseClient, createClient } from "@supabase/supabase-js";


var supabaseClient: SupabaseClient;

export default function getClient() {
    if (!supabaseClient) {
        const url = process.env.NEXT_PUBLIC_SUPABASE_URL as string;
        const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string;

        supabaseClient = createClient(url, key);
        console.log('Created supabaseClient')
    }

    return supabaseClient;
}