import { useEffect } from "react";
import { useNavigate } from "react-router";
import useLogout from "../../api/useLogout";

function Logout() {
    const [logout] = useLogout();
    const navigate = useNavigate();
    useEffect(() => {
        logout().then(() => navigate('/'));
    }, []);

    return;
}

export default Logout;