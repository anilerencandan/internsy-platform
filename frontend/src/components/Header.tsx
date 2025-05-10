import Navbar from "./Navbar";
import Searchbar from "./Searchbar";

export default function Header() {
    const isToplulukPage = false;
    const isLoggedIn = true;
    const bowlFlag = false;

    return (
        <div className="w-full flex flex-col">
            <Navbar flag={isLoggedIn} />
            <div className="border-t-[1px] border-gray-300"></div>
            {isToplulukPage ? <Searchbar /> : null}

            {bowlFlag ? (
                
            <div className="flex gap-x-4 overflow-x-auto scrollbar-hide pb-4 px-4">
                {Array.from({ length: 20 }, (_, index) => (
                    <div className="flex flex-col gap-y-2 items-center justify-center text-sm ">
                        <img src={'/images/avatar.jpg'} key={index} className="w-16 h-16 border rounded-full flex-shrink-0"/>
                        <p className="truncate font-semibold">Onurun...</p>
                    </div>
                ))}
                </div>
            ) : null}

            <div className="border-t-[1px] border-gray-300"></div>
        </div>
    )
}