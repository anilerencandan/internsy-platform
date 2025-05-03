import ContinueWithCard from "@/components/ContinueWithCard";
import { MessageSquareText } from "lucide-react";
import { FaApple, FaGoogle, FaLinkedin } from "react-icons/fa";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <div className="flex flex-col ">
      
      <h1 className="text-[48px] text-center font-bold text-primary hidden lg:flex justify-center ">Your work people are here</h1>
        <div className="flex lg:flex-row flex-col gap-y-2">
        <img src="/images/landing-page-picture-1.svg" alt="Logo" className="w-full h-full object-contain flex lg:hidden" />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-y-6">
          <img src="/images/landing-page-picture-2.svg" alt="Logo" className="w-full h-full object-contain lg:flex hidden" />
          <h1 className="text-[28px] sm:text-[48px] text-center font-bold text-primary lg:hidden ">Your work people are here</h1>
          <div className="flex flex-col gap-y-2 justify-center items-center">
          
          {/* Giris Kartlari */}
          <div className="w-full px-4 flex flex-col gap-y-2 justify-center items-center pb-16">
            <p className="text-xs text-center black">Devam Ederken <a href="" className="underline text-primary font-bold">Kullanım Sözleşmesini</a> ve <a href="" className="underline text-primary font-bold">Gizlilik Sözleşmesini</a> Kabul Etmiş Olursunuz.</p>
            <ContinueWithCard name="LinkedIn" icon={<FaLinkedin size={24}/>} />
            <ContinueWithCard name="Google" icon={<FaGoogle size={24}/>} />
            <ContinueWithCard name="Apple" icon={<FaApple size={24}/>} />
            <div className="flex gap-x-2 items-center w-full text-gray-600">
              <div className="border-t-[1px] border-gray-300 w-full"></div>
              <span className="text-sm py-1">veya</span>
              <div className="border-t-[1px] border-gray-300 w-full"></div>
            </div>
            <div className="flex flex-col w-full gap-y-2 mb-2">
              <label htmlFor="" className="text-xs">Email ile Giriş Yap</label>
              <input type="email" name="" id="" className="px-4 py-2 bg-transparent focus:outline-none w-full text-sm text-gray-800 placeholder:text-gray-500  border-[1px] border-gray-400 rounded-[8px]"/>
            </div>
            <ContinueWithCard name="Email"/>
          </div>

          <div className="w-full border-t-[1px] border-gray-300"></div>

          {/* About us section */}
          <div className="flex flex-col gap-y-4 pt-10 justify-center items-center text-black ">
            <h2 className="text-2xl text-black font-semibold">Internsy ile Yolculuğa Çık</h2>
            <p className="text-center text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam labore eius doloribus praesentium cum sit at adipisci consequatur ullam quos.
            </p>
            <div className="w-full grid grid-cols-2 grid-rows-2 gap-4 py-6">
                {Array.from({ length: 4 }, (_, index) => (
                <div className="flex flex-col gap-y-2 items-center justify-center text-sm p-6">
                  <div className="p-3 border-[2px] border-black rounded-full "><MessageSquareText size={36} /></div>
                  <span className="text-center">İş Topluluklarına Katıl</span>
                </div>
              ))}
            </div>
          </div>
          
            <div className="w-full bg-[#f2f4f5] py-6 flex flex-col  justify-center items-center gap-y-6">
              <h2 className="text-2xl font-semibold">Aramanı Başlat</h2>
              <p className="text-center">Lorem ipsum dolor sit amet consectetur.</p>
            </div>

          </div>
          <img src="/images/landing-page-picture-3.svg" alt="Logo" className="w-full h-full object-contain lg:flex hidden" />
          
        </div>
      
        </div>
        
        
      </div>
    </div>
  );
}
