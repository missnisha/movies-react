import { useState, useEffect } from 'react';

export default function useFetch(url, options){
    // states 
    const [loading, setLoading] = useState(true);
    const [result, setResult] = useState(null);
    const [error, setError] = useState(null);

    // use effect hook 
    useEffect(() => {
        (async () => {
            try {
                const response = await fetch(url, options);
                const json = await response.json();
                // set state
                setResult(json)
                setLoading(false) 
            }catch(error){
                setError(error)
                setLoading(false)
            }
        })();
    },[options,url]);

    // response hook 
    return { loading, result, error }
}

