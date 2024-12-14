import { cookies } from "next/headers";
import SplashScreen from "@/app/home/_components/SplashScreen";
import HomeHeader from "@/app/home/_components/Header";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";

const Home = async () => {
  const splashCookie = cookies().get("show-splash")?.value;
  return (
    <main>
      {!splashCookie && <SplashScreen />}
      <HomeHeader />
      <div className="h-screen flex flex-col items-center justify-center px-4 lg:px-0">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mb-4 text-center">
          &quot;We bring your ideas into life&quot;
        </h1>
        <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight text-center mb-4">
          INCEPTION.ID
        </h2>
        <Link
          href="/#tellmemore"
          className={buttonVariants({ variant: "default" })}
        >
          I have an idea
        </Link>
      </div>
    </main>
  );
};

export default Home;
