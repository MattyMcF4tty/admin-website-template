import { createClient } from '@supabase/supabase-js'

/**
 * WARNING: THIS IS ONLY TO BE USED ON SERVER SIDE!
 */
export const CreateSupabaseAdminClient = () => {
    const url = process.env.NEXT_PUBLIC_SUPABASE_URL as string;
    const key = process.env.SUPABASE_SERVICE_ROLE_KEY as string;

    const adminClient = createClient(url, key, {
      auth: {
        autoRefreshToken: false,
        persistSession: false
      }
    })
    
    return adminClient
}