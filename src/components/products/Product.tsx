import { Star } from "lucide-react";

export default function Product() {
    return (
        <div className="bg-neutral-50 p-10 flex flex-col items-center hover:shadow-md hover:cursor-pointer gap-2 w-70 h-100">
            <img src="https://picsum.photos/128" alt="guitar" className="w-50 aspect-square" />
            <span className="w-full wrap-break-word line-clamp-2">Pretty Long Product Name It's Actually Pretty Longe It's Actually Pretty Long</span>
            <span className="w-full text-xl font-bold">$799.00</span>
            <div className="w-full flex relative">
                <div className="flex flex-row w-full">
                    <Star className="text-neutral-500" strokeWidth={1} size={20}/>
                    <Star className="text-neutral-500" strokeWidth={1} size={20}/>
                    <Star className="text-neutral-500" strokeWidth={1} size={20}/>
                    <Star className="text-neutral-500" strokeWidth={1} size={20}/>
                    <Star className="text-neutral-500" strokeWidth={1} size={20}/>
                    <div className="flex flex-row w-full absolute top-0 left-0">
                        <Star className="text-yellow-500" strokeWidth={2} fill="oklch(79.5% 0.184 86.047)" size={20}/>
                        <Star className="text-yellow-500" strokeWidth={2} fill="oklch(79.5% 0.184 86.047)" size={20}/>
                        <Star className="text-yellow-500" strokeWidth={2} fill="oklch(79.5% 0.184 86.047)" size={20}/>
                    </div>
                    <span className="text-sm ml-1">(25)</span>
                </div>
            </div>
        </div>
    )
}