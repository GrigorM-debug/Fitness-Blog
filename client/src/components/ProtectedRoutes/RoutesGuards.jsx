import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import UserContext from "../../contexts/userContext";


export function IsUser() {
    const {contextData} = useContext(UserContext);
    const auth = contextData.isAuthenticated;
    return (
        auth === true ? <Outlet /> : <Navigate to="/" replace/>
    );
};

export function IsGuest() {
    const {contextData} = useContext(UserContext);
    const auth = contextData.isAuthenticated;
    return (
        auth === false ? <Outlet /> : <Navigate to="/login" replace/>
    );
}