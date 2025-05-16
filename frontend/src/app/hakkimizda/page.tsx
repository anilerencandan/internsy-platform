import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function AboutPage() {
  return (
    <main className="page-content px-4 py-6">
      <div className="flex flex-col gap-y-6">

        {/* Sekmeli Navigasyon */}
        {/* <AboutTabs /> */}

        {/* Main Content Section */}
        <div className="flex flex-col  gap-y-6 bg-white px-6 pb-6 ">
          <div className="flex flex-col space-y-6 items-center">
            <h1 className="text-5xl md:text-4xl font-bold text-primary">Biz Kimiz?</h1>
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

        {/* Vision Mision Section */}
        <div className="flex flex-col gap-y-4 p-6 py-12  bg-gray-100 rounded-lg ">
          <h2 className="text-2xl font-bold">Vizyonumuz</h2>
          <p className="text-gray-800">Türkiye’nin en güvenilir ve en kapsamlı staj & kariyer platformu olmak.
            Her öğrencinin, kendi okulundan birinin tecrübesiyle yön bulabildiği; şirketlerin, sadece notlarla değil insanlarla değerlendirildiği;
            dayanışmanın dijital hâle geldiği yeni nesil bir rehber alan inşa etmek.</p>
        </div>


        <div className="flex flex-col gap-y-4 p-6 py-12  bg-gray-100 rounded-lg ">
          <h2 className="text-2xl font-bold">Misyonumuz</h2>
          <p className="text-gray-800">Öğrencilerin ve yeni mezunların staj ve kariyer yolculuklarında karşılaştıkları belirsizlikleri ortadan kaldırmak. Gerçek deneyimlere, şeffaf bilgilere ve destekleyici bir topluluğa ulaşmalarını sağlamak. İlk adımlarında yalnız olmadıklarını hissettirmek.</p>
        </div>

        {/* What We Do Section */}
        <div className="flex flex-col gap-y-4 bg-gray-100 p-6 rounded-lg shadow-md border border-gray-200">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Neyi hedefliyoruz?</h2>
          <p className="max-w-4xl mx-auto text-gray-700">
          Geleneksel kariyer platformlarının karmaşık yapısına karşılık, Internsy sade, anlaşılır ve öğrenci dostu bir deneyim sunar.
          Kullanıcılarımızın gerçek deneyimlerinden beslenerek aşağıdaki başlıklarda çözüm sağlıyoruz
          </p>

          <div className="grid md:grid-cols-3 gap-12 pt-6 pb-10 max-w-6xl mx-auto px-4">

            {/* Topluluklar */}
            <div className="flex flex-col items-center">
              <div className="mb-12 flex items-center justify-center ">
                <Image 
                  src="/images/internsy-logo.svg"  
                  alt="For employers" 
                  width={200} 
                  height={160} 
                  className="h-auto  "
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
              <div className="mb-12 flex items-center justify-center ">
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
              <div className="mb-12 flex items-center justify-center ">
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
              <div className="mb-12 flex items-center justify-center ">
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
              <div className="mb-12 flex items-center justify-center ">
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
              <div className="mb-12 flex items-center justify-center ">
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

        {/* Hikayemiz Section */}
        {/* <div className="flex flex-col gap-y-6 p-6 py-12">
          <h3 className="text-2xl font-bold">Hikayemiz</h3>
          <p>Internsy, 2023 yılında bir grup üniversite öğrencisi tarafından, staj ve iş arama sürecindeki zorlukları çözmek amacıyla kuruldu. Kendi deneyimlerimizden yola çıkarak, bu süreci daha şeffaf, erişilebilir ve verimli hale getirmeyi amaçladık.</p>
          <p>Başlangıçta küçük bir topluluk olarak başladık, ancak kısa sürede binlerce öğrenci ve onlarca şirketin buluşma noktası haline geldik. Bugün, yapay zeka destekli araçlarımız, kapsamlı şirket değerlendirmeleri ve aktif topluluğumuzla Türkiye'nin önde gelen staj ve kariyer platformlarından biri olarak hizmet veriyoruz.</p>
        </div>

        <div className="flex flex-col gap-y-6 p-6 py-12">
          <h3 className="text-2xl font-bold">Ekibimiz</h3>
          <div className="grid grid-cols-3 gap-x-12">
            <div className="flex flex-col gap-y-4 items-center">
              <div className="w-36 h-36  rounded-full bg-gray-200"/>
              <p className="font-bold text-lg">Onur Er</p>
              <p>CEO Bitch</p>
            </div>
            <div className="flex flex-col items-center gap-y-4">
              <div className="w-36 h-36  rounded-full bg-gray-200"/>
              <p className="font-bold text-lg">Onur Er</p>
              <p>CEO Bitch</p>
            </div>
            <div className="flex flex-col items-center gap-y-4">
              <div className="w-36 h-36  rounded-full bg-gray-200"/>
              <p className="font-bold text-lg">Onur Er</p>
              <p>CEO Bitch</p>
            </div>
          </div>

            
        </div> */}

        {/* Degerlerimiz Section */}
        <div className="flex flex-col gap-y-4 py-12">
          <h3 className="text-2xl font-bold">Değerlerimiz</h3>
          <div className="flex flex-col gap-y-12">

            <div className="flex items-center gap-x-4">
              <p className=" flex items-center justify-center w-10 h-10 shrink-0 text-lg text-primary bg-blue-100 rounded-full font-bold  ">1</p>
              <div className="flex flex-col gap-y-1">
                <h3 className="text-lg font-semibold">Değerlerimiz</h3>
                <p>Platformumuzda paylaşılan tüm bilgilerin doğru ve güncel olmasını sağlıyoruz.</p>
                
              </div>
            </div>
            <div className="flex items-center gap-x-4">
              <p className=" flex items-center justify-center w-10 h-10 shrink-0 text-lg text-primary bg-blue-100 rounded-full font-bold  ">2</p>
              <div className="flex flex-col gap-y-1">
                <h3 className="text-lg font-semibold">Erişebilirlik</h3>
                <p>Kariyer fırsatlarına erişimde eşitliği savunuyor, platformumuzu herkes için kullanılabilir kılıyoruz.</p>
                
              </div>
            </div>
            <div className="flex items-center gap-x-4">
              <p className=" flex items-center justify-center w-10 h-10 shrink-0 text-lg text-primary bg-blue-100 rounded-full font-bold  ">3</p>
              <div className="flex flex-col gap-y-1">
                <h3 className="text-lg font-semibold">Yenilikçilik</h3>
                <p>Sürekli olarak platformumuzu geliştiriyor, en son teknolojileri kullanarak kullanıcı deneyimini iyileştiriyoruz.</p>
                
              </div>
            </div>

          </div>

        </div>




        <div className="flex flex-col gap-y-4 bg-white p-6 rounded-lg shadow-md border border-gray-200">
          <div className="space-y-6">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 text-primary">Kimin için?</h1>
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
            <h2 className="text-2xl font-bold text-emerald-600 text-primary">💙 Neden buradayız?</h2>
            <p className="text-gray-700">Çünkü biliyoruz ki:</p>
            <ul className="marker:text-primary list-disc list-inside text-gray-800 space-y-2">
                <li>
                <span className="font-semibold text-black">Şirketlerin gerçek yüzünü öğrenmek</span>, doğru tercihler yapmanı sağlar.
                </li>
                <li>
                <span className="font-semibold text-black">Mülakat deneyimlerini paylaşmak</span>, başkalarına yol gösterir, dayanışmayı artırır.
                </li>
                <li>
                <span className="font-semibold text-black">Topluluk olmak</span>, yalnız olmadığını hatırlatır, güç verir.
                </li>
            </ul>
        </div>

        {/* Bize Katilin Section */}
        <div className="flex flex-col items-center gap-y-6 rounded-lg px-8 py-16 bg-blue-50 text-lg">
          <h3 className="text-2xl font-bold">Bize Katılın</h3>
          <p className="text-center px-6">Internsy ailesinin bir parçası olmak ve kariyer yolculuğunuzda bir adım öne geçmek için hemen üye olun.</p>
          <Button className="px-4 py-2 bg-primary text-lg">Üye Ol</Button>

        </div>

      </div> {/* Main div kapatıldı */}
      
    </main>
  )
}