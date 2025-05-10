import Image from "next/image"
import { FaGoogle } from "react-icons/fa"
import AboutTabs from "@/components/hakkimizda-page/AboutBar" // 📥 İMPORT BURADA
import Link from "next/link"

export default function AboutPage() {
  return (
    <main className="page">
      <div className="flex flex-col">

        {/* Sekmeli Navigasyon */}
        <AboutTabs />

        {/* Main Content Section */}
        <div className="flex flex-col gap-y-6 bg-white p-6 shadow-md border border-gray-200">
          <div className="space-y-6">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900">Biz Kimiz?</h1>
            <p className="text-gray-700">
            Internsy, öğrenciler ve yeni mezunlar için staj ve kariyer yolculuğunu daha şeffaf, adil ve erişilebilir hale getirmeyi amaçlayan bir topluluk platformudur.
            Amacımız, staj sürecinin belirsizliklerini ortadan kaldırmak, doğru bilgiye ulaşmayı kolaylaştırmak ve öğrencilerin birbiriyle dayanışma içinde öğrenebileceği bir alan yaratmak.
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

        {/* What We Do Section */}
        <div className="flex flex-col gap-y-4 bg-gray-100 p-6 rounded-lg shadow-md border border-gray-200">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Neyi hedefliyoruz?</h2>
          <p className="max-w-2xl mx-auto text-gray-700">
          Geleneksel kariyer platformlarının karmaşık yapısına karşılık, Internsy sade, anlaşılır ve öğrenci dostu bir deneyim sunar.
          Kullanıcılarımızın gerçek deneyimlerinden beslenerek aşağıdaki başlıklarda çözüm sağlıyoruz
          </p>

          <div className="grid md:grid-cols-3 gap-12 mt-16 max-w-6xl mx-auto px-4">

            {/* Topluluklar */}
            <div className="flex flex-col items-center">
              <div className="h-40 flex items-center justify-center mb-6">
                <Image 
                  src="/images/internsy-logo.svg"  
                  alt="For employers" 
                  width={200} 
                  height={160} 
                  className="h-auto"
                />
              </div>
              <h3 className="text-xl font-bold mb-4">Topluluklar</h3>
              <p className="text-gray-700 mb-6 text-left">
              Üniversite veya ilgi alanına göre oluşturulan mikro topluluklarda deneyim paylaşımı ve destek.
              </p>
              <Link href="/create-company" className="text-emerald-600 font-medium flex items-center mt-auto">
                Create Company Profile <span className="ml-1">→</span>
              </Link>
            </div>

            {/* Şirket Yorumları */}
            <div className="flex flex-col items-center">
              <div className="h-40 flex items-center justify-center mb-6">
                <Image 
                  src="/images/internsy-logo.svg" 
                  alt="For employees" 
                  width={200} 
                  height={160} 
                  className="h-auto"
                />
              </div>
              <h3 className="text-xl font-bold mb-4">Şirket Yorumları</h3>
              <p className="text-gray-700 mb-6 text-left">
              Şirket içi kültür, yöneticiler, ekip dinamikleri ve daha fazlası.
              </p>
              <Link href="/join" className="text-emerald-600 font-medium flex items-center mt-auto">
                Join Internsy <span className="ml-1">→</span>
              </Link>
            </div>

            {/* Mülakat Deneylimleri */}
            <div className="flex flex-col items-center">
              <div className="h-40 flex items-center justify-center mb-6">
                <Image 
                  src="/images/internsy-logo.svg"  
                  alt="For job seekers" 
                  width={200} 
                  height={160} 
                  className="h-auto"
                />
              </div>
              <h3 className="text-xl font-bold mb-4">Mülakat Deneyimleri</h3>
              <p className="text-gray-700 mb-6 text-left">
              Hangi şirket ne soruyor? Nasıl davranıyor? Kimler kadroya alınıyor?
              </p>
              <Link href="/join" className="text-emerald-600 font-medium flex items-center mt-auto">
                Join Internsy <span className="ml-1">→</span>
              </Link>
            </div>

            {/* Staj İlanları */}
            <div className="flex flex-col items-center">
              <div className="h-40 flex items-center justify-center mb-6">
                <Image 
                  src="/images/internsy-logo.svg"  
                  alt="For employers" 
                  width={200} 
                  height={160} 
                  className="h-auto"
                />
              </div>
              
              <h3 className="text-xl font-bold mb-4">Staj İlanları</h3>
              <p className="text-gray-700 mb-6 text-left">
              Öğrencilere özel, filtrelenmiş ve gerçek staj fırsatları.
              </p>
              <Link href="/create-company" className="text-emerald-600 font-medium flex items-center mt-auto">
                Create Company Profile <span className="ml-1">→</span>
              </Link>
            </div>

            {/* Maaşlar */}
            <div className="flex flex-col items-center">
              <div className="h-40 flex items-center justify-center mb-6">
                <Image 
                  src="/images/internsy-logo.svg"  
                  alt="For employers" 
                  width={200} 
                  height={160} 
                  className="h-auto"
                />
              </div>
              <h3 className="text-xl font-bold mb-4">Stajyer Maaşları</h3>
              <p className="text-gray-700 mb-6 text-left">
              Şirketlerin stajyerlere ne kadar ödediğini öğren, kararını bilinçli ver.
              </p>
              <Link href="/create-company" className="text-emerald-600 font-medium flex items-center mt-auto">
                Create Company Profile <span className="ml-1">→</span>
              </Link>
            </div>


             {/* Yapay Zeka */}
            <div className="flex flex-col items-center">
              <div className="h-40 flex items-center justify-center mb-6">
                <Image 
                  src="/images/internsy-logo.svg"  
                  alt="For employers" 
                  width={200} 
                  height={160} 
                  className="h-auto"
                />
              </div>
             <h3 className="text-xl font-bold mb-4">AI Destekli CV & Ön Yazı Oluşturma:</h3>
              <p className="text-gray-700 mb-6 text-left">
              İlk adımını en iyi şekilde atman için akıllı araçlar.
              </p>
              <Link href="/create-company" className="text-emerald-600 font-medium flex items-center mt-auto">
                Create Company Profile <span className="ml-1">→</span>
              </Link>
            </div>
            

            </div> {/* What We Do Section Grid kapandı */}
        </div> {/* What We Do Section tamamlandı */}


        <div className="flex flex-col gap-y-4 bg-white p-6 rounded-lg shadow-md border border-gray-200">
          <div className="space-y-6">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900">Kimin için?</h1>
            <p className="text-gray-700">
            Internsy; staj arayanlar, deneyim paylaşmak isteyenler ve bu yolculukta başkalarına destek olmayı amaçlayan herkes içindir.
            İster ilk stajına hazırlanıyor ol, ister mezuniyet sonrası ilk işini arıyor ol — burada sana ait bir alan var.            </p>
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

        <div className="flex flex-col gap-y-4 bg-white p-6 rounded-lg shadow-md border border-gray-200">
            <h2 className="text-2xl font-bold text-emerald-600">💚 Neden buradayız?</h2>
            <p className="text-gray-700">Çünkü biliyoruz ki:</p>
            <ul className="list-disc list-inside text-gray-800 space-y-2">
                <li>
                <span className="font-medium text-black">Şirketlerin gerçek yüzünü öğrenmek</span>, doğru tercihler yapmanı sağlar.
                </li>
                <li>
                <span className="font-medium text-black">Mülakat deneyimlerini paylaşmak</span>, başkalarına yol gösterir, dayanışmayı artırır.
                </li>
                <li>
                <span className="font-medium text-black">Topluluk olmak</span>, yalnız olmadığını hatırlatır, güç verir.
                </li>
            </ul>
        </div>

      </div> {/* Main div kapatıldı */}
      
    </main>
  )
}