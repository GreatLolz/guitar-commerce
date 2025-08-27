import { createContext, useState, type ReactNode } from "react"

interface ISidebarContext {
    isOpen: boolean
    content: ReactNode | null
    openSidebar: (content: ReactNode) => void;
    closeSidebar: () => void;
}

export const SidebarContext = createContext<ISidebarContext | undefined>(undefined);

export const SidebarProvider = ({children}: {children: ReactNode}) => {
    const [isOpen, setIsOpen] = useState(false)
    const [content, setContent] = useState<ReactNode | null>(null)

    const openSidebar = (content: ReactNode) => {
        if (isOpen) {
            return
        }

        setIsOpen(true)
        setContent(content)
    }

    const closeSidebar = () => {
        setIsOpen(false)
        setContent(null)
    }

    return (
        <SidebarContext.Provider value={{isOpen, content, openSidebar, closeSidebar}}>
            {children}
        </SidebarContext.Provider>
    )
}