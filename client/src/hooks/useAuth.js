import { useContext } from "react";
import { login, register } from "../api/auth_API";
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

export function useRegister() {
    const {setUserDataHandler} = useContext(UserContext);

    const registerHandler = async (newUserData) => {
        const {_id, username, email: userEmail, description, country, city, imageUrl, accessToken} = await register(newUserData)
        
        setUserDataHandler({_id, userEmail, username, description, country, city, imageUrl})

        localStorage.setItem('auth-token', accessToken);
    }

    return registerHandler;
}