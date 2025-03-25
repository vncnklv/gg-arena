import { createContext, useContext, useEffect, useState } from 'react';
import usePersistedState from '../hooks/usePersistedState';
import useFetch from '../hooks/useFetch';
import useMutate from '../hooks/useMutate';
import { useNavigate } from 'react-router';

const Context = createContext({
    isAuth: false,
    user: {},
    isLoading: false,
    login: async () => { },
    register: async () => { },
    logout: async () => { }
});

export const useAuth = () => {
    return useContext(Context);
}

export const AuthProvider = ({ children }) => {
    const [user, userIsLoading, userError, refetchUser] = useFetch('/users/me', undefined);
    const [isAuth, setIsAuth] = useState(false);
    const [token, setToken] = usePersistedState('token', '');
    const [loginRequest, loginData, loginIsLoading, loginError] = useMutate('/users/login', "POST");
    const [registerRequest, registerData, registerIsLoading, registerError] = useMutate('/users/register', "POST");
    const [isLoading, setIsLoading] = useState();
    const navigate = useNavigate();

    useEffect(() => {
        setIsLoading(userIsLoading || loginIsLoading || registerIsLoading);
    }, [userIsLoading , loginIsLoading , registerIsLoading]);

    useEffect(() => {
        setIsAuth(!!user);
    }, [user]);

    useEffect(() => {
        if(userError == "Invalid access token")
        {
            setToken("");
            navigate("/login");
        }
    }, [userError])

    const login = async (email, password) => {
        if (!email || !password) {
            throw new Error('Username or password not provided!');
        }

        const response = await loginRequest({ email, password });

        if (loginError) throw new Error(loginError);

        setToken(response.accessToken);
        refetchUser();
    }

    const register = async (username, password, confirmPassword, email, firstName, lastName) => {
        if (!username || !password || !confirmPassword || !email || !firstName || !lastName) {
            throw new Error('All fields are required!');
        }

        if (password != confirmPassword) {
            throw new Error('Passwords do not match!');
        }

        const response = await registerRequest({ email, password });

        if (registerError) throw new Error(registerError);

        setToken(response.accessToken);
        refetchUser();
    }

    const logout = async () => {

    }

    return (
        <Context.Provider value={{ isAuth, user, isLoading, login, register, logout }}>
            {children}
        </Context.Provider>
    )
};