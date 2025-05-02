import { Bell, CircleUserRound, LogIn, Menu, Search } from "lucide-react"
import Image from "next/image"

interface NavbarProps { 
    flag: boolean
}

export default function Navbar({flag}: NavbarProps) {
    return (
        <div className="w-full flex flex-col">
            <div className="flex items-center justify-between h-16 px-4">
                <Image src={'/images/internsy-logo.svg'} alt={"internsy-logo"} width={120} height={30}/>
                <div className="hidden lg:flex gap-x-4 font-bold text-[16px] text-[#4B5563]">
                    <div className="cursor-pointer">Ürün</div>
                    <div className="cursor-pointer">Fiyatlandırma</div>
                    <div className="cursor-pointer">İletişim</div>
                    <div className="cursor-pointer">Blog</div>
                    </div>
                {flag ? (<div className=" flex justify-betwee items-center gap-4">
                    <Search/>
                    <Bell />
                    <CircleUserRound />
                    <Menu />
                </div>) : (
                    <div className="border border-black p-2 rounded-[10px] flex gap-x-2 font-bold"><LogIn />Giriş Yap</div>
                )}
            </div>
        </div>
    )
}