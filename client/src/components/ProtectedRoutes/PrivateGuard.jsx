import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import UserContext from "../../contexts/userContext";

export default function PrivateGuard() {
    const {contextData} = useContext(UserContext);
    const isAuthenticated = contextData.isAuthenticated;

    return isAuthenticated
            ? <Outlet /> 
            : <Navigate to="/login"/>
};