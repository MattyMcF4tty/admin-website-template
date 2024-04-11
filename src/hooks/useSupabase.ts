import { useState } from 'react';
import { supabase } from '../lib/supabase';

export const useSupabase = () => {
  const [error, setError] = useState<string | null>(null);

  /**
   * Fetches current session data from supabase. Based on cookie data.
   * @returns {Promise<Session | null>} - Returns session if session is fetched successfully.
   */
  const getSession = async () => {
    const {
      data: { session },
      error,
    } = await supabase.auth.getSession();

    /* Handle potential errors */
    if (error) {
      setError(error.message || 'An error occured');
    }

    const { access_token, refresh_token }: any = session;

    await setSession(access_token, refresh_token);

    return session;
  };

  /**
   * Refreshes current session with cookie data.
   * @returns {Promise<Session | null>} - Returns session if session is refreshed successfully.
   */
  const refreshSession = async () => {
    const {
      data: { session },
      error,
    } = await supabase.auth.refreshSession();

    /* Handle potential errors */
    if (error) {
      setError(error.message || 'An error occured');
    }

    return session;
  };

  /**
   * Sets the user session with provided tokens.
   * @param {string} access_token - The access token for the session.
   * @param {string} refresh_token - The refresh token for the session.
   * @returns {Promise<boolean>} - Returns true if the session is set successfully.
   */
  const setSession = async (access_token: string, refresh_token: string) => {
    const { data, error } = await supabase.auth.setSession({
      access_token,
      refresh_token,
    });

    /* Handle potential errors */
    if (error) {
      setError(error.message || 'An error occured');
      return false;
    }

    return true;
  };

  return {
    setSession,
    getSession,
    refreshSession,
    error,
  };
};
