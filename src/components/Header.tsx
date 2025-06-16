import { Button } from "@headlessui/react";
import HeaderSearchBar from "./HeaderSearchBar";
import { ShoppingCart, User } from "lucide-react";

export default function Header() {
    return (
        <div className="flex flex-row bg-neutral-50 h-20 p-2 justify-between items-center px-55">
            <img src="guitar.png" alt="guitar" className="w-24" />
            <HeaderSearchBar />
            <div className="flex flex-row items-center gap-8 text-neutral-600">
                <Button className="flex flex-row items-center gap-2 hover:text-neutral-800 hover:cursor-pointer p-2 hover:bg-neutral-100"><User />Sign In</Button>
                <Button className="hover:text-neutral-800 hover:cursor-pointer p-2 hover:bg-neutral-100"><ShoppingCart /></Button>
            </div>
        </div>
    )
}