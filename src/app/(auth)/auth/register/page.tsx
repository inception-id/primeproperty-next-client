"use client";
import Link from "next/link";
import RegisterForm from "@/app/(auth)/auth/register/_components/RegisterForm";
import GoogleAuthButton from "@/app/(auth)/auth/login/_components/google-auth-button";

const Register = () => {
  return (
    <main className="flex flex-col items-center justify-center h-screen px-4 lg:px-0">
      <h1 className="text-center mb-4">INCEPTION</h1>
      <div className="shadow-lg p-4 rounded-lg w-full max-w-sm">
        <h2 className="mb-4 font-bold">Sign up</h2>
        <RegisterForm />
        <div className="mb-4">
          <span>Have an account?</span>
          <Link href="/auth/login" className="underline ml-1">
            Login
          </Link>
        </div>
        <div className="flex items-center justify-center">
          <GoogleAuthButton onSuccess={() => window.location.href = "/account"} />
        </div>
      </div>
    </main>
  );
};

export default Register;
