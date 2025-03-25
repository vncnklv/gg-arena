import { useEffect } from "react";
import { useNavigate } from "react-router";
import { useAuth } from "../../providers/UserProvider";

function Logout() {
    const { logout } = useAuth();
    const navigate = useNavigate();
    useEffect(() => {
        logout().then(() => navigate('/'));
    }, []);

    return;
}

export default Logout;