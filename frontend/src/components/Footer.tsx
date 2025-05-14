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

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-y-8 gap-x-6 p-4 text-sm">
        <div className="flex flex-col lg:items-center">
          <div className="flex flex-col gap-y-2 lg:items-start ">
            <h4 className="font-bold text-primary-dark">Internsy.co</h4>
            <Link href="/hakkimizda" className="hover:text-black">Hakkımızda</Link>
            <Link href="/topluluk" className="hover:text-black">Topluluk</Link>
            <Link href="/sirketler" className="hover:text-black">Şirketler</Link>
            <Link href="/mulakatlar" className="hover:text-black">Mülakatlar</Link>
            <Link href="/staj-ilanlari" className="hover:text-black">Staj İlanları</Link>
            <Link href="/kariyer-rehberi" className="hover:text-black">Kariyer Rehberi</Link>
          </div>
        </div>

        <div className="flex flex-col lg:items-center">
          <div className="flex flex-col gap-y-2 lg:items-start ">
            <h4 className="font-bold text-primary-dark">Özellikleri Keşfet</h4>
            <Link href="/cv-olusturucu" className="hover:text-black">CV Oluşturucu</Link>
            <Link href="/on-yazi-olusturucu" className="hover:text-black">AI Destekli Ön Yazı</Link>
            <Link href="/topluluklar" className="hover:text-black">Topluluklara Katıl</Link>
            <Link href="/kariyer-rehberi/egitimler" className="hover:text-black">Eğitim Önerileri</Link>
          </div>
        </div>

        <div className="flex flex-col  lg:items-center">
          <div className="flex flex-col gap-y-2 lg:items-start ">
            <h4 className="font-bold text-primary-dark">Kullanım Bilgisi</h4>
            <Link href="/topluluk-kurallari" className="hover:text-black">Topluluk Kuralları</Link>
            <Link href="/gizlilik-ve-guvenlik" className="hover:text-black">Gizlilik ve Güvenlik</Link>
            <Link href="/sss" className="hover:text-black">Sıkça Sorulan Sorular</Link>
            <Link href="/satis-sozlesmesi" className="hover:text-black">Mesafeli Satış Sözleşmesi</Link>
            <Link href="/teslimat-ve-iade-sartlari" className="hover:text-black">Teslimat ve İade Şartları</Link>
          </div>
        </div>

        <div className="flex flex-col  lg:items-center">
          <div className="flex flex-col gap-y-2 lg:items-start ">            
            <h4 className="font-bold text-primary-dark">İşverenler</h4>
            <Link href="/isveren/ol" className="hover:text-black">Ücretsiz İşveren Ol</Link>
            <Link href="/isveren/profil" className="hover:text-black">Şirket Profili Oluştur</Link>
            <Link href="/isveren/veri-platform" className="hover:text-black">Veri ve Platform</Link>
            <Link href="/isveren/fiyatlar" className="hover:text-black">Fiyatlandırma</Link>
            <Link href="/isveren/marka-isbirligi" className="hover:text-black">Marka İşbirliği</Link>
          </div>
        </div>

        <div className="flex flex-col lg:items-center">
          <div className="flex flex-col gap-y-2 lg:items-start ">
            <h4 className="font-bold text-primary-dark">Bize Ulaşın</h4>
            <Link href="/iletisim" className="hover:text-black">İletişim Formu</Link>
            <a href="mailto:community@internsy.com" className="hover:text-black">community@internsy.com</a>
            <div className="flex space-x-3">
                  <a
                    href="https://twitter.com/internsy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-blue-600"
                    aria-label="Twitter"
                  >
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                    </svg>
                  </a>
                  <a
                    href="https://www.linkedin.com/company/internsy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-blue-600"
                    aria-label="LinkedIn"
                  >
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>
                  <a
                    href="https://www.instagram.com/internsy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-blue-600"
                    aria-label="Instagram"
                  >
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                    </svg>
                  </a>
                </div>
          </div>
        </div>
      </div>


      <div className="w-full border-t border-gray-300" />

      <div className="flex justify-center items-center w-full py-4">
        <p className="text-sm">© 2025 Internsy. Tüm hakları saklıdır.</p>
      </div>
    </div>
  );
}