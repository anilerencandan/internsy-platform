'use client';

import { Home, Search, Send, LogOut, GraduationCap, CirclePlus } from "lucide-react";
import Link from "next/link";
import UserAvatar from "./UserAvatar";

export default function MobileSidebar() {
  return (
    <div className="fixed bottom-2 left-4 right-4 z-50 bg-white border border-gray-300 rounded-xl px-6 py-3 flex justify-between items-center shadow-md sm:hidden">
      <Link href="/topluluk">
        <Home className="w-6 h-6 text-primary" />
      </Link>
      <Link href="/sirketler">
        <Search className="w-6 h-6 text-primary" />
      </Link>
      <Link href="/staj-ilanlari">
        <CirclePlus className="w-6 h-6 text-primary" />
      </Link>
      <Link href="/kariyer-rehberi">
        <GraduationCap className="w-6 h-6 text-primary" />
      </Link>
      <Link href="/profil" className="relative">
        <span className="block w-6 h-6 rounded-full overflow-hidden border border-gray-300">
          <UserAvatar name="Onur Er" />
        </span>
        <span className="absolute bottom-0 right-0 w-2 h-2 bg-red-500 rounded-full border-2 border-black"></span>
      </Link>
    </div>
  );
}