"use client";
import { Button, buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useStore } from "../_stores";
import { z } from "zod";
import { toast } from "react-toastify";
import { LuChevronLeft, LuLoader } from "react-icons/lu";
import { signupSupertokens } from "@/lib/supertokens/signup-supertokens";
import { createAgent } from "@/lib/api/agents/create-agent";
import { createSupertokensResetPasswordToken } from "@/lib/supertokens/create-supertokens-reset-password-token";
import { sendNewPasswordMail } from "@/lib/mail/send-new-password-mail";
import { ProfilePictureInput } from "@/components/custom-ui/profile-picture-input";
import { uploadAgentProfilePicture } from "@/lib/s3";
import Link from "next/link";
import { cn } from "@/lib/utils";

export const NewAgentForm = () => {
  const { resetStore, setStore, fullName, email, phoneNumber, loadingText } =
    useStore();

  const handleAction = async (formData: FormData) => {
    const fullname = formData.get("fullname") as string;
    const email = formData.get("email") as string;
    const phoneNumber = formData.get("phone_number") as string;
    const profilePicture = formData.get("profile_picture") as File;

    const zodSchema = z.object({
      fullname: z
        .string()
        .min(3, "Full name must be at least 3 characters long"),
      email: z.string().min(1, "Email can not be empty").email("Invalid email"),
      phoneNumber: z
        .string()
        .min(10, "Phone number must be at least 10 characters long")
        .max(15, "Phone number must be at most 15 characters long")
        .regex(/^[08]/, "Phone number must start with 0 or 8")
        .regex(/^[^a-zA-Z]*$/, "Invalid phone number"),
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

      let profilePicturePath = null;
      if (profilePicture.size > 0) {
        setStore("loadingText", "Uploading profile picture...");
        profilePicturePath = await uploadAgentProfilePicture(
          supertokensSignup.user.id,
          formData,
        );
      }

      const payload = {
        supertokens_user_id: supertokensSignup.user.id,
        fullname: fullname.toString(),
        email: email.trim(),
        phone_number: phoneNumber.startsWith("0")
          ? phoneNumber.replace("0", "")
          : phoneNumber,
        profile_picture_url: profilePicturePath,
      };
      const agent = await createAgent(payload);
      if (agent.status === 400) {
        toast.error(agent.message);
        return;
      }

      setStore("loadingText", "Sending email invitation...");
      const resetPasswordToken = await createSupertokensResetPasswordToken(
        supertokensSignup.user.id,
        email.trim(),
      );
      const newPasswordMail = await sendNewPasswordMail(
        email.trim(),
        resetPasswordToken.token,
      );
      if (newPasswordMail.accepted.length > 0) {
        toast.success(
          "Agent created successfully, please have them check their inbox or spam folder",
        );
      } else {
        toast.warn(
          "Agent created but fail to send invitation email, please have them reset their password manually",
        );
      }
      resetStore();
      return;
    } catch (error) {
      console.error(error);
      toast.error("Server error, please try again later");
    } finally {
      setStore("loadingText", "");
    }
  };

  return (
    <form className="max-w-sm flex flex-col gap-4" action={handleAction}>
      <ProfilePictureInput />
      <div className="grid gap-2">
        <Label htmlFor="fullname">Name</Label>
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
          placeholder="email@example.com"
          required
          value={email}
          onChange={(e) => setStore("email", e.target.value)}
        />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="phone_number">Phone</Label>
        <Input
          id="phone_number"
          type="tel"
          name="phone_number"
          placeholder="08..."
          required
          min={10}
          max={15}
          value={phoneNumber}
          onChange={(e) => setStore("phoneNumber", e.target.value)}
        />
      </div>

      <div className="flex items-center justify-between">
        <Link
          href="/agent/list"
          className={cn(buttonVariants({ variant: "outline" }))}
        >
          <LuChevronLeft />
          Back
        </Link>
        <Button
          type="submit"
          disabled={loadingText !== ""}
          className="flex-1 max-w-[33.3%]"
        >
          {loadingText !== "" ? (
            <span className="flex items-center gap-2">
              <LuLoader className="animate-spin" />
              {loadingText}
            </span>
          ) : (
            "Invite"
          )}
        </Button>
      </div>
    </form>
  );
};
