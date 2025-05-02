import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col w-full h-screen">
      <div className="flex flex-col ">
      
      <h1 className="text-[48px] text-center font-bold text-primary hidden lg:flex justify-center ">Your work people are here</h1>
        <div className="flex lg:flex-row flex-col ">
        <img src="/images/landing-page-picture-1.svg" alt="Logo" className="w-full h-full object-contain flex lg:hidden" />
        <div className="grid grid-cols-1 lg:grid-cols-3">
          <img src="/images/landing-page-picture-2.svg" alt="Logo" className="w-full h-full object-contain lg:flex hidden" />
          <h1 className="text-[28px] sm:text-[48px] text-center font-bold text-primary lg:hidden ">Your work people are here</h1>
          <div className="flex flex-col gap-y-2 justify-center items-center">
            <div>google</div>
            <div>apple</div>
            <div>or</div>
            <div>email</div>
            <div>continue with email</div>
          </div>
          <img src="/images/landing-page-picture-3.svg" alt="Logo" className="w-full h-full object-contain lg:flex hidden" />
          
        </div>
      
        </div>
        
        
      </div>
    </div>
  );
}
