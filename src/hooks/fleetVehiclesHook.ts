import { useEffect, useState } from "react";
import { ErrorInternalServerError } from "../schemas/errors";
import { VehicleSchema } from "../schemas/vehicle";
import { fetchAllVehicles } from "../lib/utils/database/fleetVehicles";
import getClient from "../lib/utils/database/configs/supabaseConfig";

export function useRealtimeVehicles() {
    /* Setup returning data */
    const [data, setData] = useState<VehicleSchema[]>([]);
    const [loading, setLoading] = useState(true);

    /* Get supabase client */
    const supaClient = getClient();

    /* Subscribe to webhook when build */
    useEffect(() => {

        // Fetch the initial data
        const loadInitialData = async () => {
            try {
                const vehicles = await fetchAllVehicles();
                setData(vehicles);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching initial data:', error);
                // Handle error appropriately
            }
        };

        loadInitialData();

        /* Define and subscribe to webhook channel */
        const channel = supaClient.channel('Realtime Vehicle Data').on('postgres_changes', {
            event: '*', schema: 'public', table: 'fleetVehicles'
        }, (payload) => {

            /* Check the payload for errors */
            if (payload.errors !== null) {
                throw new ErrorInternalServerError(payload.errors[0])
            }

            /* Handle update event */
            if (payload.eventType === 'UPDATE') {
                setData(prevData => {
                    const index = prevData.findIndex(item => item.id === payload.new.id);

                    if (index !== -1) {
                        return [
                            ...prevData.slice(0, index),
                            payload.new as VehicleSchema, // Type assertion here
                            ...prevData.slice(index + 1)
                        ];
                    } else {
                        return prevData;
                    }
                });
            }

            /* Handle insert event */
            if (payload.eventType === 'INSERT') {
                setData(prevData => [...prevData, payload.new as VehicleSchema]);
            }

            /* Handle delete event */
            if (payload.eventType === 'DELETE') {
                setData(prevData => prevData.filter(item => item.id !== payload.old.id));
            }
            

            console.log(payload.new)
        }).subscribe();

        /* Unsubscribe from hook when hook is no longer rendered */
        return () => {
            channel.unsubscribe();
        }
    }, [supaClient])

    /* Return the state of the hook */
    return {data, loading};
}