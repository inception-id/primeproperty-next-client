"use client";

import { Button } from "@/components/ui/button";
import { copyToClipboard } from "@/lib/copyToClipboard";
import { LuCopy } from "react-icons/lu";

type DeveloperCliendIdProps = {
  clientId: string;
};

export const DeveloperClientId = ({ clientId }: DeveloperCliendIdProps) => {
  return (
    <div className="flex flex-col gap-2 md:flex-row md:items-center">
      <div className="min-w-20">Client ID:</div>
      <Button onClick={async () => await copyToClipboard(clientId)}>
        <LuCopy />
        <span>{clientId}</span>
      </Button>
    </div>
  );
};
