import axios from "axios";


export interface HttpAdpater {
    get<T>(url: string): Promise<T>
}


export class PokeApiFetchAdapter implements HttpAdpater {
    async get<T>(url: string): Promise<T> {
        const res = await fetch(url);
        const data:T = await res.json();
        return data;
    };
};

export class PokeapiAdapter implements HttpAdpater{
    private readonly axios = axios;

    async get<T>(url: string): Promise<T> {
        const { data } = await this.axios.get<T>(url)
        return data;
    };

    async post(url: string, data: any) {
        return `${url}/${data}`
    };
};