import { Button } from "@headlessui/react";
import { useSidebar } from "../../hooks/useSidebar";
import { X } from "lucide-react";

export function Sidebar() {
    const { isOpen, content, title, closeSidebar } = useSidebar()

    return (
        <div className="fixed right-0 top-0 bottom-0 max-w-md w-full bg-neutral-200 transition-all duration-300 ease-in-out transform z-50"
             style={{ translate: isOpen ? '0' : '100%', opacity: isOpen ? 1 : 0 }}>
            <div className="text-white text-2xl font-bold w-full bg-neutral-700 p-2 px-8 h-16 flex flex-row justify-between items-center">
                {title}
                <Button onClick={closeSidebar} className="hover:cursor-pointer">
                    <X size={32}/>
                </Button>
            </div>
            {content}
        </div>
    )
}