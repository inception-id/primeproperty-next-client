"use client";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "react-toastify";
import { changePassword } from "@/lib/supertokens/changePassword";
import { useRouter } from "next/navigation";
import { removeSupertokensSession } from "@/lib/supertokens/removeSupertokensSession";
import { removeCookieToken } from "@/lib/supertokens/removeCookieToken";

const ChangePasswordForm = () => {
  const router = useRouter();

  const handleAction = async (formdata: FormData) => {
    const oldPassword = formdata.get("old_password") as string;
    const newPassword = formdata.get("new_password") as string;
    const retypePassword = formdata.get("retype_password") as string;

    if (newPassword !== retypePassword) {
      toast.warning("New password does not match");
      return;
    }

    try {
      const changePass = await changePassword(oldPassword, newPassword);
      if (changePass.data.status === "OK") {
        toast.success("Password changed successfully, please login again,");
        await removeSupertokensSession();
        await removeCookieToken();
        router.push("/auth/login");
      }

      toast.error(changePass.data.message);
      return;
    } catch (e: any) {
      toast.error("Something went wrong, please try again");
      console.error(e.message);
    }
  };

  return (
    <form action={handleAction} className="w-fit">
      <Label htmlFor="old_password">Old Password</Label>
      <Input
        id="old_password"
        type="password"
        name="old_password"
        required
        className="mb-4"
      />
      <Label htmlFor="new_password">New Password</Label>
      <Input
        id="new_password"
        type="password"
        name="new_password"
        required
        className="mb-4"
      />
      <Label htmlFor="retype_password">Re-type Password</Label>
      <Input
        id="retype_password"
        type="password"
        name="retype_password"
        required
        className="mb-4"
      />

      <Button type="submit">Change password</Button>
    </form>
  );
};

export default ChangePasswordForm;
