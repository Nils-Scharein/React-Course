import {useEffect, useState} from "react";

type UseFetchReturn<T> = {
    data: T | null;
    isLoading: boolean;
    error: string | null;
};

const useFetch = <T, >(url: string): UseFetchReturn<T> => {
    const [data, setData] = useState<T | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            try {
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const jsonData: T = await response.json();
                setData(jsonData);
                setError(null);
            } catch (err) {
                if (err instanceof Error) {
                    setError(err.message);
                } else {
                    setError("Unknown error occurred");
                }
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, [url]);

    return {data, isLoading, error};
};

export default useFetch;
