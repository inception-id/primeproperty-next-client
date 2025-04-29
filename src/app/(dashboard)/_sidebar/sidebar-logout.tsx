"use client";
import { Button } from "@/components/ui/button";
import { getAgentTokenData } from "@/lib/cookie/get-agent-token-data";
import { removeTokenCookie } from "@/lib/cookie/remove-token-cookie";
import { removeSupertokensSession } from "@/lib/supertokens/remove-supertokens-session";
import { useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { LuLoader, LuLogOut } from "react-icons/lu";
import { Tooltip } from "react-tooltip";

export const LogoutButton = () => {
  const queryClient = useQueryClient();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = async () => {
    try {
      setIsLoading(true);
      queryClient.invalidateQueries({ queryKey: ["agents-by-supertokens-id"] });
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
    <>
      <Button
        variant="ghost"
        size="icon"
        disabled={isLoading}
        onClick={handleClick}
        data-tooltip-id="sidebar-logout"
        data-tooltip-content="Logout"
      >
        {isLoading ? <LuLoader className="animate-spin" /> : <LuLogOut />}
      </Button>
      <Tooltip id="sidebar-logout" />
    </>
  );
};
