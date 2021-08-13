
import axios from 'axios';
import {useState} from "react";

const useHttp = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const sendRequest = async (options, transformResponse) => {
        if(isLoading){
            return;
        }
        const headers = {...options.headers, 'Content-Type':'application/json'}
        setIsLoading(true);
        setError(null)
        return await axios.request({
            baseURL:process.env.BACKEND_BASE_URL,
            url: options.url,
            method: options.method ? options.method : 'GET',
            headers,
            data: options.data,
        })
            .then((response) => transformResponse(response.data))
            .catch((error) => setError(error.data))
            .finally(() => setIsLoading(false))

    }
    return {sendRequest, error, isLoading}
};

export default useHttp;