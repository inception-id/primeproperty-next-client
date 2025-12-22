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
import {
  PROPERTIES_TYPES,
  FOOTER_PROVINCE,
  FOOTER_STREET_HOME,
} from "../_header/constant";

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

      <div className="flex items-center gap-4">
        <LuMail />
        <p className="text-muted-foreground">primeproagent@gmail.com</p>
      </div>
      <div className="flex items-center gap-4">
        <LuPhone />
        <p className="text-muted-foreground">+62-821-1616-2995</p>
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
      <footer className="container mx-auto p-4 flex flex-col gap-8">
        <div className="flex flex-col lg:grid grid-cols-4 gap-8">
          <Organization />
          <div className="flex flex-col gap-4">
            <h3 className="text-xl font-bold">Daftar Properti</h3>

            {PROPERTIES_TYPES.map((type) => (
              <Link
                title={type.key}
                key={type.key}
                href={type.value}
                className="hover:underline"
              >
                {type.key}
              </Link>
            ))}
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="text-xl font-bold">Wilayah Properti</h3>

            {FOOTER_PROVINCE.map((type) => (
              <Link
                title={`Properti ${type.key}`}
                key={type.key}
                href={type.value}
                className="hover:underline"
              >
                {type.key}
              </Link>
            ))}
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="text-xl font-bold">Daerah Properti</h3>

            {FOOTER_STREET_HOME.map((type) => (
              <Link
                title={`Properti ${type.key}`}
                key={type.key}
                href={type.value}
                className="hover:underline"
              >
                {type.key}
              </Link>
            ))}
          </div>
        </div>
        <div className="flex items-center lg:justify-center gap-4 text-muted-foreground ">
          <LuCopyright />
          <span className="text-xs ">
            PrimePro Indonesia {new Date().getFullYear()}
          </span>
        </div>
      </footer>
    </>
  );
};
