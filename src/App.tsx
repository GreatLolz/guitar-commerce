import axios from "axios";
import Header from "./components/Header";
import SignInSidebar from "./components/SignInSidebar";
import { useState } from 'react';
import SignUpPopup from "./components/SignUpPopup";

function App() {
    const [sidebarOpen, setSidebarOpen] = useState(false)
    const [signUpOpen, setSignUpOpen] = useState(false)

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen)
    }

    const toggleSignUpPopup = () => {
        setSignUpOpen(!signUpOpen)
    }

    const signIn = (username: string, password: string) => {
        axios.post('/api/v1/user/login', { username, password })
            .then(response => {
                console.log(response)
            })
            .catch(error => {
                console.log(error)
            })
    }

    const signUp = (username: string, password: string) => {
        axios.post('/api/v1/user/register', { username, password })
            .then(response => {
                console.log(response)
            })
            .catch(error => {
                console.log(error)
            })
    }

    return (
        <>
            <SignInSidebar 
                isOpen={sidebarOpen} 
                onToggle={toggleSidebar}
                onSignIn={signIn}
                onSignUp={toggleSignUpPopup}
            />
            <SignUpPopup 
                isOpen={signUpOpen} 
                setSignUpOpen={toggleSignUpPopup}
                onSignUp={signUp}
            />
            <div className="flex flex-col w-full h-screen bg-neutral-100 text-neutral-800">
                <Header onSignInClick={toggleSidebar} />
            </div>
        </>
    )
}

export default App