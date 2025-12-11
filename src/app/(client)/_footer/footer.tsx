"use client";
import { createOrganizationSchema } from "@/lib/schema";
import Image from "next/image";
import Script from "next/script";
import { MdOutlineLocationOn } from "react-icons/md";
import Link from "next/link";
import {
  LuFacebook,
  LuInstagram,
  LuLinkedin,
  LuYoutube,
  LuMail,
  LuPhone,
  LuCopyright,
} from "react-icons/lu";
import { buttonVariants } from "@/components/ui/button";
import { usePropertiesSitePaths } from "@/hooks/properties/use-properties-site-paths";
import { useMemo } from "react";
import { cn } from "@/lib/utils";

const Organization = () => {
  return (
    <div id="organization" className="flex flex-col gap-4">
      <div className="flex items-center gap-2">
        <Image
          src="/images/primepro.png"
          alt="PrimePro Indonesia"
          width={25}
          height={25}
          id="logo"
        />
        <h2 className="text-lg font-semibold">PRIMEPRO INDONESIA</h2>
      </div>

      <div className="flex items-center gap-4">
        <LuPhone />
        <p className="text-muted-foreground">+62-821-1616-2995</p>
      </div>
      <div className="flex items-center gap-4">
        <LuMail />
        <p className="text-muted-foreground">primeproagent@gmail.com</p>
      </div>
      <div className="flex items-start gap-4">
        <div className="pt-1">
          <MdOutlineLocationOn />
        </div>
        <div className="text-muted-foreground">
          <p>Kemang Icon Jakarta,</p>
          <p>Jl. Kemang Raya No 1,</p>
          <p>Jakarta Selatan, 12730</p>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <Link
          href="https://www.facebook.com/share/1BHTU7HvZx/"
          className={buttonVariants({ size: "icon", variant: "outline" })}
        >
          <LuFacebook />
        </Link>
        <Link
          href="https://www.instagram.com/primepro_id/"
          className={buttonVariants({ size: "icon", variant: "outline" })}
        >
          <LuInstagram />
        </Link>
        <Link
          href="https://www.linkedin.com/company/primepro-indonesia/"
          className={buttonVariants({ size: "icon", variant: "outline" })}
        >
          <LuLinkedin />
        </Link>
        <Link
          href="https://www.youtube.com/@primeproindonesia"
          className={buttonVariants({ size: "icon", variant: "outline" })}
        >
          <LuYoutube />
        </Link>
      </div>
    </div>
  );
};

const FooterMenu = () => {
  const sitePaths = usePropertiesSitePaths(true);

  const navigationPaths = useMemo(() => {
    if (sitePaths.data?.data && sitePaths?.data?.data?.length > 0) {
      const forSale = sitePaths.data?.data
        ?.filter((path) => path.includes("/dijual/"))
        .map((path) => path.split("/"));

      const forSaleBuildingTypes = forSale
        .filter((path) => path.length === 3)
        .map((path) => ({
          label: `${path[2]} dijual`.replaceAll("-", " "),
          value: path.join("/"),
        }));
      const forSaleProvince = forSale
        .filter((path) => path.length === 4)
        .map((path) => ({
          label: `${path[2]} dijual ${path[3]}`.replaceAll("-", " "),
          value: path.join("/"),
        }));
      const forSaleRegency = forSale
        .filter((path) => path.length === 5)
        .map((path) => ({
          label: `${path[2]} dijual ${path[4]}`.replaceAll("-", " "),
          value: path.join("/"),
        }));

      const forRent = sitePaths.data?.data
        ?.filter((path) => path.includes("/disewa/"))
        .map((path) => path.split("/"));

      const forRentBuildingTypes = forRent
        .filter((path) => path.length === 3)
        .map((path) => ({
          label: `${path[2]} disewa`.replaceAll("-", " "),
          value: path.join("/"),
        }));
      const forRentProvince = forRent
        .filter((path) => path.length === 4)
        .map((path) => ({
          label: `${path[2]} disewa ${path[3]}`.replaceAll("-", " "),
          value: path.join("/"),
        }));
      const forRentRegency = forRent
        .filter((path) => path.length === 5)
        .map((path) => ({
          label: `${path[2]} disewa ${path[4]}`.replaceAll("-", " "),
          value: path.join("/"),
        }));

      return {
        forSaleBuildingTypes,
        forSaleProvince,
        forSaleRegency,
        forRentBuildingTypes,
        forRentProvince,
        forRentRegency,
      };
    }

    return null;
  }, [sitePaths.data]);

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-xl font-bold">Daftar Properti</h1>
      <div className="grid lg:grid-cols-2 xl:grid-cols-4 font-sans flex-1 w-full gap-4">
        <div className="flex flex-col">
          <div className="flex flex-col">
            {navigationPaths?.forSaleBuildingTypes.map((path) => (
              <Link
                key={path.value}
                title={path.label}
                href={`/properties${path.value}`}
                className={cn(
                  buttonVariants({ variant: "link" }),
                  "justify-start capitalize pl-0",
                )}
              >
                {path.label}
              </Link>
            ))}
          </div>
          <div className="flex flex-col">
            {navigationPaths?.forRentBuildingTypes.map((path) => (
              <Link
                key={path.value}
                title={path.label}
                href={`/properties${path.value}`}
                className={cn(
                  buttonVariants({ variant: "link" }),
                  "justify-start capitalize pl-0",
                )}
              >
                {path.label}
              </Link>
            ))}
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex flex-col">
            {navigationPaths?.forSaleProvince.map((path) => (
              <Link
                key={path.value}
                title={path.label}
                href={`/properties${path.value}`}
                className={cn(
                  buttonVariants({ variant: "link" }),
                  "justify-start capitalize pl-0",
                )}
              >
                {path.label}
              </Link>
            ))}
          </div>
          <div className="flex flex-col">
            {navigationPaths?.forRentProvince.map((path) => (
              <Link
                key={path.value}
                title={path.label}
                href={`/properties${path.value}`}
                className={cn(
                  buttonVariants({ variant: "link" }),
                  "justify-start capitalize pl-0",
                )}
              >
                {path.label}
              </Link>
            ))}
          </div>
        </div>
        <div className="flex flex-col">
          {navigationPaths?.forSaleRegency.map((path) => (
            <Link
              key={path.value}
              title={path.label}
              href={`/properties${path.value}`}
              className={cn(
                buttonVariants({ variant: "link" }),
                "justify-start capitalize pl-0",
              )}
            >
              {path.label}
            </Link>
          ))}
        </div>
        <div className="flex flex-col">
          {navigationPaths?.forRentRegency.map((path) => (
            <Link
              key={path.value}
              title={path.label}
              href={`/properties${path.value}`}
              className={cn(
                buttonVariants({ variant: "link" }),
                "justify-start capitalize pl-0",
              )}
            >
              {path.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export const Footer = () => {
  const organizationSchema = createOrganizationSchema();
  return (
    <>
      <Script
        id="website"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema).replace(/</g, "\\u003c"),
        }}
      />
      <footer className="container mx-auto py-16 px-4">
        <div className="flex flex-col lg:flex-row gap-8">
          <Organization />
          <FooterMenu />
        </div>
        <div className="flex items-center lg:justify-center gap-2 text-muted-foreground mt-16">
          <LuCopyright />
          <span className="text-xs ">
            PrimePro Indonesia {new Date().getFullYear()}
          </span>
        </div>
      </footer>
    </>
  );
};
