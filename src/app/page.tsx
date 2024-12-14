import SplashScreen from "@/app/home/_components/SplashScreen";
import { cookies } from "next/headers";
import HomeHeader from "@/app/home/_components/Header";

const Home = async () => {
  const splashCookie = cookies().get("show-splash")?.value;
  return (
    <main>
      {!splashCookie && <SplashScreen />}
        <HomeHeader />
    </main>
  );
};

export default Home;
