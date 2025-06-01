"use client";

import { useState, useEffect } from "react";
import SignupModal from "@/components/SignupModel";
import { FaApple, FaGoogle, FaLinkedin } from "react-icons/fa";
import ContinueWithCard from "./ContinueWithCard";
import { Users, Lock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function ContinueWithSection() {
  const [email, setEmail] = useState("");
  const [step, setStep] = useState(0);
  const [showTermsModal, setShowTermsModal] = useState(false);
  const [showSignupModal, setShowSignupModal] = useState(false);

  const loginWithGoogle = () => {
    // Google ile giriş logic’i
  };

  const handleEmailContinue = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailRegex.test(email)) {
      setStep(1); // Geçerli email → bir sonraki adıma geç
    } else {
      alert("Geçerli bir email giriniz");
    }
  };

  // ESC tuşuna basıldığında modal’ı kapatmak için
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setShowTermsModal(false);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <div className="w-full overflow-hidden relative px-4 inset-0">
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${step * 100}%)` }}
      >
        {/** === 1. Adım: Sosyal Login + Email === */}
        <div className="min-w-full px-4 flex flex-col gap-y-2 justify-center items-center pt-4 pb-24 sm:pb-4">
          <p className="text-xs text-center text-black">
            Devam ederken{" "}
            <span
              className="underline text-primary font-bold cursor-pointer"
              onClick={() => setShowTermsModal(true)}
            >
              Kullanım ve Gizlilik Sözleşmesini
            </span>{" "}
            kabul etmiş olursunuz.
          </p>

          <ContinueWithCard name="LinkedIn" icon={<FaLinkedin size={24} />} />
          <ContinueWithCard name="Google" icon={<FaGoogle size={24} />} />
          <ContinueWithCard name="Apple" icon={<FaApple size={24} />} />

          <div className="flex gap-x-2 items-center w-full text-gray-600 my-2">
            <div className="border-t-[1px] border-gray-300 w-full"></div>
            <span className="text-sm py-1">veya</span>
            <div className="border-t-[1px] border-gray-300 w-full"></div>
          </div>

          <div className="flex flex-col w-full gap-y-2 mb-2">
            <label htmlFor="email" className="text-xs font-semibold">
              Email ile Giriş Yap
            </label>
            <input
              type="email"
              id="email"
              className="focus:ring-2 focus:ring-primary px-4 py-2 bg-transparent focus:outline-none w-full text-sm text-gray-800 placeholder:text-gray-500 border-[1px] border-gray-400 rounded-[8px]"
              placeholder="örnek@mail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <ContinueWithCard name="Email" onClick={handleEmailContinue} />
          <p className="text-sm text-gray-600 flex items-center gap-x-1 font-semibold">Hesabın yok mu? 
           <button
             onClick={() => setShowSignupModal(true)}
             className="text-primary underline font-bold"
           >
             Hemen Kayıt Ol
           </button>
         </p>
        </div>

        {/* === 2. Adım: Sonraki Section (şifre girme/kod ekranı vs) === */}
        <div className="min-w-full px-4 flex flex-col gap-y-1.5 items-center pt-4 pb-24">
          <h2 className="text-xl font-semibold mb-2">Internsy&apos;e Hoşgeldin</h2>
          <div className="flex flex-col gap-y-2 items-center justify-center text-sm w-full max-w-[500px]">
            <p>Sign in with your Google account as</p>
            <p><strong>{email}</strong></p>
          </div>

          <a href="" className="text-sm text-primary mb-6">Sign in with different email.</a>
          <ContinueWithCard name="Google" icon={<FaGoogle size={24}/>} onClick={() => {}} />
        </div>
      </div>
      {/** ===== CSS Kontrollü Modal ===== */}
      {showTermsModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
          <div className="bg-white rounded-lg max-w-md w-full mx-4 shadow-lg overflow-y-auto max-h-[80vh]">
            <div className="px-6 pt-6 pb-4 border-b border-gray-300">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-medium text-primary">Kullanım ve Gizlilik Sözleşmesi</h3>
                <button
                  className="p-2 rounded-md text-gray-500 hover:text-gray-700"
                  onClick={() => setShowTermsModal(false)}
                >
                  ✕
                </button>
              </div>
            </div>
            <div className="p-6 text-sm leading-relaxed text-gray-700">
              {/* Sözleşmenin uzun metni buraya gelecek */}
              <p>
                    <strong>Internsy Gizlilik ve Güvenlik Politikası</strong>
                  </p>

              <p className="mt-4">
                Internsy, kullanıcılarının güvenliğini ve gizliliğini en üst düzeyde korumayı ilke edinmiş bir staj platformudur.
                Platformumuzu ziyaret ederek, üyelik oluşturarak veya hizmetlerimizi kullanarak bu Gizlilik ve Güvenlik Politikası’nı kabul etmiş sayılırsınız.
              </p>

              <p className="mt-4">
                <strong>1. Kişisel Verilerin Toplanması ve Kullanımı:</strong> Internsy, yalnızca sizin onayınızla paylaştığınız ad, e-posta, üniversite,
                staj deneyimi gibi bilgileri toplar. Bu veriler, platform deneyimini kişiselleştirmek, içerikleri geliştirmek ve topluluk deneyimini iyileştirmek amacıyla kullanılır.
              </p>

              <p className="mt-4">
                <strong>2. Gizliliğinize Saygı:</strong> Internsy’de paylaştığınız bilgiler, anonimleştirilerek saklanır. Staj deneyimi, maaş bilgisi veya şirket yorumları gibi katkılarınızda
                kimliğiniz hiçbir koşulda diğer kullanıcılarla paylaşılmaz. Kendi isteğiniz dışında hiçbir kişisel bilgi üçüncü taraflarla paylaşılmaz.
              </p>

              <p className="mt-4">
                <strong>3. Çerez (Cookie) Kullanımı:</strong> Kullanıcı deneyimini iyileştirmek için çerezler kullanıyoruz. Bu çerezler tarayıcı ayarlarınızdan kontrol edilebilir veya devre dışı bırakılabilir.
                Ancak bazı fonksiyonlar çerezler olmadan tam olarak çalışmayabilir.
              </p>

              <p className="mt-4">
                <strong>4. Üçüncü Taraf Bağlantıları:</strong> Internsy, bazı bölümlerde üçüncü taraf sitelere bağlantılar içerebilir. Bu sitelerin gizlilik uygulamaları Internsy sorumluluğunda değildir.
              </p>

              <p className="mt-4">
                <strong>5. Hesap Güvenliği:</strong> Hesabınıza erişim yalnızca sizin belirlediğiniz e-posta ve şifre ile mümkündür. Şifrenizin güvenliği tamamen sizin sorumluluğunuzdadır.
                Şifrenizi kimseyle paylaşmamanız önemle tavsiye edilir.
              </p>

              <p className="mt-4">
                <strong>6. Verilerinizin Silinmesi:</strong> Kayıt olduğunuz e-posta adresiyle birlikte <a href="mailto:community@internsy.com" className="text-primary underline">community@internsy.com</a> adresine talep göndererek
                hesabınızı ve verilerinizi kalıcı olarak sildirebilirsiniz.
              </p>

              <p className="mt-4">
                <strong>7. Geri Bildirimler:</strong> Internsy’ye gönderdiğiniz öneri, yorum ve şikayetler, platform kalitesini geliştirmek için kullanılabilir.
                Kişisel bilgilerinizle eşleştirilmeden analiz edilir.
              </p>

              <p className="mt-4">
                <strong>8. Topluluk Katılımı ve Paylaşım Kuralları:</strong> Internsy, bir öğrenci platformudur. Bu nedenle tüm içeriklerde saygı, dürüstlük ve yapıcı yorumlar teşvik edilir.
                Sahte, saldırgan veya yanıltıcı içerikler platformdan kaldırılır ve üyelik askıya alınabilir.
              </p>

              <p className="mt-4">
                <strong>9. Değişiklik Hakkı:</strong> Internsy, bu metin üzerinde dilediği zaman değişiklik yapma hakkını saklı tutar.
                Güncel politikaya her zaman <a href="https://www.internsy.com/gizlilik-ve-guvenlik" className="text-primary underline">www.internsy.com/gizlilik-ve-guvenlik</a> adresinden ulaşabilirsiniz.
              </p>
              {/* İhtiyaca göre devam edin… */}
            </div>
            <div className="px-6 py-4 border-t border-gray-300 flex justify-end">
              <button
                onClick={() => setShowTermsModal(false)}
                className="text-sm px-4 py-2 rounded-md border bg-primary text-white border-gray-300 hover:bg-primary-light transition"
              >
                Kapat
              </button>
            </div>
          </div>
        </div>
      )}
      <SignupModal isOpen={showSignupModal} onClose={() => setShowSignupModal(false)} />
    </div>
  );
}
