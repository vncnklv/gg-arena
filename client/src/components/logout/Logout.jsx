import { useEffect } from "react";
import { useNavigate } from "react-router";
import useLogout from "../../api/useLogout";
import { useAuth } from "../../providers/UserProvider";

function Logout() {
    const { isAuth } = useAuth();
    const [logout] = useLogout();
    const navigate = useNavigate();
    useEffect(() => {
        if (isAuth) {
            logout().then(() => navigate('/'));
        }
        else
        {
            navigate('/');
        }
    }, []);

    return;
}

export default Logout;