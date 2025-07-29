import { Button } from "@headlessui/react";
import HeaderSearchBar from "./header/HeaderSearchBar";
import { ShoppingCart, User } from "lucide-react";
import type { UserData } from "../types/UserData";
import { NavLink } from "react-router";

export default function Header({ onSignInClick, setFilter, userData }: { onSignInClick: () => void, setFilter: (filter: string | null) => void, userData: UserData | null }) {
    return (
        <div className="flex flex-row bg-neutral-50 h-20 p-2 justify-between items-center px-55">
            <NavLink to="/" onClick={() => setFilter(null)}>
                <img src="guitar.png" alt="guitar" className="w-24" />
            </NavLink>
            <HeaderSearchBar />
            <div className="flex flex-row items-center gap-8 text-neutral-600">
                {!userData ? (
                    <>
                        <Button 
                            className="flex flex-row items-center gap-2 hover:text-neutral-800 hover:cursor-pointer p-2 hover:bg-neutral-100"
                            onClick={onSignInClick}
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
                            onClick={() => {}}
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