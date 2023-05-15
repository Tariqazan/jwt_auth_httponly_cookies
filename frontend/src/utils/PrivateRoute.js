import { useSelector } from "react-redux";
import { Navigate, Route } from "react-router-dom";

const PrivateRoute = ({ children, ...rest }) => {
    const user = useSelector((state) => state.user)
    const isAuthenticated = user.isAuthenticated;
    return (
        <Route {...rest}>{!isAuthenticated ? <Navigate replace to={"/login"} /> : children}</Route>
    )
}

export default PrivateRoute;