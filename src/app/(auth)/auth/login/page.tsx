import Link from "next/link";
import LoginForm from "@/app/(auth)/auth/login/_components/LoginForm";
import GoogleLoginBtn from "@/app/(auth)/auth/login/_components/google-login-button";

const LoginPage = () => {
    return (
        <main className="flex flex-col items-center justify-center h-screen px-4 lg:px-0">
            <h1 className="text-center mb-4">INCEPTION</h1>
            <div className="shadow-lg p-4 rounded-lg w-full max-w-sm">
                <h2 className="mb-4 font-bold">Sign in</h2>
                <LoginForm/>
                <div className="mb-4">
                    <span>Don&apos;t have an account?</span>
                    <Link href="/auth/register" className="underline ml-1">
                        Register
                    </Link>
                </div>
                <div className="flex items-center justify-center">
                    <GoogleLoginBtn />
                </div>
            </div>
        </main>
    );
};

export default LoginPage;
