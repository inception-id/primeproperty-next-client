"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useStore } from "../_stores";
import { z } from "zod";
import { toast } from "react-toastify";
import { LuLoader } from "react-icons/lu";
import { signupSupertokens } from "@/lib/supertokens/signup-supertokens";
import { createAgent } from "@/lib/api/agents/create-agent";

export const NewAgentForm = () => {
  const { resetStore, setStore, fullName, email, phoneNumber, loadingText } =
    useStore();

  const handleAction = async (formData: FormData) => {
    const fullname = formData.get("fullname") as string;
    const email = formData.get("email") as string;
    const phoneNumber = formData.get("phone_number") as string;

    const zodSchema = z.object({
      fullname: z
        .string()
        .min(3, "Full name must be at least 3 characters long"),
      email: z.string().min(1, "Email can not be empty").email("Invalid email"),
      phoneNumber: z
        .string()
        .min(10, "Phone number must be at least 10 characters long")
        .max(15, "Phone number must be at most 15 characters long")
        .regex(/^[08]/, "Phone number must start with 0 or 8"),
    });

    try {
      setStore("loadingText", "Processing...");
      const formValidation = zodSchema.safeParse({
        fullname,
        email,
        phoneNumber,
      });
      if (!formValidation.success) {
        const errorMsg = formValidation.error.errors[0].message;
        toast.error(errorMsg);
        return;
      }
      const supertokensSignup = await signupSupertokens(email);
      if (supertokensSignup.status !== "OK") {
        toast.error("Email already exists");
        return;
      }

      const payload = {
        supertokens_user_id: supertokensSignup.user.id,
        fullname: fullname.toString(),
        email: email.trim(),
        phone_number: phoneNumber.startsWith("0")
          ? phoneNumber.replace("0", "")
          : phoneNumber,
      };
      const agent = await createAgent(payload);
      console.log(agent);
      return;
    } catch (error) {
      console.error(error);
      toast.error("Server error, please try again later");
    } finally {
      setStore("loadingText", "");
    }
  };

  return (
    <form className="max-w-md flex flex-col gap-4" action={handleAction}>
      <div className="grid gap-2">
        <Label htmlFor="fullname">Full Name</Label>
        <Input
          id="fullname"
          type="text"
          name="fullname"
          placeholder="James Bond"
          required
          value={fullName}
          onChange={(e) => setStore("fullName", e.target.value)}
        />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          type="email"
          name="email"
          placeholder="email@primeproindonesia.com"
          required
          value={email}
          onChange={(e) => setStore("email", e.target.value)}
        />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="phone_number">Phone Number</Label>
        <Input
          id="phone_number"
          type="tel"
          name="phone_number"
          placeholder="08..."
          required
          min={10}
          value={phoneNumber}
          onChange={(e) => setStore("phoneNumber", e.target.value)}
        />
      </div>

      <Button type="submit" disabled={loadingText !== ""}>
        {loadingText !== "" ? (
          <span className="flex items-center gap-2">
            <LuLoader className="animate-spin" />
            Processing...
          </span>
        ) : (
          "Create"
        )}
      </Button>
    </form>
  );
};
