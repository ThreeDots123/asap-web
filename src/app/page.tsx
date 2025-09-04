import BusinessBenefits from "@/components/benefits/business";
import IndividualBenfits from "@/components/benefits/individual";
import ApplicationFooter from "@/components/footer";
import ApplicationHero from "@/components/hero";
import HowitWorks from "@/components/how-it-works";
import ApplicationNavigation from "@/components/navigation";

export default function Home() {
  return (
    <div>
      <ApplicationNavigation />
      <ApplicationHero />
      <IndividualBenfits />
      <BusinessBenefits />
      <HowitWorks />
      <ApplicationFooter />
    </div>
  );
}
