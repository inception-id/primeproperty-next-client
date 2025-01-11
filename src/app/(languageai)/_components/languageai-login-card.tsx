"use client";
import LoginCard from "@/app/(auth)/auth/login/_components/login-card";
import { useRouter } from "next/navigation";

const LanguageaiLoginCard = () => {
  const router = useRouter();
  return (
    <div className="p-4 flex items-center justify-center w-full h-screen">
      <LoginCard
        onSuccess={() => router.refresh()}
        title="Sign in to continue"
      />
    </div>
  );
};

export default LanguageaiLoginCard;
