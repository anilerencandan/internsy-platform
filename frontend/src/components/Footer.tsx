import { Facebook, Instagram, Linkedin } from "lucide-react";
import Image from "next/image";
import { FaTiktok } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
    return ( 
        <div className="flex flex-col w-full border-t-[1px] border-gray-300 ">
            <div className="flex justify-center items-center w-full h-[100px] py-20">
                <Image src={"/images/internsy-logo.svg"} alt={""} width={200} height={100} />

            </div>

            <div className="w-full border-t-[1px] border-gray-300"></div>

            <div className="grid grid-cols-2 gap-y-4 p-4 text-sm">
                <div className="flex flex-col gap-y-2">
                    <h4 className="font-bold text-primary-dark">Internsy.co</h4>
                    <a href="">Hakkımızda</a>
                    <a href="">Topluluk</a>
                    <a href="">Şirketler</a>
                    <a href="">Mülakatlar</a>
                    <a href="">Staj İlanları</a>
                    <a href="">Kariyer Rehberi</a>
                </div>
                <div className="flex flex-col gap-y-2 ">
                    <h4 className="font-bold  text-primary-dark">Özellikleri Keşfet</h4>
                    <a href="">CV Oluşturucu</a>
                    <a href="">AI Destekli Ön Yazı</a>
                    <a href="">Mülakat Deneylimleri</a>
                    <a href="">Topluluklara Katıl</a>
                    <a href="">Eğitim Önerileri</a>
                </div>
                <div className="flex flex-col gap-y-2">
                    <h4 className="font-bold  text-primary-dark">Kullanım Bilgisi</h4>
                    <a href="">Topluluk Kuralları</a>
                    <a href="">Gizlilik ve Güvenlik</a>
                    <a href="">Sıkça Sorulan Sorular (SSS)</a>
                    <a href="">Çerez Politikası</a>
                    <a href="">Mesafeli Satış Sözleşmesi</a>
                    <a href="">Teslimat ve İade Şartları</a>
                </div>
                <div className="flex flex-col gap-y-2 ">
                    <h4 className="font-bold  text-primary-dark">İşverenler</h4>
                    <a href="">Ücretsiz İşveren Ol</a>
                    <a href="">Şirket Profili Oluştur</a>
                    <a href="">Veri ve Platform</a>
                    <a href="">Fiyatlandırma</a>
                    <a href="">Marka İşbirliği</a>
                </div>
                <div className="flex flex-col gap-y-2">
                    <h4 className="font-bold  text-primary-dark">Bize Ulaşın</h4>
                    <a href="">İletişim Formu</a>
                    <a href="">community@internsy.com</a>
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