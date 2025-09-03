import { Button } from "@headlessui/react";
import HeaderSearchBar from "./header/HeaderSearchBar";
import { ShoppingCart, User } from "lucide-react";
import type { UserData } from "../types/user";
import { NavLink } from "react-router";
import { useSidebar } from "../hooks/useSidebar";
import { SignInForm } from "./sidebar/SignInForm";

interface HeaderProps {
    setCategory: (category: string | null) => void
    userData: UserData | null
}

export default function Header({ setCategory, userData }: HeaderProps) {
    const { openSidebar } = useSidebar()

    return (
        <div className="flex flex-row bg-neutral-50 h-20 p-2 justify-between items-center xl:px-55 md:px-20">
            <NavLink to="/" onClick={() => setCategory(null)} className="w-full flex justify-center sm:w-auto sm:block">
                <img src="guitar.png" alt="guitar" className="w-24 min-w-24" />
            </NavLink>
            <HeaderSearchBar />
            <div className="flex-row items-center gap-8 text-neutral-600 hidden sm:flex">
                {!userData ? (
                    <>
                        <Button 
                            className="flex flex-row items-center gap-2 hover:text-neutral-800 hover:cursor-pointer p-2 hover:bg-neutral-100"
                            onClick={() => openSidebar(<SignInForm/>, "Sign In")}
                        >
                            <User />Sign In
                        </Button>
                        <Button className="hover:text-neutral-800 hover:cursor-pointer p-2 hover:bg-neutral-100">
                            <ShoppingCart />
                        </Button>
                    </>
                ) : (
                    <>
                        <Button 
                            className="flex flex-row items-center gap-2 hover:text-neutral-800 hover:cursor-pointer p-2 hover:bg-neutral-100"
                            onClick={() => openSidebar(<></>, userData.name)}
                        >
                            <User />{userData.name}
                        </Button>
                        <Button className="hover:text-neutral-800 hover:cursor-pointer p-2 hover:bg-neutral-100">
                            <ShoppingCart />
                        </Button>
                    </>
                )}
            </div>
        </div>
    )
}