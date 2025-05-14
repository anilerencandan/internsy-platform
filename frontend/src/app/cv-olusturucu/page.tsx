export default function CvAiPage() {
    return (
      <div className="flex flex-col items-center py-40 px-4 text-center">
        {/* Başlık */}
        <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6">
          AI Destekli CV Oluşturucu
        </h1>
  
        {/* Açıklama */}
        <p className="text-base md:text-lg text-gray-700 max-w-2xl mb-4">
          İlk izlenim önemlidir. Internsy’nin yapay zekâ destekli CV oluşturucusu ile dakikalar içinde 
          profesyonel ve etkileyici bir özgeçmiş hazırla. Deneyimin olmasa bile endişelenme — seni ve 
          hedeflerini en iyi şekilde yansıtan CV’yi birlikte oluşturuyoruz.
        </p>
  
        {/* Yakında ifadesi */}
        <span className=" text-4xl md:text-6xl text-primary mt-2">Yakında sizlerle</span>
      </div>
    )
  }