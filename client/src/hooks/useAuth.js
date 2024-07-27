import { useContext, useState } from "react";
import { login, logout, register } from "../api/auth_API";
import UserContext from "../contexts/userContext";
import { validateRegisterForm } from "../vaidations/userValidations/registerUserDataValidation";
import { validateLoginForm } from "../vaidations/userValidations/loginUserDataValidation";

export function useLogin() {
    const {setUserDataHandler} = useContext(UserContext);
    const [errors, setErrors] = useState({});
    const [isFetching, setIsFetching] = useState(false);

    const loginHandler = async (email, password) => {
        const validationResult = validateLoginForm({email, password});

        if(Object.keys(validationResult).length > 0) {
            setErrors(validationResult);
            return false;
        }

        try {
            setIsFetching(true);
            const {_id, username, email: userEmail, description, country, city, imageUrl, accessToken} = await login(email, password);

            // console.log(_id, username, userEmail, accessToken)
    
            setUserDataHandler({_id, userEmail, username, description, country, city, imageUrl})
    
            localStorage.setItem('auth-token', accessToken);

            return true;
        } catch (err) {
            setErrors({serverError: err.message});
            setIsFetching(false);
            return false;
        }
    }

    return [loginHandler, errors, isFetching];
}

export function useRegister() {
    const {setUserDataHandler} = useContext(UserContext);
    const [errors, setErrors] = useState({});

    const registerHandler = async (newUserData) => {
        const validationResult = validateRegisterForm(newUserData);

        if(Object.keys(validationResult).length > 0) {
            setErrors(validationResult);
            return false;
        }

        try {
            const {_id, username, email: userEmail, description, country, city, imageUrl, accessToken} = await register(newUserData)
        
            setUserDataHandler({_id, userEmail, username, description, country, city, imageUrl})

            localStorage.setItem('auth-token', accessToken);
            return true;
        } catch (err) {
            setErrors({serverError: err.message});
            return false;
        }
    }

    return [registerHandler, errors];
}

export function useLogout() {
    const {setUserDataHandler} = useContext(UserContext);
    const [errors, setErrors] = useState({});

    const logoutHandler = async (token) => {
        // console.log(token)
        try {
            await logout(token);
            setUserDataHandler({});
            localStorage.removeItem('auth-token');
        } catch (err) {
            setErrors({serverError: err.message});
        }
    }

    return [logoutHandler, errors];
}