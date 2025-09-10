import ApiClient from "../utils/api";
import { useEffect } from "react";
import type { UserData } from "../types/user";
import axios from "axios";
import { useAppDispatch, useAppSelector } from "./redux";
import { setUserData } from "../reducers/auth";
import { useState } from "react";

export function useAuth() {
    const apiClient = ApiClient.getInstance();
    const [loading, setLoading] = useState(false)
    const userData = useAppSelector((state) => state.auth.userData)
    const dispatch = useAppDispatch();

    useEffect(() => {
        getUserData()
    }, [])

    const getUserData = async () => {
        try {
            setLoading(true)
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
        } finally {
            setLoading(false)
        }
    }

    const signIn = async (username: string, password: string) => {
        try {
            setLoading(true)
            const response = await apiClient.signIn(username, password)
            
            if (response.status === 200) {
                alert('Sign in successful!')
                getUserData()
            }
        } catch (error) {
            if (axios.isAxiosError(error)) {
                alert(error.response?.data)
            }
        } finally {
            setLoading(false)
        }
    }

    const signUp = async (username: string, password: string) => {
        try {
            setLoading(true)
            const response = await apiClient.signUp(username, password)
            if (response.status === 200) {
                await signIn(username, password)
            }
        } catch (error) {
            if (axios.isAxiosError(error)) {
                alert(error.response?.data)
            }
        } finally {
            setLoading(false)
        }
    }

    return { userData, signIn, signUp, loading }
}