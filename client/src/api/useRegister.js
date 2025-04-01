import useMutate from "../hooks/useMutate";
import { useAuth } from "../providers/UserProvider";
import { useEffect } from "react";

export default function useRegister() {
    const [mutate, data, isLoading, error] = useMutate('/users/register', "POST");
    const { setAuthToken } = useAuth();

    useEffect(() => {
        if (data) {
            setAuthToken(data?.accessToken);
        }
    }, [data])

    return [mutate, isLoading, error];
}