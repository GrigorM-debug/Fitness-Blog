import { useContext, useEffect, useState } from "react";
import { getUserData, login, logout, register } from "../api/auth_API";
import UserContext from "../contexts/userContext";
import { validateRegisterForm } from "../vaidations/userValidations/registerUserDataValidation";
import { validateLoginForm } from "../vaidations/userValidations/loginUserDataValidation";
import { getUserPosts } from "../api/blogPost_API";
import { getUserRecipes } from "../api/recipes_API";

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
            const {_id, username, email: userEmail, accessToken} = await login(email, password);

            // console.log(_id, username, userEmail, accessToken)
    
            setUserDataHandler({_id, userEmail, username, accessToken})
    
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
    const [isFetching, setIsFetching] = useState(false);

    const registerHandler = async (newUserData) => {
        const validationResult = validateRegisterForm(newUserData);

        if(Object.keys(validationResult).length > 0) {
            setErrors(validationResult);
            return false;
        }

        try {
            setIsFetching(true);
            const {_id, username, email: userEmail, accessToken} = await register(newUserData)
        
            setUserDataHandler({_id, userEmail, username, accessToken})

            localStorage.setItem('auth-token', accessToken);
            return true;
        } catch (err) {
            setErrors({serverError: err.message});
            setIsFetching(false)
            return false;
        }
    }

    return [registerHandler, errors, isFetching];
}

export function useLogout() {
    const {setUserDataHandler} = useContext(UserContext);
    const [errors, setErrors] = useState({});
    const [isLoading, setIsLoading] = useState(false);

    const logoutHandler = async (token) => {
        // console.log(token)
        try {
            setIsLoading(true);
            await logout(token);
            setUserDataHandler({});
            localStorage.removeItem('auth-token');
            return true;
        } catch (err) {
            setIsLoading(false);
            setErrors({serverError: err.message});
            return false;
        }
    }

    return [logoutHandler, errors, isLoading];
}

export function useGetUserData() {
    const [userData, setUserData] = useState({});
    const [isFetching, setIsFetching] = useState(true);

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const result = await getUserData();
                setUserData(result);
            } catch(err) {
                console.error(err);
            } finally {
                setIsFetching(false);
            }
        };

        fetchUserData();
    }, []);

    return { userData, isFetching };
}


export function useGetUserPosts(userId) {
    const [userPosts, setUserPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchUserPosts = async () => {
            try {
                const result = await getUserPosts(userId);
                setUserPosts(result);
            } catch (err) {
                console.error(err);
            } finally {
                setIsLoading(false); // Optional, to mark fetching complete
            }
        };

        if (userId) { // Optional, only fetch if userId is provided
            fetchUserPosts();
        }
    }, [userId]);

    return {userPosts, isLoading};
}

export function useGetUserRecipes(userId) {
    const [userRecipes, setUserRecipes] = useState([])
    const [isLoadingData, setIsLoadingData] = useState(true);

    useEffect(() => {
        const fetchUserRecipes = async () => {
            try {
                const result = await getUserRecipes(userId);
                console.log(result)
                setUserRecipes(result);
            } catch (err) {
                console.error(err);
            } finally {
                setIsLoadingData(false); 
            }
        };

        if (userId) { 
            fetchUserRecipes();
        }
    }, [userId]);

    return {userRecipes, isLoadingData};
}

