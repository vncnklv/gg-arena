import useMutate from "../hooks/useMutate";
import { useAuth } from "../providers/UserProvider";

export default function useLogout() {
    const { clearToken } = useAuth();
    const [mutate, data, isLoading, error] = useMutate('/users/logout', "GET");

    const logout = async () => {
        await mutate();
        clearToken();
    }

    return [logout, isLoading, error];
}