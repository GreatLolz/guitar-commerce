import { Button } from '@headlessui/react'
import { X } from 'lucide-react'

export default function SignInSidebar({ isOpen, onToggle }: { isOpen: boolean, onToggle: () => void }) {
    const toggleSidebar = () => {
        onToggle()
    }

    return (
        <div className="fixed right-0 top-0 bottom-0 w-1/4 bg-neutral-200 transition-all duration-300 ease-in-out transform"
             style={{ translate: isOpen ? '0' : '100%', opacity: isOpen ? 1 : 0 }}>
            <div className="flex flex-row text-white">
                <div className="text-2xl font-bold mb-4 w-full bg-neutral-700 p-2 px-8 h-16 flex flex-row justify-between items-center">
                    Sign In
                    <Button onClick={toggleSidebar} className="hover:cursor-pointer">
                        <X size={32}/>
                    </Button>
                </div>
            </div>
        </div>
    )
}