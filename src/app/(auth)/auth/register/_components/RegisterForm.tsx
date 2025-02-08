"use client";
import { toast } from "react-toastify";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import { signupSupertokens } from "@/lib/supertokens/signupSupertokens";
import { createUser } from "@/lib/api/createUser";
import { SUPERTOKENS_EMAIL_ALREADY_EXIST } from "@/lib/supertokens/constant";
import { useRouter } from "next/navigation";
import { sendVerificationEmail } from "@/lib/mail/send-verification-email";
import { useLoginStore } from "@/app/(auth)/auth/login/_lib/useLoginStore";
import { useShallow } from "zustand/react/shallow";
import { LuLoader } from "react-icons/lu";

const RegisterForm = () => {
  const router = useRouter();
  const { isLoading, updateStore } = useLoginStore(
    useShallow((state) => ({
      isLoading: state.isLoading,
      updateStore: state.updateStore,
    })),
  );

  const handleAction = async (formData: FormData) => {
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const repassword = formData.get("repassword") as string;

    const validEmailRegex = /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/g;
    if (!validEmailRegex.test(email)) {
      toast.error("Invalid email format");
      return;
    }

    if (password !== repassword) {
      toast.error("Password is not the same as re-typed password");
      return;
    }

    updateStore("isLoading", true);
    try {
      const supertokens = await signupSupertokens(email, password);
      if (supertokens.status === SUPERTOKENS_EMAIL_ALREADY_EXIST) {
        toast.error("Email already exist, please login to continue");
        return;
      }

      const user = await createUser(supertokens.recipeUserId, email);
      const smtp = await sendVerificationEmail(
        supertokens.user.id,
        user.data.email,
      );
      toast.success(
        `Sign up successful, please check your email at ${smtp.accepted[0]} for verification`,
      );
      router.push("/auth/login");
      return;
    } catch (e: any) {
      toast.error("Registration fail, please try again.");
      console.error(e.message);
    } finally {
      updateStore("isLoading", false);
    }
  };

  return (
    <form action={handleAction} className="mb-2">
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

      <Label htmlFor="repassword">Re-type Password</Label>
      <Input
        type="password"
        id="repassword"
        name="repassword"
        placeholder="Re-type Password"
        required
        className="mb-4"
      />

      <Button type="submit" className="w-full" disabled={isLoading}>
        {isLoading ? <LuLoader className="animate-spin" /> : "Sign up"}
      </Button>
    </form>
  );
};

export default RegisterForm;
