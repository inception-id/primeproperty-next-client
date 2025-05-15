"use client";
import Image from "next/image";
import { PropertiesFilter } from "./fillters";
import Link from "next/link";
import { MdWhatsapp } from "react-icons/md";
import { createAskUrl } from "@/lib/create-ask-url";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { FindPropertyQuery } from "@/lib/api/properties/find-properties";
import { env } from "@/lib/env";
import { useMemo } from "react";
import { usePathname } from "next/navigation";

type PropertyNotFoundProps = {
  searchParams: FindPropertyQuery;
};

export const PropertyNotFound = ({ searchParams }: PropertyNotFoundProps) => {
  const pathname = usePathname();
  const url = useMemo(() => {
    const baseUrl = env.NEXT_PUBLIC_HOST_URL;
    const newSearchParams = new URLSearchParams(searchParams);

    return baseUrl + pathname + "?" + newSearchParams.toString();
  }, [searchParams, pathname]);
  return (
    <div className="container mx-auto px-4 flex flex-col items-center justify-center h-96 gap-4">
      <Image src="/images/primepro.png" alt="Primepro" width={75} height={75} />
      <h1 className="font-bold text-xl">
        Properti tidak ditemukan untuk{" "}
        {searchParams?.buiding_type ?? "properti"} di {searchParams?.regency}{" "}
        {searchParams?.province}
      </h1>

      <PropertiesFilter searchParams={{}} />

      <span className="text-muted-foreground">atau</span>

      <Link
        href={createAskUrl(url)}
        target="_blank"
        className={cn(buttonVariants({ variant: "outline" }))}
      >
        <MdWhatsapp />
        Tanya langsung
      </Link>
    </div>
  );
};
