import { useContext } from "react";
import UserContext from "../../contexts/userContext";
import { Navigate, Outlet } from "react-router-dom";

export default function RouteGuard() {
    const {contextData} = useContext(UserContext);
    const isAuthenticated = contextData.isAuthenticated;

    return !isAuthenticated
            ? <Outlet /> 
            : <Navigate to="/"/>
};