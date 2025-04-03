import { useEffect, useRef, useState } from "react";
import makeRequest from "../utils/makeRequest";

export default function useFetch(path, initialState, options = {}) {
    const [data, setData] = useState(initialState);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [fetchTrigger, setFetchTrigger] = useState(0);

    useEffect(() => {
        const controller = new AbortController();
        const { signal } = controller;

        async function fetchData() {
            setIsLoading(true);
            setError(null);
            setData(initialState);

            try {
                const json = await makeRequest(path, { ...options, signal });
                setData(json);
            } catch (err) {
                if (!signal.aborted) {
                    setError(err.message);
                }
            } finally {
                setIsLoading(false);
            }
        }

        if(path)
        {
            fetchData();
        }
        return () => controller.abort('aborted');
    }, [path, fetchTrigger]);

    const refetch = () => {
        setFetchTrigger(prev => prev + 1);
    };

    const clear = () => {
        setData(initialState);
    }

    const manuallyUpdateData = (newData) => {
        setData(prevData =>
            typeof newData === 'function'
                ? newData(prevData)
                : newData
        );
    }

    return [data, isLoading, error, refetch, clear, manuallyUpdateData];
}
