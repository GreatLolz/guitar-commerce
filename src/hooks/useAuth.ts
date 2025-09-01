import ApiClient from "../utils/api";
import { useEffect } from "react";
import type { UserData } from "../types/user";
import axios from "axios";
import { useAppDispatch, useAppSelector } from "./redux";
import { setUserData } from "../reducers/auth";

export function useAuth() {
    const apiClient = ApiClient.getInstance();
    const userData = useAppSelector((state) => state.auth.userData)
    const dispatch = useAppDispatch();

    useEffect(() => {
        getUserData()
    }, [])

    const getUserData = async () => {
        try {
            const response = await apiClient.getUserData()
            if (!response) {
                return
            }
    
            const user: UserData = { id: response.data.userId, name: response.data.username }
            dispatch(setUserData(user))
        } catch (error) {
            if (axios.isAxiosError(error)) {
                if (error.response?.status === 401) {
                    alert('Session invalid! Please sign in.')
                    return
                }
            }
        }
    }

    const signIn = async (username: string, password: string) => {
        try {
            const response = await apiClient.signIn(username, password)
            
            if (response.status === 200) {
                alert('Sign in successful!')
                getUserData()
            }
        } catch (error) {
            if (axios.isAxiosError(error)) {
                alert(error.response?.data)
            }
        }
    }

    const signUp = async (username: string, password: string) => {
        try {
            const response = await apiClient.signUp(username, password)
            if (response.status === 200) {
                await signIn(username, password)
            }
        } catch (error) {
            if (axios.isAxiosError(error)) {
                alert(error.response?.data)
            }
        }
    }

    return { userData, signIn, signUp }
}