"use client";
import { toast } from "react-toastify";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import { SUPERTOKENS_WRONG_CREDENTIALS } from "@/lib/supertokens/constant";
import { useRouter } from "next/navigation";
import { signinSupertokens } from "@/lib/supertokens/signinSupertokens";
import { findUser } from "@/lib/api/findUser";
import { createSupertokensSession } from "@/lib/supertokens/createSupertokensSession";
import { embedCookieToken } from "@/lib/supertokens/embedCookieToken";

const LoginForm = () => {
  const router = useRouter();

  const handleAction = async (formData: FormData) => {
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    const validEmailRegex = /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/g;
    if (!validEmailRegex.test(email)) {
      toast.error("Invalid email format");
      return;
    }

    try {
      const supertokens = await signinSupertokens(email, password);
      if (supertokens.status === SUPERTOKENS_WRONG_CREDENTIALS) {
        toast.error("Wrong email or password");
        return;
      }

      if (supertokens.status === "OK") {
        const user = await findUser(email);
        const token = await createSupertokensSession(
          supertokens.recipeUserId,
          user.data,
        );
        const cookieToken = await embedCookieToken(
          token.accessToken.token,
          token.refreshToken.token,
        );
        if (cookieToken.accessToken && cookieToken.refreshToken) {
          toast.success("Sign in successful, redirecting to account");
          setTimeout(() => router.push("/account"), 1000);
          return;
        }

        toast.error(user.message);
        return;
      }

      toast.error("Something went wrong, please try again.");
      return;
    } catch (e: any) {
      toast.error("Something went wrong, please try again.");
      console.error(e.message)
      return;
    }
  };

  return (
    <form action={handleAction} className="mb-4">
      <Label htmlFor="email">Email</Label>
      <Input
        type="email"
        id="email"
        name="email"
        placeholder="Email"
        required
        className="mb-4"
      />

      <Label htmlFor="password">Password</Label>
      <Input
        type="password"
        id="password"
        name="password"
        placeholder="Password"
        required
        className="mb-4"
      />

      <Button type="submit" className="w-full">
        Sign in
      </Button>
    </form>
  );
};

export default LoginForm;
