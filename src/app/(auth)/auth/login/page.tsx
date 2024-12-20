import Link from "next/link";
import LoginForm from "@/app/(auth)/auth/login/_components/LoginForm";

const LoginPage = () =>{
    return (
    <main className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-center mb-4">INCEPTION</h1>
        <div className="shadow-lg p-4 rounded-lg w-full max-w-sm">
            <h2 className="mb-4 font-bold">Sign in</h2>
            <LoginForm />
            <div>
                <span>Don&apos;t have an account?</span>
                <Link href="/auth/register" className="underline ml-1">
                    Register
                </Link>
            </div>
        </div>
    </main>
    )
};

export default LoginPage;