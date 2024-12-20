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
    await removeSupertokensSession();
    await removeCookieToken();
    window.location.href = "/auth/login";
  };

  return (
    <Button variant="outline" onClick={handleClick}>
      {isLoading ? <LuLoader className={"animate-spin"} /> : "Logout"}
    </Button>
  );
};

export default AccountLogoutButton;
