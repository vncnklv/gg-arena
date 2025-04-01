import { createContext, useContext, useEffect, useState } from 'react';
import usePersistedState from '../hooks/usePersistedState';
import useFetch from '../hooks/useFetch';
import useMutate from '../hooks/useMutate';
import { useNavigate } from 'react-router';

const Context = createContext({
    isAuth: false,
    user: {},
    authIsLoading: false,
});

export const useAuth = () => {
    return useContext(Context);
}

export const AuthProvider = ({ children }) => {
    const [user, userIsLoading, userError, refetchUser] = useFetch('/users/me', undefined);
    const [isAuth, setIsAuth] = useState(false);
    const [token, setToken, clearToken] = usePersistedState('token', '');
    const navigate = useNavigate();

    useEffect(() => {
        setIsAuth(!!user);
    }, [user]);

    useEffect(() => {
        if (userError == "Invalid access token") {
            clearToken();
            navigate("/login");
        }
    }, [userError])

    useEffect(() => {
        refetchUser();
    }, [token])

    const setAuthToken = (token) => {
        setToken(token);
    }

    return (
        <Context.Provider value={{ isAuth, user, authIsLoading: userIsLoading, setAuthToken, clearToken }}>
            {children}
        </Context.Provider>
    )
};