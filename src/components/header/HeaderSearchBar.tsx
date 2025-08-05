import { Input } from "@headlessui/react";
import { Search } from "lucide-react";

export default function HeaderSearchBar() {
    return (
        <div className="flex-row bg-neutral-100 h-12 drop-shadow-sm max-w-200 w-full mx-5 hidden sm:flex xl:mx-20 px-3 justify-between items-center">
            <Input className="focus:outline-none w-full" placeholder="Search for gear..." />
            <Search />
        </div>
    )
}