import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";
import { verifyEmailToken } from "@/lib/supertokens/verify-email-token";
import { toast } from "react-toastify";

const LoginEmailInput = () => {
  const seachParams = useSearchParams();
  const { data, isLoading } = useQuery({
    queryKey: ["verifyLoginEmail"],
    queryFn: async () => {
      const token = seachParams.get("t");
      if (token) {
        const verifyEmail = await verifyEmailToken(token);
        if (verifyEmail.status === "OK") {
          toast.success("Verification Successful, please login to continue.");
          return verifyEmail.email;
        }
      }
      return "";
    },
  });

  if (isLoading) {
    return (
      <div className="w-full h-10 rounded-lg bg-popover/50 animate-pulse" />
    );
  }

  return (
    <div>
      <Label htmlFor="email">Email</Label>
      <Input
        type="email"
        id="email"
        name="email"
        placeholder="Email"
        required
        className="mb-4"
        defaultValue={data}
      />
    </div>
  );
};

export default LoginEmailInput;
