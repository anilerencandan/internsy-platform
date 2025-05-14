"use client"

import { useState } from "react"
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react"
// import { contactFormAction } from "@/app/bize-ulasin/actions"

export default function BizeUlasinPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState<string | null>(null)


  //   try {
  //     await contactFormAction(formData)
  //     setIsSuccess(true)
  //     // Form alanlarını temizle
  //     const form = document.getElementById("contact-form") as HTMLFormElement
  //     form.reset()
  //   } catch (err) {
  //     setError("Formunuz gönderilirken bir hata oluştu. Lütfen daha sonra tekrar deneyin.")
  //     console.error(err)
  //   } finally {
  //     setIsSubmitting(false)
  //   }
  // }

  return (
    <div className="page-content mx-auto px-4 py-12">
      <div className="p mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-blue-600 mb-8">Bize Ulaşın</h1>

        <p className="text-lg text-center text-gray-600 mb-12">
          Sorularınız, önerileriniz veya işbirliği talepleriniz için bizimle iletişime geçebilirsiniz. En kısa sürede
          size dönüş yapacağız.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-white shadow-md rounded-xl p-6 flex flex-col items-center text-center">
            <div className="bg-blue-100 p-3 rounded-full mb-4">
              <Mail className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="font-semibold text-lg mb-2">E-posta</h3>
            <p className="text-gray-600 mb-2">Sorularınız için</p>
            <a href="mailto:info@internsy.com" className="text-blue-600 hover:underline">
              info@internsy.com
            </a>
          </div>

          <div className="bg-white shadow-md rounded-xl p-6 flex flex-col items-center text-center">
            <div className="bg-blue-100 p-3 rounded-full mb-4">
              <Phone className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="font-semibold text-lg mb-2">Telefon</h3>
            <p className="text-gray-600 mb-2">Pazartesi - Cuma: 09:00 - 18:00</p>
            <a href="tel:+902121234567" className="text-blue-600 hover:underline">
              +90 (212) 123 45 67
            </a>
          </div>

          <div className="bg-white shadow-md rounded-xl p-6 flex flex-col items-center text-center">
            <div className="bg-blue-100 p-3 rounded-full mb-4">
              <MapPin className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="font-semibold text-lg mb-2">Adres</h3>
            <p className="text-gray-600 mb-2">Ofisimizi ziyaret edin</p>
            <address className="text-blue-600 not-italic">Levent, 34330 Beşiktaş/İstanbul</address>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">İletişim Formu</h2>

            {isSuccess ? (
              <div className="bg-green-50 border border-green-200 rounded-lg p-6 flex items-start">
                <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-green-800 mb-1">Mesajınız başarıyla gönderildi!</h3>
                  <p className="text-green-700">
                    İletişim talebiniz için teşekkür ederiz. En kısa sürede size dönüş yapacağız.
                  </p>
                </div>
              </div>
            ) : (
              <form id="contact-form"  className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                      Ad <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Adınız"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                      Soyad <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Soyadınız"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    E-posta <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="ornek@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Konu <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="">Konu Seçin</option>
                    <option value="Genel Sorular">Genel Sorular</option>
                    <option value="İş Birliği">İş Birliği</option>
                    <option value="Teknik Destek">Teknik Destek</option>
                    <option value="Şikayet">Şikayet</option>
                    <option value="Diğer">Diğer</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Mesaj <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Mesajınızı buraya yazın..."
                  ></textarea>
                </div>

                <div className="flex items-start">
                  <input type="checkbox" id="privacy" name="privacy" required className="mt-1 mr-2" />
                  <label htmlFor="privacy" className="text-sm text-gray-700">
                    <span className="text-red-500">*</span> Kişisel verilerimin işlenmesine ilişkin{" "}
                    <a href="/gizlilik-politikasi" className="text-blue-600 hover:underline">
                      Gizlilik Politikası
                    </a>
                    'nı okudum ve kabul ediyorum.
                  </label>
                </div>

                {error && (
                  <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-md">{error}</div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-md transition duration-300 flex items-center"
                >
                  {isSubmitting ? (
                    <>
                      <svg
                        className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Gönderiliyor...
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4 mr-2" />
                      Gönder
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Bizi Ziyaret Edin</h2>
            <div className="bg-gray-200 rounded-xl overflow-hidden h-[400px] w-full">
              {/* Harita için iframe kullanımı */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12037.552145089424!2d29.00053971109654!3d41.08140232532063!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab63f6f8f8d65%3A0x7f3b63ede5f8d8cc!2sLevent%2C%20Be%C5%9Fikta%C5%9F%2F%C4%B0stanbul!5e0!3m2!1str!2str!4v1715731941000!5m2!1str!2str"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Internsy Ofis Konumu"
              ></iframe>
            </div>

            <div className="mt-8">
              <h3 className="font-semibold text-lg mb-4">Sosyal Medyada Bizi Takip Edin</h3>
              <div className="flex space-x-4">
                <a
                  href="https://twitter.com/internsy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-100 hover:bg-gray-200 p-3 rounded-full transition duration-300"
                  aria-label="Twitter"
                >
                  <svg className="h-5 w-5 text-gray-700" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/company/internsy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-100 hover:bg-gray-200 p-3 rounded-full transition duration-300"
                  aria-label="LinkedIn"
                >
                  <svg className="h-5 w-5 text-gray-700" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com/internsy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-100 hover:bg-gray-200 p-3 rounded-full transition duration-300"
                  aria-label="Instagram"
                >
                  <svg className="h-5 w-5 text-gray-700" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                  </svg>
                </a>
                <a
                  href="https://www.youtube.com/channel/internsy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-100 hover:bg-gray-200 p-3 rounded-full transition duration-300"
                  aria-label="YouTube"
                >
                  <svg className="h-5 w-5 text-gray-700" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-blue-50 p-8 rounded-xl text-center">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Sık Sorulan Sorular</h2>
          <p className="text-gray-700 mb-6">
            Sorularınızın cevaplarını SSS sayfamızda bulabilirsiniz. Eğer aradığınız cevabı bulamazsanız, lütfen bizimle
            iletişime geçmekten çekinmeyin.
          </p>
          <a
            href="/sikca-sorulan-sorular"
            className="bg-white border border-blue-600 text-blue-600 hover:bg-blue-50 font-medium py-2 px-6 rounded-md transition duration-300"
          >
            SSS Sayfasına Git
          </a>
        </div>
      </div>
    </div>
  )
}
