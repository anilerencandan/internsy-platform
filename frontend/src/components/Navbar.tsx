import { Bell, CircleUserRound, LogIn, Menu, Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface NavbarProps {
  flag: boolean;
}

export default function Navbar({ flag }: NavbarProps) {
  return (
    <div className="w-full flex flex-col max-w-[1280px] mx-auto">
      <div className="flex items-center justify-between h-16 xl:px-0 px-4 ">
        {/* Logo */}
        <Image src={'/images/internsy-logo.svg'} alt={"internsy-logo"} width={120} height={30} />

        {/* Orta Menü */}
        <div className="hidden lg:flex gap-x-4 font-bold text-[16px] text-[#4B5563]">
          <Link href="/topluluk">Topluluk</Link>
          <Link href="/sirketler">Şirketler</Link>
          <Link href="/mulakatlar">Mülakatlar</Link>
          <Link href="/staj-ilanlari">Staj İlanları</Link>
          <Link href="/kariyer-rehberi">Kariyer Rehberi</Link>
        </div>

        {/* Sağ Menü */}
        {flag ? (
          <div className="flex items-center  text-gray-600">
            <div className="hover:bg-gray-100 rounded-full p-2">
              <Search  />

            </div>
            <div className="hover:bg-gray-100 rounded-full p-2">
            <Bell />

            </div>
            <div className="hover:bg-gray-100 rounded-full p-2">
            <CircleUserRound />
            </div>
            <div className="hover:bg-gray-100 rounded-full p-2">
            <Menu />
            </div>
          </div>
        ) : (
          <div className="hidden lg:flex items-center border border-black p-2 rounded-[10px] gap-x-2 font-bold text-sm text-black cursor-pointer hover:bg-gray-100 transition">
            <LogIn size={18} />
            Giriş Yap
          </div>
        )}
      </div>
    </div>
  );
}