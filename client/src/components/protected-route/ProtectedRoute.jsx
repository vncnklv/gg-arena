import { Navigate, Outlet } from "react-router";
import { useAuth } from "../../providers/UserProvider";

function ProtectedRoute({ redirectPath = "/" }) {
    const { isAuth } = useAuth();

    if (!isAuth) {
        return <Navigate to={redirectPath} replace />;
    }

    return <Outlet />;
}

export default ProtectedRoute;