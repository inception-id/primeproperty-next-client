import { Metadata } from "next";
import LoginDialog from "../(auth)/auth/login/_components/login-dialog";
import TarsHeader from "./tars/[id]/_header/tars-header";

export const metadata: Metadata = {
  title: "TARS by Inception.id",
  description:
    "Free Multimodel AI (No free trial, No subscription, No payment required)",
  keywords:
    "data processing, data visualization, data analytics, AI, OpenAI, Deepseek, Gemini, Claude",
};

type TarsLayoutProps = {
  children: React.ReactNode;
};

const TarsLayout = ({ children }: TarsLayoutProps) => {
  return (
    <div className="h-screen flex flex-col overflow-hidden">
      <LoginDialog />
      <TarsHeader />
      {children}
    </div>
  );
};

export default TarsLayout;
