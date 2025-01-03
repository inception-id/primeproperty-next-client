import Link from "next/link";
import LoginForm from "@/app/(auth)/auth/login/_components/LoginForm";
import GoogleAuthButton from "@/app/(auth)/auth/login/_components/google-auth-button";
import { cn } from "@/lib/utils";

type TLoginCardProps = {
  className?: string;
  onSuccess: () => void;
  title?: string;
};

const LoginCard = ({ className, onSuccess, title }: TLoginCardProps) => {
  return (
    <div className={cn("shadow-lg p-4 rounded-lg w-full max-w-sm", className)}>
      <h2 className="mb-4 font-bold">{title || "Sign in"}</h2>
      <LoginForm onSuccess={onSuccess} />
      <div className="mb-4">
        <span>Don&apos;t have an account?</span>
        <Link href="/auth/register" className="underline ml-1">
          Register
        </Link>
      </div>
      <div className="flex items-center justify-center">
        <GoogleAuthButton onSuccess={onSuccess} />
      </div>
    </div>
  );
};

export default LoginCard;
