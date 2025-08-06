import {useEffect, useState} from "react";

const useLocal = <T,>(storageKey: string, startValue: T) => {

    const [local, setLocal] = useState<T>(() => {
        const storedLocal = localStorage.getItem(storageKey);
        return storedLocal ? JSON.parse(storedLocal) : startValue;
    });

    useEffect(() => {
        localStorage.setItem(storageKey, JSON.stringify(local));
    }, [local, storageKey]);

    return ([local, setLocal])
};

export default useLocal
