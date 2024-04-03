import { SupabaseClient, createClient } from "@supabase/supabase-js";


/**
 * To be used on server and client.
 */
export default function CreateSupabaseClient() {
    const url = process.env.NEXT_PUBLIC_SUPABASE_URL as string;
    const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string;

    const client = createClient(url, key);;

    return client;
}