import AboutUsSection from "@/components/landing-page/AboutUsSection";
import ContinueWithSection from "@/components/landing-page/ContinueWithSection";
import StartYourSearchSection from "@/components/landing-page/StartYourSearchSection";
import { MessageSquareText } from "lucide-react";
import { FaApple, FaGoogle, FaLinkedin } from "react-icons/fa";

export default function LandingPage() {
  return (
    <div className="page">
      <img src="/images/landing-page-picture-1.svg" alt="landing-page-picture-1" className="py-4"/>
      <h1 className="text-3xl font-bold text-primary py-4 text-center">Staj mı? Merak etme, buradayız.</h1>
      
      <ContinueWithSection />

      <AboutUsSection />

      <StartYourSearchSection />
    </div>
  );
}
