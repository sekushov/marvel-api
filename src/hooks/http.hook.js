import { useState, useCallback } from 'react';

const useHttp = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const request = useCallback(async (url) => {
        setLoading(true);
        try {
            const responce = await fetch(url);
            if(!responce.ok) {
                throw new Error(`Could not fetch ${url}, status ${responce.status}`);
            }
            setLoading(false);
            return await responce.json();
        } catch(e) {
            setLoading(false);
            setError(e.message);
            throw e
        }
    }, [])

    const clearError = useCallback(() => {
        setError(null)
    }, [])

    return {loading, error, request, clearError}
}

export default useHttp;