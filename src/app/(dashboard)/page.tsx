"use client";

import { useAgentBySupertokensId } from "@/hooks";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

const DashboardPage = () => {
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

  return (
    <div className="flex flex-col gap-4 items-center justify-center h-full">
      <Image
        src="/images/primepro.png"
        alt="Primepro"
        width={100}
        height={100}
      />
      <div className="text-center">
        <h1 className="text-xs">Welcome, {data?.data?.fullname}!</h1>
        <h2 className="font-semibold">What are you gonna do today?</h2>
      </div>

      <div className="grid grid-cols-2 gap-2">
        <Link href="/leads" className={cn(buttonVariants())}>
          See Leads
        </Link>
        <Link href="/properties" className={cn(buttonVariants())}>
          See Properties
        </Link>
      </div>
    </div>
  );
};

export default DashboardPage;
