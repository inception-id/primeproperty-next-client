import Link from "next/link";
import TarsHero from "./_components/tars-hero";
import TarsHomeForm from "./_components/tars-home-form";

const TarsHomePage = () => {
  return (
    <div className="flex-1 h-full p-2 md:px-0  flex flex-col gap-2 items-center justify-center">
      <TarsHero />
      <TarsHomeForm />
      <div className="text-xs text-center">
        For issues/questions, contact{" "}
        <Link className="underline font-semibold" href="/support">
          support
        </Link>{" "}
        directly
      </div>
    </div>
  );
};

export default TarsHomePage;
