import PoSBenefits from "@/components/benefits/pos";
import WhatsAppBenfits from "@/components/benefits/whatsapp";
import ApplicationFooter from "@/components/footer";
import ApplicationHero from "@/components/hero";
import HowitWorks from "@/components/how-it-works";
import ApplicationNavigation from "@/components/navigation";
import SDKBenefits from "@/components/benefits/sdk";
import { Toaster } from "react-hot-toast";

export default function Home() {
  return (
    <div>
      <Toaster />
      <ApplicationNavigation />
      <ApplicationHero />
      <PoSBenefits />
      <WhatsAppBenfits />
      <SDKBenefits />
      <HowitWorks />
      <ApplicationFooter />
    </div>
  );
}
