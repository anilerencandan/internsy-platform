import { Facebook, Instagram, Linkedin } from "lucide-react";
import { FaTiktok } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="flex flex-col w-full border-t border-gray-300">
      <div className="flex justify-center items-center w-full h-[100px] py-20">
        <Image src="/images/internsy-logo.svg" alt="Internsy Logo" width={200} height={100} />
      </div>

      <div className="w-full border-t border-gray-300" />

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-y-6 gap-x-6 p-4 text-sm">
        <div className="flex flex-col gap-y-2">
          <h4 className="font-bold text-primary-dark">Internsy.co</h4>
          <Link href="/hakkimizda" className="hover:text-black">Hakkımızda</Link>
          <Link href="/topluluk" className="hover:text-black">Topluluk</Link>
          <Link href="/sirketler" className="hover:text-black">Şirketler</Link>
          <Link href="/mulakatlar" className="hover:text-black">Mülakatlar</Link>
          <Link href="/staj-ilanlari" className="hover:text-black">Staj İlanları</Link>
          <Link href="/kariyer-rehberi" className="hover:text-black">Kariyer Rehberi</Link>
        </div>

        <div className="flex flex-col gap-y-2">
          <h4 className="font-bold text-primary-dark">Özellikleri Keşfet</h4>
          <Link href="/cv-olusturucu" className="hover:text-black">CV Oluşturucu</Link>
          <Link href="/ai-on-yazi" className="hover:text-black">AI Destekli Ön Yazı</Link>
          <Link href="/mulakat-deneyimleri" className="hover:text-black">Mülakat Deneyimleri</Link>
          <Link href="/topluluklar" className="hover:text-black">Topluluklara Katıl</Link>
          <Link href="/egitim-onerileri" className="hover:text-black">Eğitim Önerileri</Link>
        </div>

        <div className="flex flex-col gap-y-2">
          <h4 className="font-bold text-primary-dark">Kullanım Bilgisi</h4>
          <Link href="/kurallar" className="hover:text-black">Topluluk Kuralları</Link>
          <Link href="/gizlilik" className="hover:text-black">Gizlilik ve Güvenlik</Link>
          <Link href="/sss" className="hover:text-black">Sıkça Sorulan Sorular</Link>
          <Link href="/cerez-politikasi" className="hover:text-black">Çerez Politikası</Link>
          <Link href="/mesafeli-satis" className="hover:text-black">Mesafeli Satış Sözleşmesi</Link>
          <Link href="/iade-sartlari" className="hover:text-black">Teslimat ve İade Şartları</Link>
        </div>

        <div className="flex flex-col gap-y-2">
          <h4 className="font-bold text-primary-dark">İşverenler</h4>
          <Link href="/isveren/ol" className="hover:text-black">Ücretsiz İşveren Ol</Link>
          <Link href="/isveren/profil" className="hover:text-black">Şirket Profili Oluştur</Link>
          <Link href="/isveren/veri-platform" className="hover:text-black">Veri ve Platform</Link>
          <Link href="/isveren/fiyatlar" className="hover:text-black">Fiyatlandırma</Link>
          <Link href="/isveren/marka-isbirligi" className="hover:text-black">Marka İşbirliği</Link>
        </div>

        <div className="flex flex-col gap-y-2">
          <h4 className="font-bold text-primary-dark">Bize Ulaşın</h4>
          <Link href="/iletisim" className="hover:text-black">İletişim Formu</Link>
          <a href="mailto:community@internsy.com" className="hover:text-black">community@internsy.com</a>
        </div>
      </div>

      <div className="w-full flex justify-center items-center py-4">
        <div className="flex gap-x-2">
          <a href="#" className="border border-black rounded-full p-1.5 group hover:bg-primary">
            <Linkedin className="group-hover:fill-white" size={24} />
          </a>
          <a href="#" className="border border-black rounded-full p-1.5 group hover:bg-primary">
            <Facebook className="group-hover:fill-white" size={24} />
          </a>
          <a href="#" className="border border-black rounded-full p-1.5 group hover:bg-primary">
            <FaXTwitter className="group-hover:fill-white" size={24} />
          </a>
          <a href="#" className="border border-black rounded-full p-1.5 group hover:bg-primary">
            <Instagram className="group-hover:fill-white" size={24} />
          </a>
          <a href="#" className="border border-black rounded-full p-1.5 group hover:bg-primary">
            <FaTiktok className="group-hover:fill-white" size={24} />
          </a>
        </div>
      </div>

      <div className="w-full border-t border-gray-300" />

      <div className="flex justify-center items-center w-full py-4">
        <p className="text-sm">© 2025 Internsy. Tüm hakları saklıdır.</p>
      </div>
    </div>
  );
}