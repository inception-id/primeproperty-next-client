import {
  HeroSection,
  RegistrationSection,
  Requirements,
  SupportSection,
  WhyUs,
  CTASection,
} from "./_components";

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
