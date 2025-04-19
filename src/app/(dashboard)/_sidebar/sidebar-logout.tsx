"use client";
import { Button } from "@/components/ui/button";
import { getAgentTokenData } from "@/lib/cookie/get-agent-token-data";
import { removeTokenCookie } from "@/lib/cookie/remove-token-cookie";
import { removeSupertokensSession } from "@/lib/supertokens/remove-supertokens-session";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { LuLoader, LuLogOut } from "react-icons/lu";

export const LogoutButton = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = async () => {
    try {
      setIsLoading(true);
      const agent = await getAgentTokenData();
      if (agent) {
        await removeSupertokensSession(agent?.supertokens_user_id);
      }
    } catch (error) {
      console.error(error);
    } finally {
      await removeTokenCookie();
      setIsLoading(false);
      router.push("/auth");
    }
  };
  return (
    <Button
      variant="ghost"
      size="icon"
      disabled={isLoading}
      onClick={handleClick}
    >
      {isLoading ? <LuLoader className="animate-spin" /> : <LuLogOut />}
    </Button>
  );
};
