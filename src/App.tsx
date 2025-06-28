import Header from "./components/Header";
import SignInSidebar from "./components/SignInSidebar";
import { useEffect, useState } from 'react';
import SignUpPopup from "./components/SignUpPopup";
import ApiClient from "./utils/ApiClient";
import axios from "axios";
import type { UserData } from "./types/UserData";
import Products from "./pages/Products";

function App() {
    const apiClient = ApiClient.getInstance()

    const [sidebarOpen, setSidebarOpen] = useState(false)
    const [signUpOpen, setSignUpOpen] = useState(false)

    const [userData, setUserData] = useState<UserData | null>(null)

    useEffect(() => {
        getUserData()   
    }, [])

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen)
    }

    const toggleSignUp = () => {
        setSignUpOpen(!signUpOpen)
    }

    const getUserData = async () => {
        try {
            const response = await apiClient.getUserData()

            if (!response) {
                return
            }

            const user: UserData = { id: response.data.userId, name: response.data.username }
            setUserData(user)
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
            setSignUpOpen(false)
        } catch (error) {
            if (axios.isAxiosError(error)) {
                alert(error.response?.data)
            }
        }
    }

    return (
        <>
            <SignInSidebar 
                isOpen={sidebarOpen} 
                onToggle={toggleSidebar}
                onSignIn={signIn}
                onToggleSignUp={toggleSignUp}
            />
            <SignUpPopup 
                isOpen={signUpOpen} 
                setSignUpOpen={toggleSignUp}
                onSignUp={signUp}
            />
            <div className="flex flex-col w-full h-screen bg-neutral-100 text-neutral-800">
                <Header onSignInClick={toggleSidebar} userData={userData} />
                <Products />
            </div>
        </>
    )
}

export default App