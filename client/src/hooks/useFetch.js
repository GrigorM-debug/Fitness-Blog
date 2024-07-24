import * as requester from '../api/requester';
import {useState, useEffect} from 'react';

//TODO: Add try catch block, Set error and return it    
export default function useFetch(url, initialData) {
    const [data, setData] = useState(initialData);
    const [isFetching, setIsFetching] = useState(true);
    
    useEffect(() => {
        (async () => {
            const result = await requester.get(url);
            setData(result);
            setIsFetching(false);
        })();
    }, [url]);

    return {data, isFetching}
}