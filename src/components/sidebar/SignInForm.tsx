import { Button, Field, Input, Label } from "@headlessui/react";
import { useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import { useSidebar } from "../../hooks/useSidebar";

export function SignInForm() {
    const [username, setUsername] = useState<string>("")
    const [password, setPassword] = useState<string>("")

    const { signIn } = useAuth()
    const { closeSidebar } = useSidebar()

    const handleSignIn = () => {
        if (!username || !password) {
            alert("All fields are required!")
            return
        }

        signIn(username, password)
        closeSidebar()
    }

    const handleSignUp = () => {
        closeSidebar()
    }

    return (
        <div className="p-10 flex flex-col gap-5 justify-cente items-center">
            <Field className="flex flex-col w-full max-w-64">
                <Label className="text-md">Username</Label>
                <Input className="bg-white border-1 border-neutral-300 p-2 rounded-sm" 
                    value={username} onChange={(e) => setUsername(e.target.value)}
                />
            </Field>
            <Field className="flex flex-col w-full max-w-64">
                <Label className="text-md">Password</Label>
                <Input className="bg-white border-1 border-neutral-300 p-2 rounded-sm" 
                    type="password" value={password} onChange={(e) => setPassword(e.target.value)}
                />
            </Field>
            <Button className="bg-orange-600 hover:bg-orange-500 text-white p-2 px-4 rounded-sm hover:cursor-pointer font-bold w-full max-w-64"
                onClick={handleSignIn}
            >Sign In</Button>
            <Button className="hover:cursor-pointer underline hover:text-neutral-700"
                onClick={handleSignUp}
            >Sign Up</Button>
        </div>
    )
}