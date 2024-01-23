import httpAdapter from "../http/HttpClientAdapter"

export default class UserGatewayHttp{
    async login(email: string, password: string): Promise<any>{
        const device_name = `vue_app${navigator.userAgent}` 
        await httpAdapter.post("/login", {
            email,
            password,
            device_name
        });
    }
}