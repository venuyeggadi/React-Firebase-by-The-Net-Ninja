import { useState, useEffect } from "react";

export default function useFetch(url) {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(false);
    const [error, setError] = useState(null);
    
    useEffect(() => {
        const abortController = new AbortController();
        const fetchData = async () => {
            setIsPending(true);
            try {
                const response = await fetch(url, { signal: abortController.signal });
                if (!response.ok) {
                    throw new Error(response.statusText);
                }
                const json = await response.json();
                setData(json);
                setError(null);
            } catch (err) {
                if (err.name === 'AbortError') {
                    console.log('The fetch was aborted');
                } else {
                    setError('Could not fetch the data');
                    console.log(err.message);
                }
            }
            setIsPending(false);
        }
        fetchData();

        return () => {
            abortController.abort();
        }
    }, [url])

    return { data, isPending, error };
}
