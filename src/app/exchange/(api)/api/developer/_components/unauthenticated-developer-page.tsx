"use client";
import LoginCard from "@/app/(auth)/auth/login/_components/login-card";
import { TypographyLead } from "@/components/ui/typography/lead";
import { useRouter } from "next/navigation";

export const UnauthenticatedDeveloperPage = () => {
  const router = useRouter();
  return (
    <div>
      <TypographyLead className="mb-4">
        Indonesia Stock Exchange API
      </TypographyLead>
      <LoginCard
        title="Developer Sign In"
        className="shadow-none p-0"
        onSuccess={() => router.refresh()}
      />
    </div>
  );
};
