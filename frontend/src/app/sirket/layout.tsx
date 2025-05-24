import CompanyTabs from "@/components/company-page/CompanyTabs";
import { CircleCheck, Star } from "lucide-react";
import { FaGoogle } from "react-icons/fa";
import Image from "next/image";
import { SquareArrowOutUpRight } from 'lucide-react'
import CompanyInfoCard from "@/components/company-page/CompanyInfoCard";
import StajIlanlarCard from "@/components/sirketler-page/StajIlanlarCard";

export default function SirketLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="page-content sm:grid grid-cols-12 gap-x-12 sm:pt-4 sm:py-6 xl:px-0 sm:px-4 px-0">

      {/* Sol */}
      <div className="md:col-span-3 md:flex hidden flex-col gap-y-4 border border-gray-300 rounded-lg h-fit p-4 sticky top-4">
        <div className="flex flex-col text-xs gap-y-4">
          <h3 className="text-xl font-bold">Takip Edilen Şirketler</h3>
          <p className="text-gray-600">
            Şirketleri takip ederek staj, mülakat ve maaş bilgileri anında seninle olsun.
          </p>
          <div className="flex justify-between items-center w-full gap-x-2 text-sm font-semibold">
            <div className="flex items-center gap-x-2">
              <FaGoogle size={16} /> Google
            </div>
            <div className="flex items-center gap-x-2">
              3.6 <Star fill="black" size={16} />
            </div>
          </div>
          <div className="flex items-center justify-center py-2">
            <button className="px-4 py-2 rounded-lg bg-primary font-bold w-fit text-white">
              Şirketleri Keşfet
            </button>
          </div>
        </div>
      </div>

      {/* Orta */}
      <div className="xl:col-span-6 md:col-span-9 col-span-12 sm:rounded-lg overflow-hidden sm:border border-gray-300">
        <div className="flex flex-col gap-y-6">
          <div className="relative min-h-[96px]">
            <Image
              src={"/images/google-kapak.jpeg"}
              fill
              className="object-cover object-center"
              alt={"google-kapak"}
            />
            <div className="absolute -bottom-4 left-4 bg-white border border-gray-300 rounded-md overflow-hidden">
              <FaGoogle className="p-2" size={48} />
            </div>
          </div>

          <div className="flex flex-col gap-y-1 px-4">
            
            <h3 className="text-2xl font-semibold">Google</h3>
            <h4 className="text-sm text-gray-700 flex gap-x-2 items-center">
              <CircleCheck size={16} /> Onaylı Şirket
            </h4>
            <div className="grid grid-cols-2 items-center gap-x-4 text-sm font-semibold py-4">
              <button className="border border-black p-2 rounded-lg">Takip Et</button>
              <button className="border border-black p-2 rounded-lg text-white bg-black">
                Görüş Ekle
              </button>
            </div>
            <CompanyInfoCard />
          </div>
          

          {/* Tıklanabilir Sekmeler */}
          <CompanyTabs />
        </div>

        <div className="p-4">{children}</div>
      </div>

      {/* Sağ */}
      <div className="xl:col-span-3 xl:flex hidden flex-col gap-y-4 h-fit sticky top-4">
        {/* İlk Kart: Staj İlanları */}
        <div className="border border-gray-300 rounded-lg p-4 bg-primary text-white shadow-sm">
        <div className="flex flex-col text-xs">
          <h3 className="text-xl font-bold mb-2">Şirket Bilgileri</h3>
        </div>
        
        <div className="flex flex-col gap-y-1">
      <p><span className="font-bold">Lokasyon:</span> Mountain View, Amerika</p>
      <p><span className="font-bold">Kategori:</span> Teknoloji</p>
    </div>

    {/* Sağ sütun */}
    <div className="flex flex-col gap-y-1">
      <p><span className="font-bold">Çalışan:</span> 10000+</p>
      <p><span className="font-bold">Gelir:</span> $10+ Milyar [USD]</p>
      <p><span className="font-bold">Kuruluş:</span> 1998</p>
    </div>

        </div>
        <div className="border border-gray-300 rounded-lg p-4">
          <StajIlanlarCard />
        </div>

        {/* Yeni Eklenen Kart */}
        

      </div>
    </div>
  );
}