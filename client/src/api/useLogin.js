import useMutate from "../hooks/useMutate";
import { useAuth } from "../providers/UserProvider";
import { useEffect } from "react";

export default function useLogin() {
    const [mutate, data, isLoading, error] = useMutate('/users/login', "POST");
    const { setAuthToken } = useAuth();

    useEffect(() => {
        if (data) {
            setAuthToken(data?.accessToken);
        }
    }, [data])
    return [mutate, isLoading, error];
}