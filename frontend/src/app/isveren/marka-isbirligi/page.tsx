export default function MarkaIsbirligiPage() {
    return (
      <div className="flex flex-col items-center py-40 px-4 text-center">
        {/* Başlık */}
        <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6">
          AI Destekli Ön Yazı Oluşturucu
        </h1>
  
        {/* Açıklama */}
        <p className="text-base md:text-lg text-gray-700 max-w-2xl mb-4">
          Etkileyici bir ön yazı, başvurunun fark edilmesini sağlar. Internsy’nin yapay zekâ destekli ön yazı aracı, 
          sana özel, pozisyona uygun ve özgün içerikler üretir. Yalnızca birkaç soruya yanıt ver, gerisini bize bırak.
        </p>
  
        {/* Yakında ifadesi */}
        <span className=" text-4xl md:text-6xl text-primary mt-2">Yakında sizlerle</span>
      </div>
    )
  }