import { SupabaseClient, createClient } from "@supabase/supabase-js";


let supabaseClient:SupabaseClient;

export default function getClient() {
    const url = process.env.NEXT_PUBLIC_SUPABASE_URL as string;
    const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string;

    if (!supabaseClient) {
        console.log('Created new supabaseClient')
        supabaseClient = createClient(url, key);;
    }

    return supabaseClient
}