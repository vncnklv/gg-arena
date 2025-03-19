import { useEffect, useRef, useState } from "react";
import makeRequest from "../utils/makeRequest";

export default function useFetch(path, initialState, options = {}) {
    const [data, setData] = useState(initialState);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const controller = new AbortController();
        const { signal } = controller;

        async function fetchData() {
            setIsLoading(true);
            setError(null);

            try {
                const json = await makeRequest(path, { ...options, signal });
                setData(json);
            } catch (err) {
                if (err.name !== "AbortError") {
                    setError(err.message);
                }
            } finally {
                setIsLoading(false);
            }
        }

        fetchData();
        return () => controller.abort();
    }, [path]);

    return [data, isLoading, error];
}
