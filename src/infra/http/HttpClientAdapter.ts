import axios, { AxiosInstance } from "axios";
import HttpClient from "./HttpCliente";

class HttpClientAdapter implements HttpClient {
    private axiosInstance: AxiosInstance | null = null
    private static instance: HttpClientAdapter | null = null
    constructor(){

        const baseURL = 'http://localhost:89/'
        axios.create({
            baseURL,
            headers: {
                'Content-Type': 'application/json'
            }
        })
    }

    static getInstance():HttpClient
    {
        if(!this.instance){
            this.instance = new HttpClientAdapter()
        }
        return this.instance;
    }


    async get(url: string, configs?: object | undefined): Promise<any> {
        return await this.axiosInstance?.get(url , configs)
    }
    async post(url: string, body: object, configs?: object | undefined): Promise<any> {
        return await this.axiosInstance?.get(url , configs)
    }
    async put(url: string, body: object, configs?: object | undefined): Promise<any> {
        return await this.axiosInstance?.get(url , configs)
    }
    async delete(url: string, configs?: object | undefined): Promise<any> {
        return await this.axiosInstance?.get(url , configs)
    }

}

export default HttpClientAdapter.getInstance()