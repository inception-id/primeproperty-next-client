import Link from "next/link";
import { LuGalleryVerticalEnd } from "react-icons/lu";
import { LoginForm } from "./_components";

const LoginPage = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center container mx-auto">
      <div className="flex flex-col items-center gap-2">
        <LuGalleryVerticalEnd className="size-6" />
        <h1 className="text-xl font-bold">Welcome to Primepro Indonesia</h1>
        <div className="text-center text-sm">
          Don&apos;t have an account?{" "}
          <Link href="/be-an-agent" className="underline underline-offset-4">
            Contact here
          </Link>
        </div>
      </div>
      <LoginForm />

      <Link
        href="/auth/forgot-password"
        className="underline underline-offset-4 text-xs"
      >
        I forgot my password
      </Link>
    </div>
  );
};

export default LoginPage;
