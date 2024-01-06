import axios, { AxiosRequestConfig } from "axios"

export interface FetchResponse<T>{
    count: number;
    next: string | null;
    results: T[];
}

const axiousInstance = axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '268c698d7ae9429b9410a09705d30980'
    }
});

class APIClient<T>{
    endpoint: string

    constructor(endpoint: string){
        this.endpoint = endpoint
    }

    getAll = (config: AxiosRequestConfig) => {
        return axiousInstance.get<FetchResponse<T>>(this.endpoint,config).then(res => res.data);
    }
}

export default APIClient;

