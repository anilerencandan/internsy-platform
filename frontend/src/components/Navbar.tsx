
import { Bell, CircleUserRound, LogIn, Search } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import MobileSidebar from "./MobileSideMenu"

interface NavbarProps {
  flag: boolean
}

export default function Navbar({ flag }: NavbarProps) {

  return (
    <div
      className={`
        fixed top-0 left-0 w-full z-30
        bg-white shadow-md
        transition-transform duration-300 ease-in-out
      `}
    >
      <div className="flex items-center justify-between h-16 max-w-[1280px] mx-auto px-4">
        {/* Logo */}
        <Link href="/">
          <Image src="/images/internsy-logo.svg" alt="internsy-logo" width={120} height={30} />
        </Link>

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
          <div className="flex items-center text-gray-600">
            <div className="hover:bg-gray-100 rounded-full p-2"><Search /></div>
            <div className="hover:bg-gray-100 rounded-full p-2">
              <Link href="/profil/bildirimler"><Bell /></Link>
            </div>
            <Link href="/profil" className="hover:bg-gray-100 rounded-full p-2">
              <CircleUserRound />
            </Link>
            <div className="hover:bg-gray-100 rounded-full"><MobileSidebar /></div>
          </div>
        ) : (
          <div className="hidden lg:flex items-center border p-2 rounded-[10px] gap-x-2 font-bold text-sm cursor-pointer hover:bg-gray-100">
            <LogIn size={18} /> Giriş Yap
          </div>
        )}
      </div>
    </div>
  )
}
