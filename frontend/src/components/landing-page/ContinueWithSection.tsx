'use client'
import { useState } from "react";
import { FaApple, FaGoogle, FaLinkedin } from "react-icons/fa";
import ContinueWithCard from "./ContinueWithCard";

export default function ContinueWithSection() {
  const [email, setEmail] = useState("");
  const [step, setStep] = useState(0);

  const handleEmailContinue = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailRegex.test(email)) {
      setStep(1); // geçerli email → ileri geç
    } else {
      alert("Geçerli bir email gir");
    }
  };

  return (
    <div className="w-full overflow-hidden relative px-4 inset-0 ">
      <div
        className={`flex transition-transform duration-500 ease-in-out`}
        style={{ transform: `translateX(-${step * 100}%)` }}
      >
        {/* === 1. Adım: Sosyal Login + Email === */}
        <div className="min-w-full px-4 flex flex-col gap-y-2 justify-center items-center pt-4 pb-24 sm:pb-4">
          <p className="text-xs text-center text-black">
            Devam Ederken{" "}
            <a href="" className="underline text-primary font-bold">
              Kullanım Sözleşmesini
            </a>{" "}
            ve{" "}
            <a href="" className="underline text-primary font-bold">
              Gizlilik Sözleşmesini
            </a>{" "}
            Kabul Etmiş Olursunuz.
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
            <label htmlFor="email" className="text-xs">
              Email ile Giriş Yap
            </label>
            <input
              type="email"
              id="email"
              className="focus:ring-2 focus:ring-primary px-4 py-2 bg-transparent focus:outline-none w-full text-sm text-gray-800 placeholder:text-gray-500 border-[1px] border-gray-400 rounded-[8px]"
              placeholder="ornek@mail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <ContinueWithCard name="Email" onClick={handleEmailContinue} />
          <p className="text-sm text-gray-600 flex items-center gap-x-1">Hesabın yok mu? 
           <a href="/signup" className="text-primary underline">Hemen Kayit Ol</a></p>  
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
    </div>
  );
}
