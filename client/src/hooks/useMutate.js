import { useState } from "react";
import makeRequest from "../utils/makeRequest";

export default function useMutate(path, method, options = {}) {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const mutate = async (body = null) => {
        setIsLoading(true);
        setError(null);

        try {
            const json = await makeRequest(path, options, method, body);
            setData(json);
            return json;
        } catch (err) {
            setError(err.message);
            throw err;
        } finally {
            setIsLoading(false);
        }
    };

    return [mutate, data, isLoading, error];
}
