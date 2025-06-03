import Image from "next/image";
import Navbar from "./Navbar";
import Searchbar from "./Searchbar";

export default function Header() {
    const mobilSearch = false;
    const isLoggedIn = true;

    return (
        <div className="page-content w-full flex flex-col">
            <Navbar flag={isLoggedIn} />
            <div className=""></div>

            

            {/* <div className="border-t-[1px] border-gray-300"></div> */}
        </div>
    )
}