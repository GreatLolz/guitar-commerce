import axios from "axios";
import Header from "./components/Header";
import SignInSidebar from "./components/SignInSidebar";
import { useState } from 'react';

function App() {
    const [sidebarOpen, setSidebarOpen] = useState(false)

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen)
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

    return (
        <>
            <SignInSidebar 
                isOpen={sidebarOpen} 
                onToggle={toggleSidebar}
                onSignIn={signIn}
            />
            <div className="flex flex-col w-full h-screen bg-neutral-100 text-neutral-800">
                <Header onSignInClick={toggleSidebar} />
            </div>
        </>
    )
}

export default App