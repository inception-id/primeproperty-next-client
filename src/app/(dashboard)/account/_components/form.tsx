"use client";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Agent } from "@/lib/api/agents/type";
import { ProfilePictureInput } from "@/components/custom-ui";
import { env } from "@/lib/env";
import { Button } from "@/components/ui/button";
import { z } from "zod";
import { toast } from "react-toastify";
import { uploadAgentProfilePicture } from "@/lib/s3";
import { updateAgent } from "@/lib/api/agents/update-agent";
import { useQueryClient } from "@tanstack/react-query";
import { useShallow } from "zustand/react/shallow";
import { useStore } from "../_stores";

type EditFormProps = {
  agent: Agent;
};

export const EditForm = ({ agent }: EditFormProps) => {
  const query = useQueryClient();
  const { setStore, loadingText } = useStore(
    useShallow((state) => ({
      loadingText: state.loadingText,
      setStore: state.setStore,
    })),
  );
  const handleAction = async (formData: FormData) => {
    const fullname = formData.get("fullname") as string;
    const phoneNumber = formData.get("phone_number") as string;
    const profilePicture = formData.get("profile_picture") as File;

    const zodSchema = z.object({
      fullname: z
        .string()
        .min(3, "Full name must be at least 3 characters long"),
      phoneNumber: z
        .string()
        .min(10, "Phone number must be at least 10 characters long")
        .max(15, "Phone number must be at most 15 characters long")
        .regex(/^[08]/, "Phone number must start with 0 or 8")
        .regex(/^[^a-zA-Z]*$/, "Invalid phone number"),
    });
    try {
      setStore("loadingText", "Updating...");
      const formValidation = zodSchema.safeParse({
        fullname,
        phoneNumber,
      });
      if (!formValidation.success) {
        const errorMsg = formValidation.error.errors[0].message;
        toast.error(errorMsg);
        return;
      }

      let profilePicturePath = null;
      if (profilePicture.size > 0) {
        profilePicturePath = await uploadAgentProfilePicture(
          agent.supertokens_user_id,
          formData,
        );
      }
      const updatedAgent = await updateAgent(agent.id, {
        fullname,
        phone_number: phoneNumber,
        profile_picture_url: profilePicturePath,
      });
      if (updatedAgent.status !== 200) {
        toast.error("Server error, refresh or try again later");
        return;
      }

      query.invalidateQueries({ queryKey: ["agent-by-supertokens-id"] });
      toast.success("Updated successfully");
      return;
    } catch (error) {
      console.error(error);
      toast.error("Server error, refresh or try again later");
    } finally {
      setStore("loadingText", "");
    }
  };
  return (
    <form className="flex flex-col gap-4 w-full max-w-sm" action={handleAction}>
      <ProfilePictureInput
        defaultProfileImage={
          agent.profile_picture_url
            ? `${env.NEXT_PUBLIC_S3_ENDPOINT}${agent.profile_picture_url}`
            : ""
        }
      />
      <div className="grid gap-2">
        <Label htmlFor="fullname">Full Name</Label>
        <Input
          id="fullname"
          type="text"
          name="fullname"
          placeholder="James Bond"
          required
          defaultValue={agent.fullname}
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
          max={15}
          defaultValue={agent.phone_number}
        />
      </div>

      <div className="flex justify-end">
        <Button type="submit" disabled={loadingText !== ""}>
          {loadingText ? loadingText : "Save"}
        </Button>
      </div>
    </form>
  );
};
