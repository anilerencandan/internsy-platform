import AboutUsSection from "@/components/landing-page/AboutUsSection";
import ContinueWithSection from "@/components/landing-page/ContinueWithSection";
import StartYourSearchSection from "@/components/landing-page/StartYourSearchSection";
import { createClient } from "@/utils/supabase/server";


export default async function LandingPage() {

  const supabase = await createClient();

  try {
    // Get the logged-in user
    const { data: auth, error: authError } = await supabase.auth.getUser();
    if (authError) throw authError;

    const userId = auth?.user?.id;
    if (!userId) {
      console.log("No user is logged in.");
      return;
    }

    // Fetch user profile
    const { data: profile, error: profileError } = await supabase
      .from("users")
      .select("*")
      .eq("id", userId)
      .single();

    if (profileError) throw profileError;

    // Success
    console.log("User profile:", profile);

  } catch (err) {
    console.error("Supabase error:", err);
  }


  return (
    <div className="flex flex-col items-center ">
      <div className="flex flex-col">
        <img src="/images/landing-page-picture-1.svg" alt="landing-page-picture-1" className="flex lg:hidden "/>
        <h1 className="text-3xl sm:text-5xl font-bold text-primary p-4 text-center lg:pt-12 lg:pb-8">Staj mı? Merak etme, buradayız.</h1>
      </div>
      
      <div className="flex items-center max-w-[1280px] mx-auto lg:pb-8">
        {/* Sol resim */}
        <div className="flex-1 hidden lg:flex justify-center">
          <img
            src="/images/landing-page-picture-2.svg"
            alt="landing-page-picture-2"
            className="max-w-[80%] h-auto object-contain"
          />
        </div>

        {/* Sabit genişlikte orta kısım */}
        <div className="sm:w-[480px] sm:min-w-[480px] sm:max-w-[480px] w-full flex items-center justify-center max-w-[1280px] mx-auto">
          <ContinueWithSection />
        </div>



        {/* Sağ resim */}
        <div className="flex-1 hidden lg:flex justify-center">
          <img
            src="/images/landing-page-picture-3.svg"
            alt="landing-page-picture-3"
            className="max-w-[80%] h-auto object-contain"
          />
        </div>
      </div>


            <div className="border-t-[1px] border-gray-300 w-full"></div>


      <StartYourSearchSection />
    </div>
  );
}
