export default function CvAiPage() {
    return (

  <section className="page-content mx-auto px-4 py-12 text-gray-800">
    <h1 className="text-4xl font-bold mb-6 text-primary">Internsy Gizlilik ve Güvenlik Politikası</h1>

    <p className="mb-4">
      Internsy olarak gizliliğinize önem veriyoruz. Platformumuzda yer alan her kullanıcı, verilerinin güvenli ve etik kurallar 
      çerçevesinde işlendiğinden emin olabilir. Bu sayfa, hangi bilgileri topladığımızı, nasıl kullandığımızı ve haklarınızı
      açıklamaktadır.
    </p>

    <h2 className="text-xl font-semibold mt-8 mb-2">1. Toplanan Veriler</h2>
    <ul className="list-disc list-inside mb-4">
      <li>Üyelik sırasında sağlanan ad, e-posta adresi gibi kişisel bilgiler</li>
      <li>Şirket yorumu, staj deneyimi ve maaş bilgisi gibi kullanıcı tarafından gönüllü girilen veriler</li>
      <li>IP adresi, tarayıcı türü ve oturum süresi gibi teknik veriler</li>
    </ul>

    <h2 className="text-xl font-semibold mt-8 mb-2">2. Verilerin Kullanımı</h2>
    <ul className="list-disc list-inside mb-4">
      <li>İçerik kalitesini artırmak ve istatistiksel analiz yapmak</li>
      <li>Kullanıcıya özel içerikler sunmak ve bildirimlerde bulunmak</li>
      <li>Anonimleştirilmiş şekilde veri paylaşımı ve raporlama</li>
    </ul>

    <h2 className="text-xl font-semibold mt-8 mb-2">3. Çerez Politikası</h2>
    <p className="mb-4">
      Internsy, kullanıcı deneyimini geliştirmek ve analiz yapmak amacıyla çerezleri (cookies) kullanır. Çerezler, sitemizi tekrar 
      ziyaret ettiğinizde sizi tanımamıza yardımcı olur ve tercihlerinizin hatırlanmasını sağlar. Tarayıcınızdan çerezleri
      devre dışı bırakabilirsiniz.
    </p>

    <h2 className="text-xl font-semibold mt-8 mb-2">4. Verilerin Korunması</h2>
    <p className="mb-4">
      Verileriniz şifreli sistemlerde saklanır. Üçüncü taraflarla yalnızca yasal zorunluluklar dahilinde paylaşılır. Güvenliğiniz için 
      şifrelerinizi kimseyle paylaşmamalısınız.
    </p>

    <h2 className="text-xl font-semibold mt-8 mb-2">5. Verilerin Silinmesi</h2>
    <p className="mb-4">
      Hesabınızı ve verilerinizi tamamen silmek isterseniz, lütfen kayıtlı e-posta adresinizle birlikte
      <a href="mailto:destek@internsy.com" className="text-primary underline">destek@internsy.com</a> adresine ulaşın.
    </p>

    <h2 className="text-xl font-semibold mt-8 mb-2">6. İletişim</h2>
    <p>
      Gizlilik politikamızla ilgili tüm soru, öneri ve geri bildirimleriniz için {" "} 
      <a href="/iletisim" className="text-primary underline">İletişim</a> sayfamızı ziyaret edebilirsiniz.
    </p>
  </section>

)
}
