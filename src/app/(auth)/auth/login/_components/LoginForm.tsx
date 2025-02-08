"use client";
import Link from "next/link";
import { toast } from "react-toastify";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import { SUPERTOKENS_WRONG_CREDENTIALS } from "@/lib/supertokens/constant";
import { signinSupertokens } from "@/lib/supertokens/signinSupertokens";
import { findUser } from "@/lib/api/findUser";
import { createSupertokensSession } from "@/lib/supertokens/createSupertokensSession";
import { embedCookieToken } from "@/lib/supertokens/embedCookieToken";
import { sendVerificationEmail } from "@/lib/mail/send-verification-email";
import { useLoginStore } from "@/app/(auth)/auth/login/_lib/useLoginStore";
import { useShallow } from "zustand/react/shallow";
import { LuLoader } from "react-icons/lu";
import LoginEmailInput from "@/app/(auth)/auth/login/_components/login-email-input";
import { Suspense } from "react";

type TLoginFormProps = {
  onSuccess: () => void;
};

const LoginForm = ({ onSuccess }: TLoginFormProps) => {
  const { isLoading, updateStore } = useLoginStore(
    useShallow((state) => ({
      isLoading: state.isLoading,
      updateStore: state.updateStore,
    })),
  );

  const handleAction = async (formData: FormData) => {
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    const validEmailRegex = /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/g;
    if (!validEmailRegex.test(email)) {
      toast.error("Invalid email format");
      return;
    }

    updateStore("isLoading", true);
    try {
      const supertokens = await signinSupertokens(email, password);
      if (supertokens.status === SUPERTOKENS_WRONG_CREDENTIALS) {
        toast.error("Wrong email or password");
        return;
      }

      if (!supertokens.user.loginMethods[0].verified) {
        const info = await sendVerificationEmail(
          supertokens.user.id,
          supertokens.user.emails[0],
        );
        toast.warning(
          `Email is not verified, please check your email at ${info.accepted[0]} for verification`,
        );
        return;
      }

      const user = await findUser(supertokens.user.emails[0]);
      const token = await createSupertokensSession(
        supertokens.recipeUserId,
        user.data,
      );
      const cookieToken = await embedCookieToken(
        token.accessToken.token,
        token.refreshToken.token,
      );
      if (cookieToken.accessToken && cookieToken.refreshToken) {
        toast.success("Sign in successful");
        onSuccess();
        return;
      }
    } catch (e: any) {
      toast.error("Fail to login, please try again.");
      console.error(e.message);
    } finally {
      updateStore("isLoading", false);
    }
  };

  return (
    <form action={handleAction} className="mb-2">
      <Suspense>
        <LoginEmailInput />
      </Suspense>

      <div className="flex items-center justify-between">
        <Label htmlFor="password">Password</Label>
        <Link href="/auth/forgot-password" className="underline text-sm">
          forgot password
        </Link>
      </div>
      <Input
        type="password"
        id="password"
        name="password"
        placeholder="Password"
        required
        className="mb-4"
      />

      <Button type="submit" className="w-full" disabled={isLoading}>
        {isLoading ? <LuLoader className="animate-spin" /> : "Sign in"}
      </Button>
    </form>
  );
};

export default LoginForm;
