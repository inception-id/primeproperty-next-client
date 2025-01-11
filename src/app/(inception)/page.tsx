import { cookies } from "next/headers";
import SplashScreen from "@/app/(inception)/_components/SplashScreen";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { GithubGlobe } from "@/components/custom-ui/github-globe";
import HomeTellYourIdeasSection from "@/app/(inception)/_components/HomeTellYourIdeasSection";

const Home = async () => {
  const cookieStore = await cookies();
  const splashCookie = cookieStore.get("show-splash")?.value;
  return (
    <section>
      {!splashCookie && <SplashScreen />}
      <div className="h-screen flex flex-col items-center justify-center px-4 lg:px-0">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mb-4 text-center">
          &quot;We bring your ideas to life&quot;
        </h1>
        <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight text-center mb-4">
          INCEPTION.ID
        </h2>
        <Link
          href="/#ihaveanidea"
          className={buttonVariants({ variant: "default" })}
        >
          I have an idea
        </Link>
      </div>
      <div
        className="lg:h-screen p-4 py-16 lg:px-0 bg-primary text-primary-foreground"
        id="ihaveanidea"
      >
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mb-4 text-center ">
          We are the expert of web technology
        </h1>
        <div className="grid  w-full h-full lg:grid-cols-2 place-items-center">
          <div className="w-full h-96 lg:h-full">
            <GithubGlobe />
          </div>
          <div className="px-4 text-2xl">
            Inception.id is data processing, visualization, and analytics
            company that delivers high-quality web application on demand based
            on your requested IDEAS and features.
          </div>
        </div>
      </div>
      <HomeTellYourIdeasSection />
    </section>
  );
};

export default Home;
