"use client";
import Link from "next/link";
import GoogleAuthButton from "@/app/(auth)/auth/login/_components/google-auth-button";
import LoginForm from "@/app/(auth)/auth/login/_components/LoginForm";
import { useRouter } from "next/navigation";

const TarsSidebarLogin = () => {
  const router = useRouter();
  return (
    <div className="pl-4 md:px-2 w-full flex flex-col gap-4">
      <div className="text-center">Login to continue</div>
      <LoginForm onSuccess={() => router.refresh()} />
      <div className="flex items-center justify-center">
        <GoogleAuthButton onSuccess={() => router.refresh()} />
      </div>
      <div className="text-xs hidden md:block">
        <span>No account?</span>
        <Link href="/auth/register" className="underline ml-1">
          Register
        </Link>
      </div>
    </div>
  );
};

export default TarsSidebarLogin;
