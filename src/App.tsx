import Header from "./components/Header";
import SignInSidebar from "./components/header/SignInSidebar";
import { useEffect, useState } from 'react';
import SignUpPopup from "./components/header/SignUpPopup";
import ApiClient from "./utils/api";
import axios from "axios";
import type { UserData } from "./types/UserData";
import Products from "./pages/Products";
import { Route, Routes, useNavigate } from "react-router";
import Home from "./pages/Home";
import { Button, Radio, RadioGroup } from "@headlessui/react";
import ProductDetails from "./pages/ProductDetails";
import { FILTERS } from "./types/product";

function App() {
    const [filter, setFilter] = useState<string | null>(null)

    const apiClient = ApiClient.getInstance()
    const navigate = useNavigate()

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
            <div className="flex flex-col w-full h-full min-h-screen bg-neutral-100 text-neutral-800">
                <Header onSignInClick={toggleSidebar} setFilter={setFilter} userData={userData} />
                <div className="bg-neutral-50 border-t border-b border-neutral-200 h-10 hidden md:block">
                    <RadioGroup value={filter} onChange={setFilter} className="h-full flex justify-between md:px-20 xl:px-50">
                        {FILTERS.map((filter) => (
                            <Radio key={filter.id} value={filter.id} className="group">
                                <Button
                                    className="xl:w-33 group-data-checked:font-bold group-data-checked:border-b-2 border-b-orange-500 hover:cursor-pointer h-full px-2"
                                    onClick={() => navigate(`/products`)}
                                >{filter.name}</Button>
                            </Radio>
                        ))}
                    </RadioGroup>
                </div>
                <Routes>
                    <Route index element={<Home />} />
                    <Route path="products" element={<Products filter={filter} />} />
                    <Route path="products/:productId" element={<ProductDetails />}/>
                </Routes>
            </div>
        </>
    )
}

export default App