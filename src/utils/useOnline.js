import { useState, useEffect } from "react";

const useOnline = () => {

    const [isOnline, setIsOnline] = useState(true) // returns true or false


    useEffect(() => {

        const handleOnline = () => {
            () => {
                setIsOnline(true)
            }

            const handleOffline = () => {
                () => {
                    setIsOnline(false);
                }
            }

            window.addEventListener('online', handleOnline);
            window.addEventListener('offline', handleOffline);

            return () => {
                window.removeEventListener("online", handleOnline)
                window.removeEventListener("online", handleOffline)
            }

        }
    }, []);

    return isOnline; // returns true or false 
}

export default useOnline;

// the below code