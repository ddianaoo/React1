import {useState} from "react"; 


export const usePulling = (callback) => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    const pulling = async () => {
        try {
            setIsLoading(true);
            await callback();
        } catch (e) {
            setError(e.message);
            console.log(e.message);
        } finally {
            setIsLoading(false);
        }
    };

    return [pulling, isLoading, error];
}