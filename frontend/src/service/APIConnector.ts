import axios  from "axios";

const API_URL = "http://localhost:5000/api/v1";

const apiClient = axios.create({
    baseURL : API_URL,
    timeout : 10000
});

export const APIConnector = async (method : string, url : string, data : object | null, headers : Record<string, string>) => {
    try{

        const response = await apiClient({
            method,
            url,
            data,
            headers
        })

        return response.data;

    }catch(err){
        console.error("API fetch error", err);
        throw err;
    }
}