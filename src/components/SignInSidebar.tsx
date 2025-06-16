import { Button, Field, Input, Label } from '@headlessui/react'
import { X } from 'lucide-react'

export default function SignInSidebar({ isOpen, onToggle }: { isOpen: boolean, onToggle: () => void }) {
    const toggleSidebar = () => {
        onToggle()
    }

    return (
        <div className="flex-row fixed right-0 top-0 bottom-0 w-1/4 bg-neutral-200 transition-all duration-300 ease-in-out transform"
             style={{ translate: isOpen ? '0' : '100%', opacity: isOpen ? 1 : 0 }}>
            <div className="flex flex-col text-white">
                <div className="text-2xl font-bold mb-4 w-full bg-neutral-700 p-2 px-8 h-16 flex flex-row justify-between items-center">
                    Sign In
                    <Button onClick={toggleSidebar} className="hover:cursor-pointer">
                        <X size={32}/>
                    </Button>
                </div>
                <div className="text-neutral-800 flex flex-col items-center p-8 px-16 gap-4">
                    <Field className="flex flex-col w-full items-center">
                        <Label className="w-full" >Username:</Label>
                        <Input className="bg-neutral-100 w-full focus:outline-none h-10 px-2 drop-shadow-sm"/>
                    </Field>
                    <Field className="flex flex-col w-full items-center">
                        <Label className="w-full" >Password:</Label>
                        <Input type="password" className="bg-neutral-100 w-full focus:outline-none h-10 px-2 drop-shadow-sm"/>
                    </Field>
                    <div className="flex flex-col justify-between items-center gap-2">
                        <Button className="bg-orange-600 hover:bg-orange-500 text-white p-2 px-4 rounded-sm hover:cursor-pointer">Sign In</Button>
                        <span className="text-sm underline hover:cursor-pointer text-neutral-900 hover:text-neutral-700">Sign up</span>
                    </div>
                </div>
            </div>
        </div>
    )
}