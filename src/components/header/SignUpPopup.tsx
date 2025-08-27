import { Description, Dialog, DialogBackdrop, DialogPanel, DialogTitle, Field, Label, Input, Button } from "@headlessui/react";
import { X } from "lucide-react";
import { useState } from "react";

export default function SignUpPopup({ isOpen, onToggle, onSignUp }: { isOpen: boolean, onToggle: (open: boolean) => void, onSignUp: (username: string, password: string) => void }) {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const signUp = () => {
        if (password !== confirmPassword) {
            alert('Passwords do not match!')
            return
        }

        if (username.length < 0 || !username) {
            alert('Username is required!')
            return
        }

        if (password.length < 0 || !password) {
            alert('Password is required!')
            return
        }

        if (confirmPassword.length < 0 || !confirmPassword) {
            alert('Please confirm your password!')
            return
        }

        onSignUp(username, password)
    }
    
    return (
        <Dialog open={isOpen} onClose={() => onToggle(false)} className="fixed inset-0 z-50 flex items-center justify-center">
            <DialogBackdrop className="fixed inset-0 bg-neutral-900/50 z-40" />
            <DialogPanel className="w-full max-w-md bg-white rounded-lg shadow-lg z-50">
                <DialogTitle className="flex flex-row items-center justify-between text-2xl font-bold mb-4 bg-orange-600 text-white w-full rounded-t-lg p-4">
                    <span>Sign Up</span>
                    <Button className="hover:cursor-pointer" onClick={() => onToggle(false)}><X size={32}/></Button>
                </DialogTitle>
                <div className="flex flex-col items-center gap-4 mt-2 w-full px-10 pb-10">
                    <Description>Create an account and become a member!</Description>
                    <Field className="flex flex-col items-center w-full">
                        <Label className="w-full">Username</Label>
                        <Input className="w-full border-1 border-neutral-300 p-2 focus:outline-none" onChange={(e) => setUsername(e.target.value)} />
                    </Field>
                    <Field className="flex flex-col items-center w-full">
                        <Label className="w-full">Password</Label>
                        <Input type="password" className="w-full border-1 border-neutral-300 p-2 focus:outline-none" onChange={(e) => setPassword(e.target.value)} />
                    </Field>
                    <Field className="flex flex-col items-center w-full">
                        <Label className="w-full">Confirm Password</Label>
                        <Input type="password" className="w-full border-1 border-neutral-300 p-2 focus:outline-none" onChange={(e) => setConfirmPassword(e.target.value)} />
                    </Field>
                    <Button className="w-3/4 bg-orange-600 hover:bg-orange-500 text-white p-2 px-4 rounded-sm hover:cursor-pointer" onClick={signUp}>Sign Up</Button>
                </div>
            </DialogPanel>
        </Dialog>
    )
}
    