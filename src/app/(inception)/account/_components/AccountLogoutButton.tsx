"use client";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { removeSupertokensSession } from "@/lib/supertokens/removeSupertokensSession";
import { removeCookieToken } from "@/lib/supertokens/removeCookieToken";
import { LuLoader } from "react-icons/lu";

const AccountLogoutButton = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = async () => {
    setIsLoading(true);
    const [session, token] = await Promise.allSettled([
      await removeSupertokensSession(),
    await removeCookieToken()
    ]);
    if (session.status === "fulfilled" && token.status === "fulfilled") {
    window.location.href = "/auth/login";
    }
    setIsLoading(false);
  };

  return (
    <Button variant="outline" onClick={handleClick}>
      {isLoading ? <LuLoader className={"animate-spin"} /> : "Logout"}
    </Button>
  );
};

export default AccountLogoutButton;
