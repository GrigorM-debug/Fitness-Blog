import { useContext } from "react";
import { login } from "../api/auth_API";
import UserContext from "../contexts/userContext";

export function useLogin() {
    const {setUserDataHandler} = useContext(UserContext);

    const loginHandler = async (email, password) => {
        const {_id, username, email: userEmail, accessToken} = await login(email, password);

        // console.log(_id, username, userEmail, accessToken)

        setUserDataHandler({_id, userEmail, username})

        localStorage.setItem('auth-token', accessToken);
    }

    return loginHandler;
}