import { createContext, useState, type ReactNode } from "react"

interface ISidebarContext {
    isOpen: boolean
    title: string
    content: ReactNode | null
    openSidebar: (content: ReactNode, title: string) => void;
    closeSidebar: () => void;
}

export const SidebarContext = createContext<ISidebarContext | undefined>(undefined);

export const SidebarProvider = ({children}: {children: ReactNode}) => {
    const [isOpen, setIsOpen] = useState(false)
    const [title, setTitle] = useState('')
    const [content, setContent] = useState<ReactNode | null>(null)

    const openSidebar = (content: ReactNode, title: string) => {
        if (isOpen) {
            return
        }

        setIsOpen(true)
        setTitle(title)
        setContent(content)
    }

    const closeSidebar = () => {
        setIsOpen(false)
        setTitle('')
        setContent(null)
    }

    return (
        <SidebarContext.Provider value={{isOpen, content, title, openSidebar, closeSidebar}}>
            {children}
        </SidebarContext.Provider>
    )
}