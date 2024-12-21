import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { LuArrowLeft } from "react-icons/lu";

const ForgotPasswordPage = () => {
  return (
    <main className="flex flex-col items-center justify-center h-screen px-4 lg:px-0">
      <h1 className="text-center mb-4">INCEPTION</h1>
      <div className="shadow-lg p-4 rounded-lg w-full max-w-sm">
        <h2 className="mb-4 font-bold">Forgot Password</h2>
        <ol className="space-y-2 list-decimal ml-4 mb-4">
          <li>
            Email the system admin at{" "}
            <span className="underline">winatastanley355@gmail.com</span>
          </li>
          <li>
            Please{" "}
            <span className="underline">
              use your registered email account{" "}
            </span>
            with subject &quot;Reset password&quot;.
          </li>
          <li>
            System admin will reply with a new password and please{" "}
            <span className="underline">change your password after login</span>.
          </li>
          <li>
            We don&apos;t to use automatic password reset due to security
            reasons, and by sending us an email,{" "}
            <span className="underline">we can know that it&apos;s you! </span>{" "}
          </li>
        </ol>
        <Link
          href="/auth/login"
          className={buttonVariants({ variant: "link" })}
        >
          <LuArrowLeft />
          <span>Back to login</span>
        </Link>
      </div>
    </main>
  );
};

export default ForgotPasswordPage;
