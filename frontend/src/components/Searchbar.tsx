import { Search } from "lucide-react";

export default function Searchbar() {

    return (
        <div className="max-w-[1280px] mx-auto flex w-full px-4 py-2">
            <div className="w-full flex bg-[#f4f4f4] h-[42px] rounded-full px-4 py-2 items-center gap-x-2 mt-4 mb-4">
            <Search/>
            <input className="bg-transparent focus:outline-none w-full text-sm text-gray-800 placeholder:text-gray-500" type="text" placeholder="Search for Bowls or conversations" />
            </div>
        </div>
    )
}