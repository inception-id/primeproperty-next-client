import Link from "next/link";
import RegisterForm from "@/app/(auth)/auth/register/_components/RegisterForm";

const Register = () => {
    return (
        <main className="flex flex-col items-center justify-center h-screen ">

            <h1 className="text-center mb-4">INCEPTION</h1>
            <div className="shadow-lg p-4 rounded-lg">
                <h2 className="mb-4 font-bold">Sign up</h2>
                <RegisterForm />
                <div>
                    <span>Have an account?</span>
                    <Link href="/auth/login" className="underline ml-1">Login</Link>
                </div>
            </div>
        </main>
    )
};

export default Register;