import { Metadata } from "next";
import {
  HeroSection,
  RegistrationSection,
  Requirements,
  SupportSection,
  WhyUs,
  CTASection,
} from "./_components";

export const metadata: Metadata = {
  title: "Peluang Franchise - PRIMEPRO INDONESIA",
  description:
    "Kembangkan Bisnis Anda dengan Jaringan Properti Terkemuka di Indonesia",
};

const FranchisePage = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <HeroSection />
      <WhyUs />
      <Requirements />
      <SupportSection />
      <RegistrationSection />
      <CTASection />
    </div>
  );
};

export default FranchisePage;
