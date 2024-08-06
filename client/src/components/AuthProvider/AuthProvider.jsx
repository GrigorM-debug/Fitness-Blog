import { useEffect} from 'react';
import UserContext from '../../contexts/userContext';
import usePersistedState from '../../hooks/usePersistedState';

export function AuthProvider({children}) {
    // const [userData, setUserData] = useState({});
    const [state, setPersistedState] = usePersistedState('auth', {})

    const setUserDataHandler = (authData) => {
        // setUserData(authData);
        setPersistedState(authData)
    };

    const logout = () => {
        setPersistedState(null);
    }


    const contextData = {
        _id: state?._id,
        username: state?.username,
        email: state?.userEmail,
        isAuthenticated: !!state?.userEmail
    }
    return (
        <UserContext.Provider value={{ contextData, setUserDataHandler, logout }}>
            {children}
        </UserContext.Provider>
    );
};