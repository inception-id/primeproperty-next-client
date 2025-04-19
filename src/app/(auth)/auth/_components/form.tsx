"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { findAgentBySupertokensId } from "@/lib/api/agents/find-agent-by-supertokens-id";
import { createTokenCookie } from "@/lib/cookie/create-token-cookie";
import { createSupertokensSession } from "@/lib/supertokens/create-supertokens-session";
import { signinSupertokens } from "@/lib/supertokens/signin-supertokens";
import { toast } from "react-toastify";
import { z } from "zod";
import { useStore } from "../_stores/useStore";
import { LuLoader } from "react-icons/lu";
import { useRouter } from "next/navigation";

export const LoginForm = () => {
  const router = useRouter();
  const { isLoading, setLoading } = useStore();
  const handleAction = async (formData: FormData) => {
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    try {
      const isEmailValid = z.string().email().safeParse(email);
      if (!isEmailValid.success) {
        toast.error("Invalid email");
        return;
      }

      setLoading();
      const supertokensSignin = await signinSupertokens(email, password);
      if (supertokensSignin.status !== "OK") {
        toast.error("Invalid email or password");
        return;
      }
      const agent = await findAgentBySupertokensId(supertokensSignin.user.id);
      if (!agent.data) {
        toast.error("Agent not found");
        return;
      }

      const session = await createSupertokensSession(
        supertokensSignin?.user.id,
        agent.data,
      );
      if (session.status !== "OK") {
        toast.error("Server error, please try again later");
        return;
      }

      const accessToken = session.accessToken.token;
      const refreshToken = session.refreshToken.token;
      const cookieTokens = await createTokenCookie(accessToken, refreshToken);
      if (cookieTokens.accessToken && cookieTokens.refreshToken) {
        toast.success("Login successful");
        router.push("/");
        return;
      }

      toast.error("Server error, please try again later");
    } catch (error) {
      console.error("Error:", error);
      toast.error("Server error, please try again later");
    } finally {
      setLoading();
    }
  };

  return (
    <form
      action={handleAction}
      className="flex flex-col gap-4 w-full max-w-md p-4"
    >
      <div className="grid gap-2">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          type="email"
          name="email"
          placeholder="email@primeproindonesia.com"
          required
        />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="password">Password</Label>
        <Input
          id="password"
          type="password"
          name="password"
          placeholder="******"
          required
        />
      </div>
      <Button type="submit" className="w-full" disabled={isLoading}>
        {isLoading ? (
          <span className="flex items-center gap-2">
            <LuLoader className="animate-spin" />
            Loading your surprises...
          </span>
        ) : (
          "Let's Go"
        )}
      </Button>
    </form>
  );
};
