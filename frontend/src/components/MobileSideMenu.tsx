// components/MobileSidebar.tsx
'use client';

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { LogOut, Menu } from "lucide-react"; // Hamburger ikonu
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { Button } from "./ui/button";
import { Avatar } from "./ui/avatar";
import UserAvatar from "./UserAvatar";

export default function MobileSidebar() {
  return (
    <Sheet>
      <SheetTrigger  className="lg:hidden p-2">
        <Menu className="w-6 h-6" />
      </SheetTrigger>

      <SheetContent side="right" className="w-full py-12" >
        <div className="flex flex-col">
          <div className="flex items-center gap-x-4 p-4 ">
            <span className='relative w-12 h-12 rounded-full  shrink-0'>
              <UserAvatar name={"Onur Er"} />
            </span>
            <div className="flex flex-col">
              <h3 className="text-lg font-semibold">Onur Er</h3>
              <p className="text-sm">Kocaeli Üniversitesinde Okuyor</p>
            </div>
          </div>
        </div>

        <Separator className=""/>

        <nav className="flex flex-col gap-4  pt-4 ">
          <Link className="px-4" href="/topluluk">Topluluk</Link>
          <Separator className=""/>
          <Link className="px-4" href="/sirketler">Şirketler</Link>
          <Separator className=""/>

          <Link className="px-4" href="/mulakatlar">Mülakatlar</Link>
          <Separator className=""/>

          <Link className="px-4" href="/staj-ilanlari">Staj İlanları</Link>
          <Separator className=""/>

          <Link className="px-4" href="/kariyer-rehberi">Kariyer Rehberi</Link>
          <Separator className=""/>
          <Link className="px-4 flex items-center gap-x-4 text-red-600" href="/kariyer-rehberi">Çıkış Yap <LogOut  /></Link>
        </nav>
      </SheetContent>
    </Sheet>
  );
}
