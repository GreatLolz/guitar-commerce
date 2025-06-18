import Header from "./components/Header";
import SignInSidebar from "./components/SignInSidebar";
import { useState } from 'react';
import SignUpPopup from "./components/SignUpPopup";
import ApiClient from "./utils/ApiClient";
import axios from "axios";
import { Button } from "@headlessui/react";

function App() {
    const apiClient = ApiClient.getInstance()

    const [sidebarOpen, setSidebarOpen] = useState(false)
    const [signUpOpen, setSignUpOpen] = useState(false)

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen)
    }

    const toggleSignUp = () => {
        setSignUpOpen(!signUpOpen)
    }

    const getUserData = async () => {
        try {
            const response = await apiClient.getUserData()
            console.log(response.data)
        } catch (error) {
            if (axios.isAxiosError(error)) {
                alert(error.response?.data)
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
            console.log(response.data)
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
                <Header onSignInClick={toggleSidebar} />
            </div>
        </>
    )
}

export default App