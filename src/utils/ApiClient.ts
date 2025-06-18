import axios, { type AxiosResponse } from 'axios';

class ApiClient {
    private static instance: ApiClient;
    private baseUrl: string;

    private constructor() {
        this.baseUrl = `${import.meta.env.VITE_API_URL}/api/v1`;
    }

    public static getInstance(): ApiClient {
        if (!ApiClient.instance) {
            ApiClient.instance = new ApiClient();
        }
        return ApiClient.instance;
    }

    public async signIn(username: string, password: string): Promise<AxiosResponse> {
        try {
            const response = await axios.post(`${this.baseUrl}/user/login`, {
                username,
                password
            });
            return response;
        } catch (error) {
            console.error('Sign in error:', error);
            throw error;
        }
    }

    public async signUp(username: string, password: string): Promise<AxiosResponse> {
        try {
            const response = await axios.post(`${this.baseUrl}/user/register`, {
                username,
                password
            });
            return response;
        } catch (error) {
            console.error('Sign up error:', error);
            throw error;
        }
    }
}

export default ApiClient;