"use client";
import LoginCard from "@/app/(auth)/auth/login/_components/login-card";

const LoginPage = () => {
  return (
    <main className="flex flex-col items-center justify-center h-screen px-4 lg:px-0">
      <h1 className="text-center mb-4">INCEPTION</h1>
      <LoginCard onSuccess={() => (window.location.href = "/account")} />
    </main>
  );
};

export default LoginPage;
