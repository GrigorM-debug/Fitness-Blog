import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function usePersistedState(key, initialState){
    const [state, setState] = useState(() => {
        const auth = sessionStorage.getItem(key);

        if(!auth) {
            return initialState;
        }

        const authData = JSON.parse(auth);

        return authData;
    });

    const navigate = useNavigate()

    const setPersistedState = (value) => {

        if(value === null || value === undefined) {
            navigate('/login')
            sessionStorage.removeItem(key);
            
        } else {
            sessionStorage.setItem(key, JSON.stringify(value));
        }
        
        setState(value);
    }

    return [state, setPersistedState];
}