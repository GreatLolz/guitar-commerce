import axios, { type AxiosResponse } from 'axios';
import type { Product } from '../types/product';

class ApiClient {
    private static instance: ApiClient;
    private baseUrl: string;

    private constructor() {
        this.baseUrl = `${import.meta.env.VITE_API_URL}/api/v1`;
    }

    private getToken(): string {
        return localStorage.getItem('token') || '';
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
            localStorage.setItem('token', response.data.token);
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

    public async getUserData(): Promise<AxiosResponse | null> {
        try {
            if (!this.getToken()) {
                return null
            }

            const response = await axios.get(`${this.baseUrl}/user/me`, {
                headers: {
                    Authorization: `Bearer ${this.getToken()}`
                }
            });
            return response;
        } catch (error) {
            console.error('Error fetching user data:', error);
            throw error;
        }
    }

    public async getProductList(count: number = 20, filter: string | null = null): Promise<Product[]> {
        try {
            const response = await axios.get(`${this.baseUrl}/products`, {
                headers: {
                    Authorization: `Bearer ${this.getToken()}`
                },
                params: {
                    count: count,
                    filter: filter
                }
            });
            return response.data.products;
        } catch (error) {
            console.error('Error fetching product list:', error);
            throw error;
        }
    }
}

export default ApiClient;