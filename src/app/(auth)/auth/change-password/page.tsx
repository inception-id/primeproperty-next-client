import {
  Card,
  CardTitle,
  CardHeader,
  CardContent,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import Link from "next/link";
import { LuArrowLeft } from "react-icons/lu";
import { SendEmailForm } from "../forgot-password/_components/send-email-form";

const ChangePasswordPage = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Change Password</CardTitle>
          <CardDescription>
            Enter your email address and we&apos;ll send you a link to reset
            your password
          </CardDescription>
        </CardHeader>
        <CardContent>
          <SendEmailForm />
        </CardContent>
        <CardFooter>
          <Link
            href="/account"
            className="flex items-center gap-2 underline underline-offset-4 text-sm"
          >
            <LuArrowLeft />
            Back to Account
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
};

export default ChangePasswordPage;
