"use client";

import { useAgentBySupertokensId } from "@/hooks";
import Image from "next/image";
import { EditForm } from "./form";

export const Account = () => {
  const { isLoading, data } = useAgentBySupertokensId();
  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-full">
        <Image
          src="/images/primepro.png"
          alt="Primepro"
          width={100}
          height={100}
          className="animate-bounce"
        />
      </div>
    );
  }

  if (!data?.data) {
    return (
      <div className="w-full h-full flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold">
          Server error, refresh or try again
        </h1>
      </div>
    );
  }

  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-4 gap-4">
      <h1 className="text-center font-bold">Account</h1>
      <EditForm agent={data.data} />
    </div>
  );
};
