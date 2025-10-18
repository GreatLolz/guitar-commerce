import axios, { type AxiosResponse } from 'axios';
import type { Product } from '../types/product';
import type { Cart, CartItem, CartItemDTO } from '../types/cart';
import type { CheckoutData } from '../types/checkout';

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

    // user

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

    // products

    public async getProductList(count: number = 20, category: string | null = null): Promise<Product[]> {
        try {
            const response = await axios.get(`${this.baseUrl}/products`, {
                headers: {
                    Authorization: `Bearer ${this.getToken()}`
                },
                params: {
                    count: count,
                    category: category
                }
            });
            return response.data.products;
        } catch (error) {
            console.error('Error fetching product list:', error);
            throw error;
        }
    }

    public async getProduct(productId: string): Promise<Product> {
        try {
            const response = await axios.get(`${this.baseUrl}/products/${productId}`, {
                headers: {
                    Authorization: `Bearer ${this.getToken()}`
                }
            });
            return response.data.product;
        } catch (error) {
            console.error('Error fetching product:', error);
            throw error;
        }
    }

    // cart

    public async getActiveCart(): Promise<Cart> {
        try {
            const response = await axios.get(`${this.baseUrl}/cart`, {
                headers: {
                    Authorization: `Bearer ${this.getToken()}`
                }
            });
            
            const items: CartItemDTO[] = response.data.cartItems;
            const cartItems: CartItem[] = [];
            
            for (const item of items) {
                const product = await this.getProduct(item.productId);
                const cartProduct: CartItem = {
                    id: item.cartItemId,
                    product,
                    quantity: item.quantity
                };
                cartItems.push(cartProduct);
            }

            const cart: Cart = {
                items: cartItems
            }

            return cart;
        } catch (error) {
            console.error('Error fetching active cart:', error);
            throw error;
        }
    }

    public async addCartItem(productId: string, quantity: number): Promise<AxiosResponse> {
        try {
            const response = await axios.post(`${this.baseUrl}/cart`, {
                productId,
                quantity
            }, {
                headers: {
                    Authorization: `Bearer ${this.getToken()}`
                }
            })
            return response;
        } catch (error) {
            console.error('Error adding cart item:', error);
            throw error;
        }
    }

    public async removeCartItem(productId: string): Promise<AxiosResponse> {
        try {
            const response = await axios.delete(`${this.baseUrl}/cart/${productId}`, {
                headers: {
                    Authorization: `Bearer ${this.getToken()}`
                }
            })
            return response;
        } catch (error) {
            console.error('Error removing cart item:', error);
            throw error;
        }
    }

    //orders

    public async checkout(checkoutData: CheckoutData): Promise<string> {
        try {
            const response = await axios.post(`${this.baseUrl}/orders/checkout`, checkoutData, {
                headers: {
                    Authorization: `Bearer ${this.getToken()}`
                }
            })
            
            return response.data.clientSecret;
        } catch (error) {
            console.error('Error checking out:', error);
            throw error;
        }
    }
}

export default ApiClient;