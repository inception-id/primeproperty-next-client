import { Metadata } from "next";
import {
  Features,
  Hero,
  TermAndLocation,
  Support,
  Registration,
} from "./_components";
import { Cta } from "./_components/cta";

export const metadata: Metadata = {
  title: "Peluang Franchise - PRIMEPRO INDONESIA",
  description:
    "Kembangkan Bisnis Anda dengan Jaringan Properti Terkemuka di Indonesia",
};

const FranchisePage = () => {
  return (
    <div className="flex flex-col gap-8 p-4 lg:px-0">
      <Hero />
      <Features />
      <TermAndLocation />
      <Support />
      <Registration />
      <Cta />
    </div>
  );
};

export default FranchisePage;
