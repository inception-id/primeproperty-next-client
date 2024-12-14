import SplashScreen from "@/components/custom-ui/SplashScreen";
import {cookies} from "next/headers";

const Home = async ()  => {
  const splashCookie = cookies().get("show-splash")?.value;
  return (
      <main>
        {!splashCookie && <SplashScreen />}
        hi
      </main>
  );
}

export default Home
