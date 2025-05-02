import Navbar from "./Navbar";
import Searchbar from "./Searchbar";

export default function Header() {
    const flag = false;

    return (
        <div className="w-full flex flex-col">
            <Navbar flag={flag} />
            <div className="border-t-[1px] border-gray-300"></div>
            {flag ? <Searchbar /> : null}

        </div>
    )
}