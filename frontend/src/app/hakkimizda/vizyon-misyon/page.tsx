import Image from "next/image"
import { FaGoogle } from "react-icons/fa"
import AboutTabs from "@/components/hakkimizda-page/AboutBar" // 📥 İMPORT BURADA
import Link from "next/link"

export default function AboutPage() {
  return (
    <main className="page">
      <div className="flex flex-col gap-y-6">

        {/* Sekmeli Navigasyon */}
        <AboutTabs />

        {/* Vizyon */}
        <div className="flex flex-col gap-y-4 bg-white p-6 rounded-lg shadow-md border border-gray-200">
          <div className="space-y-6">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900">Vizyonumuz</h1>
            <p className="text-gray-700">
            Türkiye’nin en güvenilir ve en kapsamlı staj & kariyer platformu olmak.
            Her öğrencinin, kendi okulundan birinin tecrübesiyle yön bulabildiği; şirketlerin, sadece notlarla değil insanlarla değerlendirildiği;
            dayanışmanın dijital hâle geldiği yeni nesil bir rehber alan inşa etmek.</p>
          </div> 
          <div className="flex justify-center items-center">
            <Image
              src="/images/internsy-logo.svg"
              alt="Worklife illustration"
              width={500}
              height={500}
              className="max-w-full h-auto"
            />
          </div>
        </div>

        {/* Misyon */}
        <div className="flex flex-col gap-y-4 bg-white p-6 rounded-lg shadow-md border border-gray-200">
          <div className="space-y-6">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900">Misyonumuz</h1>
            <p className="text-gray-700">
            Öğrencilerin ve yeni mezunların staj ve kariyer yolculuklarında karşılaştıkları belirsizlikleri ortadan kaldırmak.
            Gerçek deneyimlere, şeffaf bilgilere ve destekleyici bir topluluğa ulaşmalarını sağlamak.
            İlk adımlarında yalnız olmadıklarını hissettirmek.
            </p>
          </div> 
          <div className="flex justify-center items-center">
            <Image
              src="/images/internsy-logo.svg"
              alt="Worklife illustration"
              width={500}
              height={500}
              className="max-w-full h-auto"
            />
          </div>
        </div>
      </div> {/* Main div kapatıldı */}
      
    </main>
  )
}