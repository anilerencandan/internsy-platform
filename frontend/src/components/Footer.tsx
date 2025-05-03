import { Facebook, Instagram, Linkedin } from "lucide-react";
import Image from "next/image";
import { FaTiktok } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
    return ( 
        <div className="flex flex-col w-full">
            <div className="flex justify-center items-center w-full h-[100px] py-20">
                <Image src={"/images/internsy-logo.svg"} alt={""} width={200} height={100} />

            </div>

            <div className="w-full border-t-[1px] border-gray-300"></div>

            <div className="grid grid-cols-2 gap-y-4 p-4 text-sm">
                <div className="flex flex-col gap-y-2">
                    <h4 className="font-bold">Internsy</h4>
                    <a href="">Hakkımızda</a>
                    <a href="">Ödüller</a>
                    <a href="">Blog</a>
                    <a href="">Araştırma</a>
                    <a href="">İletişim</a>
                    <a href="">Rehberler</a>
                </div>
                <div className="flex flex-col gap-y-2">
                    <h4 className="font-bold">İşverenler</h4>
                    <a href="">Ücretsiz İşveren Ol</a>
                    <a href="">Hesap</a>
                    <a href="">İşveren Merkezi</a>
                </div>
                <div className="flex flex-col gap-y-2">
                    <h4 className="font-bold">Bilgi</h4>
                    <a href="">Yardım</a>
                    <a href="">Rehber Yolu</a>
                    <a href="">Kullanım Şartları</a>
                    <a href="">Gizlilik ve Reklam Tercihleri</a>
                    <a href="">Bilgilerimi Satma veya Paylaşma</a>
                    <a href="">Koruma</a>
                </div>
                <div className="flex flex-col gap-y-2">
                    <h4 className="font-bold">Bizimle Çalış</h4>
                    <a href="">Reklam verenler</a>
                    <a href="">Kariylerler</a>
                </div>
            </div>

            <div className="w-full flex flex-col justify-center items-center py-4">
                <div className="flex gap-x-2">
                    <a href="" className="border-[1px] border-black rounded-full p-1.5 group hover:bg-primary"><Linkedin  className="group-hover:fill-white" size={24}/></a>
                    <a href="" className="border-[1px] border-black rounded-full p-1.5 group hover:bg-primary"><Facebook className="group-hover:fill-white" size={24}/></a>
                    <a href="" className="border-[1px] border-black rounded-full p-1.5 group hover:bg-primary"><FaXTwitter  className="group-hover:fill-white" size={24}/></a>
                    <a href="" className="border-[1px] border-black rounded-full p-1.5 group hover:bg-primary"><Instagram className="group-hover:fill-white" size={24}/></a>
                    <a href="" className="border-[1px] border-black rounded-full p-1.5 group hover:bg-primary"><FaTiktok  className="group-hover:fill-white" size={24}/></a>
                </div>

            </div>

            <div className="w-full border-t-[1px] border-gray-300"></div>

            <div className="flex justify-center items-center w-full  py-4">
                <p className="text-sm">© 2025 Internsy. Tüm hakları saklıdır.</p>
            </div>

        </div>
    )
}