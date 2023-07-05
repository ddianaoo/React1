import {useState} from "react"; 


export const usePulling = (callback) => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    const pulling = async (...args) => {
        try {
            setIsLoading(true);
            await callback(...args);
        } catch (e) {
            setError(e.message);
            console.log(e.message);
        } finally {
            setIsLoading(false);
        }
    };

    return [pulling, isLoading, error];
}