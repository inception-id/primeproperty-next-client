import { Metadata } from "next";
import DynamicTarsPage from "./[id]/page";
export const metadata: Metadata = {
  title: "TARS by Inception.id",
  description: "Your multi AI solution",
  keywords:
    "data processing, data visualization, data analytics, AI, Language AI, web application, mobile application",
};

export const revalidate = 0;

const TarsHomePage = () => {
  return <DynamicTarsPage />;
};

export default TarsHomePage;
