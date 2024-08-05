import { useState } from "react";

export default function usePersistedState(key, initialState){
    const [state, setState] = useState(() => {
        const auth = localStorage.getItem(key);

        if(!auth) {
            return initialState;
        }

        const authData = JSON.parse(auth);

        return authData;
    });

    const setPersistedState = (value) => {
        localStorage.setItem(key, JSON.stringify(value));
        setState(value);
    }

    return [state, setPersistedState];
}