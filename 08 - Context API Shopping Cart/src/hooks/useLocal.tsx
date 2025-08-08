import {useEffect, useState, type Dispatch, type SetStateAction} from "react"

const useLocal = <T, >(
    storageKey: string,
    startValue: T
): [T, Dispatch<SetStateAction<T>>] => {
    const [local, setLocal] = useState<T>(() => {
        if (typeof window === "undefined") return startValue;

        const storedLocal = localStorage.getItem(storageKey);
        if (storedLocal) {
            try {
                return JSON.parse(storedLocal) as T;
            } catch (e) {
                console.warn(`Fehler beim Parsen von localStorage für "${storageKey}":`, e);
                localStorage.removeItem(storageKey);
            }
        }
        return startValue;
    });

    useEffect(() => {
        localStorage.setItem(storageKey, JSON.stringify(local));
    }, [local, storageKey]);

    useEffect(() => {
        const handleStorage = (event: StorageEvent) => {
            if (event.key === storageKey && event.newValue) {
                setLocal(JSON.parse(event.newValue));
            }
        };
        window.addEventListener("storage", handleStorage);
        return () => window.removeEventListener("storage", handleStorage);
    }, [storageKey]);

    return [local, setLocal];
};

export default useLocal;
