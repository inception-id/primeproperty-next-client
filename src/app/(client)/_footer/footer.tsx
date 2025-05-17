"use client";
import { cn } from "@/lib/utils";
import { useParams, usePathname } from "next/navigation";
import { MdCopyright } from "react-icons/md";
import { FooterBrand } from "./brand";
import { FooterPropertyArea } from "./area";
import { FooterBuildingTypes } from "./building-types";
import { FooterContact } from "./contact";

export const Footer = () => {
  const params = useParams();
  const pathname = usePathname();
  return (
    <footer>
      <div
        className={cn(
          "container mx-auto p-4 border-t grid gap-8",
          pathname.includes("/properties") &&
            params?.path?.length === 1 &&
            !Number.isNaN(+params.path[0]) &&
            "max-w-6xl",
        )}
      >
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          <FooterBrand />
          <FooterContact />
          <FooterPropertyArea />
          <FooterBuildingTypes />
        </div>

        <div className="flex flex-col gap-2 text-sm lg:justify-center lg:flex-row text-muted-foreground">
          <span>Developed by Primepro Indonesia</span>
          <span className="flex items-center gap-1">
            <MdCopyright />
            {new Date().getFullYear()} PRIMEPRO INDONESIA. All Rights Reserved.
          </span>
        </div>
      </div>
    </footer>
  );
};
