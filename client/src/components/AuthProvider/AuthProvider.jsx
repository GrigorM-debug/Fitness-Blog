import { useState} from 'react';
import UserContext from '../../contexts/userContext';

export function AuthProvider({children}) {
    const [userData, setUserData] = useState({});

    const setUserDataHandler = (authData) => {
        setUserData(authData);
    };

    const contextData = {
        _id: userData._id,
        username: userData.username,
        email: userData.userEmail,
        isAuthenticated: !!userData.userEmail
    }
    return (
        <UserContext.Provider value={{ contextData, setUserDataHandler }}>
            {children}
        </UserContext.Provider>
    );
};