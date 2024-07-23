import axios, { AxiosRequestConfig } from "axios";

export interface FetchResponse <T>{
    count: number;
    next: string | null;
    results: T[];
}

const axiosInstance =  axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'df9caa0cb5a34b1fb386572e57c4f86b'
    }
})

class APIClient<T>{
    endpoint: string;

    constructor(endpoint : string){
        this.endpoint = endpoint;
    }

    getAll = (config: AxiosRequestConfig) => {
        return axiosInstance
                .get<FetchResponse<T>>(this.endpoint, config)
                .then(res => res.data);
    }
}

export default APIClient;